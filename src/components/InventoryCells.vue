<script setup lang="ts">
import { useInventoryItem } from '@/stores/useInventoryItem'
import InventoryCell from './InventoryCell.vue'
import InventoryItem from './InventoryItem.vue'
import { computed, ref } from 'vue'
import InventorySidebar from './InventorySidebar.vue'

const store = useInventoryItem()
const draggedItemId = ref<string | null>(null)

const getCornerClass = (index: number) => {
  if (index === 0) return 'corner-top-left'
  if (index === 4) return 'corner-top-right'
  if (index === 20) return 'corner-bottom-left'
  if (index === 24) return 'corner-bottom-right'
  return ''
}

const inventoryGrid = computed(() => {
  const grid = Array(25).fill(undefined)
  store.items.forEach((item, index) => {
    if (index < 25) grid[index] = item ?? undefined
  })

  return grid
})

const onDragStart = (id: string) => {
  draggedItemId.value = id
}

const onDrop = (targetIndex: number) => {
  if (!draggedItemId.value) return

  const sourceIndex = store.items.findIndex((item) => item?.id === draggedItemId.value)
  if (sourceIndex === -1 || targetIndex === sourceIndex) return

  store.items[targetIndex] = store.items[sourceIndex]
  store.items[sourceIndex] = undefined

  draggedItemId.value = null
}
</script>

<template>
  <div class="inventory__cells">
    <InventoryCell
      v-for="(cell, index) in inventoryGrid"
      :key="index"
      :index="index"
      :class="getCornerClass(index)"
      @dragover.prevent
      @drop="onDrop(index)"
      ><InventoryItem
        v-if="cell"
        :id="cell.id"
        :background-color="cell.backgroundColor"
        :shadow-color="cell.shadowColor"
        :quantity="cell.quantity"
        :selectedId="store.selectedItem?.id"
        @click="store.selectItem(cell)"
        @drag-start="onDragStart"
      />
    </InventoryCell>
    <InventorySidebar :isOpen="store.isOpen" :item="store.selectedItem ?? undefined" />
  </div>
</template>

<style scoped lang="scss">
.inventory__cells {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 105px);
  grid-template-rows: repeat(5, 100px);
}
</style>
