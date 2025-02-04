<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  id: string
  backgroundColor: string
  shadowColor: string
  quantity: number
  selectedId?: string | null
}>()

const emit = defineEmits(['drag-start'])

const isSelected = computed(() => props.selectedId === props.id)
</script>

<template>
  <div
    class="inventory__item"
    :class="{ selected: isSelected }"
    draggable="true"
    @dragstart="emit('drag-start', props.id)"
  >
    <div class="item__wrapper">
      <div class="item__shadow" :style="{ backgroundColor: props.shadowColor }"></div>
      <div class="item" :style="{ backgroundColor: props.backgroundColor }"></div>
    </div>
    <p class="item__quantity">{{ props.quantity }}</p>
  </div>
</template>

<style lang="scss">
.inventory__item {
  cursor: url('/public/clarity_cursor-hand-line.png'), auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.item__wrapper {
  position: relative;
  width: 48px;
  height: 48px;
}

.item__quantity {
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 18px;
  height: 18px;
  font-size: 10px;
  color: #ffff;
  border: 1px solid #4d4d4d;
  border-radius: 4px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item__shadow {
  position: absolute;
  bottom: 6px;
  left: 6px;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.selected {
  background-color: #2f2f2f;
}
</style>
