<script setup lang="ts">
import InventoryCells from './components/InventoryCells.vue'
import InventorySearch from './components/InventorySearch.vue'
import ItemInfoCard from './components/ItemInfoCard.vue'
</script>

<template>
  <div class="app__container">
    <div class="app__content">
      <ItemInfoCard />
      <InventoryCells />
    </div>
    <InventorySearch />
  </div>
</template>

<style scoped lang="scss">
.app__container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px;
  max-width: 858px;
  width: 100%;
  height: 660px;
  background-color: #1d1d1d;
  border-radius: 20px;
}

.app__content {
  display: flex;
  gap: 24px;
}
</style>
