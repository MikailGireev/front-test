<script setup lang="ts">
import UiButton from './ui/UiButton.vue'

const props = defineProps<{
  isDelete: boolean
}>()

const emit = defineEmits(['update:isDelete'])

const onCancel = () => {
  emit('update:isDelete', false)
}
</script>

<template>
  <div class="item__delete" :class="{ 'item__delete-active': props.isDelete }">
    <input class="item__delete-input" type="text" placeholder="Введите количество" />
    <div class="item__delete-button">
      <UiButton
        @click="onCancel"
        width="88px"
        background-color="#FFFFFF"
        text-color="#2D2D2D"
        font-size="14px"
        padding="8px 0"
        >Отмена</UiButton
      >
      <UiButton
        width="112px"
        background-color="#FA7272"
        text-color="#FFFFFF"
        font-size="14px"
        padding="8px 0"
        >Подтвердить</UiButton
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.item__delete {
  background-color: #26262699;
  backdrop-filter: blur(16px);
  border-top: 1px solid #4d4d4d;
  position: absolute;
  height: 0px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  z-index: 2;
  transition:
    height 0.3s ease-in-out,
    padding 0.3s ease-in-out;
}

.item__delete-active {
  height: 133px;
  padding: 20px 21px;
}

.item__delete-input {
  background-color: #262626;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  border: 1px solid #4d4d4d;
  width: 210px;
  padding: 12px 0 12px 12px;
}

.item__delete-button {
  display: flex;
  gap: 10px;
}
</style>
