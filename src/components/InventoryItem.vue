<script setup lang="ts">
import type { ItemValue } from '@/utils/types'

const props = defineProps<ItemValue>()
</script>

<template>
  <div class="item__wrapper">
    <div class="item__shadow" :style="{ backgroundColor: props.shadowColor }"></div>
    <div class="item" :style="{ backgroundColor: props.backgroundColor }"></div>
    <span>{{ props.quantity }}</span>
  </div>
</template>

<style scoped lang="scss">
.item__wrapper {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;

  span {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: -18px;
    right: -26px;
    border: 1px solid #4d4d4d;
    color: #4d4d4d;
  }
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
  z-index: 0;
}
</style>
