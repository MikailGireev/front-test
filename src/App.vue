<script setup lang="ts">
import ItemInfoCard from './components/ItemInfoCard.vue'
</script>

<template>
  <div class="app__container">
    <ItemInfoCard />
  </div>
</template>

<style scoped lang="scss">
.app__container {
  padding: 32px;
  max-width: 858px;
  width: 100%;
  height: 660px;
  background-color: #1d1d1d;
  border-radius: 20px;
}
</style>
