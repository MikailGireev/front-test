<script setup lang="ts">
import UiSkeleton from './ui/UiSkeleton.vue'
import UiTextSkeleton from './ui/UiTextSkeleton.vue'
import UiTitleSkeleton from './ui/UiTitleSkeleton.vue'
</script>

<template>
  <div class="item__info">
    <div class="item__info_img">
      <img src="/Img Blur.png" alt="Item image" />
    </div>
    <div class="item__info_text">
      <UiSkeleton>
        <UiTitleSkeleton />
        <UiTextSkeleton max-width="110px" width="100%" height="10px" margin-bottom="16px" />
        <UiTextSkeleton max-width="190px" width="100%" height="10px" margin-bottom="16px" />
        <UiTextSkeleton max-width="170px" width="100%" height="10px" margin-bottom="16px" />
        <UiTextSkeleton max-width="160px" width="100%" height="10px" margin-bottom="16px" />
        <UiTextSkeleton max-width="140px" width="100%" height="10px" margin-bottom="24px" />
        <UiTextSkeleton max-width="80px" width="100%" height="10px" margin-bottom="24px" />
      </UiSkeleton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item__info {
  padding: 18px 14px;
  width: 236px;
  height: 500px;
  background-color: #262626;
  border-radius: 10px;
}

.item__info_img {
  margin-bottom: 20px;
  img {
    width: 100%;
  }
}
</style>
