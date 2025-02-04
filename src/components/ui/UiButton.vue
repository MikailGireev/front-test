<script setup lang="ts">
const props = defineProps<{
  width?: string
  padding: string
  textColor: string
  backgroundColor: string
  fontSize: string
}>()
</script>

<template>
  <button
    class="ui-button"
    :style="{
      color: props.textColor,
      backgroundColor: props.backgroundColor,
      width: props.width,
      padding: props.padding,
      fontSize: props.fontSize,
    }"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.ui-button {
  text-align: center;
  border: none;
  border-radius: 8px;
  cursor: url('/icons/Cursor-1.png'), auto;
}
</style>
