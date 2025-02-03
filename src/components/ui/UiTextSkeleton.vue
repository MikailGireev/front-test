<script setup lang="ts">
import type { SkeletonTitle } from '@/utils/types'
import { defineProps } from 'vue'
const props = defineProps<SkeletonTitle>()
</script>

<template>
  <p
    :style="{
      maxWidth: props.maxWidth,
      width: props.width,
      height: props.height,
      marginBottom: props.marginBottom,
    }"
    class="skeleton__text"
  ></p>
</template>

<style scoped lang="scss">
.skeleton__text {
  background: linear-gradient(#3c3c3c, #444444, #333333);
  border-radius: 10px;
}
</style>
