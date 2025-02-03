<script setup lang="ts"></script>

<template>
  <div class="skeleton">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.skeleton {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
