<script setup lang="ts">
import type { ItemValue } from '@/utils/types'
import UiSkeleton from './ui/UiSkeleton.vue'
import UiTextSkeleton from './ui/UiTextSkeleton.vue'
import UiTitleSkeleton from './ui/UiTitleSkeleton.vue'
import { useInventoryItem } from '@/stores/useInventoryItem'
import UiButton from './ui/UiButton.vue'

const props = defineProps<{ isOpen: boolean; item?: ItemValue }>()
const store = useInventoryItem()
</script>

<template>
  <div class="inventory__sidebar" :class="{ 'inventory__sidebar-active': props.isOpen }">
    <img @click="store.close" class="sidebar__close" src="/public/icons/Vector.svg" alt="" />
    <div class="sidebar__item">
      <div class="item__wrapper">
        <div class="item__shadow" :style="{ backgroundColor: props.item?.shadowColor }"></div>
        <div class="item" :style="{ backgroundColor: props.item?.backgroundColor }"></div>
      </div>
    </div>
    <hr style="margin-top: 25px" />
    <UiSkeleton class="sidebar__skeleton">
      <UiTitleSkeleton />
      <UiTextSkeleton max-width="110px" width="100%" height="10px" margin-bottom="16px" />
      <UiTextSkeleton max-width="190px" width="100%" height="10px" margin-bottom="16px" />
      <UiTextSkeleton max-width="170px" width="100%" height="10px" margin-bottom="16px" />
      <UiTextSkeleton max-width="160px" width="100%" height="10px" margin-bottom="16px" />
      <UiTextSkeleton max-width="140px" width="100%" height="10px" margin-bottom="24px" />
      <UiTextSkeleton max-width="80px" width="100%" height="10px" margin-bottom="0px" />
    </UiSkeleton>
    <hr style="margin-top: 20px" />
    <UiButton
      style="margin-top: 10px"
      width="220px"
      padding="11px 0"
      text-color="#ffffff"
      background-color="#FF8888"
      font-size="14px"
      >Удалить предмет</UiButton
    >
  </div>
</template>

<style scoped lang="scss">
.inventory__sidebar {
  position: absolute;
  top: 0px;
  background-color: #26262680;
  backdrop-filter: blur(5px);
  width: 0px;
  height: 500px;
  right: 0;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  padding: 0;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  z-index: 1000;
  transition:
    width 0.3s ease-in-out,
    padding 0.3s ease-in-out;

  hr {
    background-color: #4d4d4d;
    height: 2px;
    width: 220px;
    border: none;
  }

  .sidebar__skeleton {
    margin-top: 16px;
  }

  .sidebar__close {
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 10px;
  }
}

.sidebar__item {
  margin-top: 45px;
}

.inventory__sidebar-active {
  width: 250px;
  padding: 15px;
}

.item__wrapper {
  position: relative;
  width: 115px;
  height: 115px;

  .item__shadow {
    position: absolute;
    bottom: 14px;
    left: 14px;
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
}
</style>
