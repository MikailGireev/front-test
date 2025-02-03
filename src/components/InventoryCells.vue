<script setup lang="ts">
import InventoryCell from './InventoryCell.vue'

const getCornerClass = (index: number) => {
  if (index === 0) return 'corner-top-left'
  if (index === 4) return 'corner-top-right'
  if (index === 20) return 'corner-bottom-left'
  if (index === 24) return 'corner-bottom-right'
  return ''
}
</script>

<template>
  <div class="inventory__cells">
    <InventoryCell
      v-for="(_, index) in 25"
      :key="index"
      :index="index"
      :class="getCornerClass(index)"
    />
  </div>
</template>

<style scoped lang="scss">
.inventory__cells {
  display: grid;
  grid-template-columns: repeat(5, 105px);
  grid-template-rows: repeat(5, 100px);
}
</style>
