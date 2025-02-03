<script setup lang="ts">
import UiTextSkeleton from './ui/UiTextSkeleton.vue'
</script>

<template>
  <div class="inventory__search_container">
    <UiTextSkeleton max-width="699px" width="100%" height="36px" margin-bottom="0px" />
    <img src="/public/icons/Vector.svg" alt="Closed" />
  </div>
</template>

<style scoped lang="scss">
.inventory__search_container {
  position: relative;
  padding: 18px 68px 18px 18px;
  margin-top: 24px;
  background-color: #262626;

  img {
    top: 14px;
    right: 14px;
    position: absolute;
  }
}
</style>
