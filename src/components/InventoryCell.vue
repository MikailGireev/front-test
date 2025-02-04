<script setup lang="ts"></script>

<template>
  <div class="inventory__cell">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.inventory__cell {
  width: 105px;
  height: 100px;
  border: 1px solid #4d4d4d;
  background-color: #262626;
  display: flex;
  align-items: center;
  justify-content: center;
}

.corner-top-left {
  border-top-left-radius: 10px;
}
.corner-top-right {
  border-top-right-radius: 10px;
}
.corner-bottom-left {
  border-bottom-left-radius: 10px;
}
.corner-bottom-right {
  border-bottom-right-radius: 10px;
}
</style>
