import type { ItemValue } from '@/utils/types'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useInventoryItem = defineStore('inventoryItem', () => {
  const selectedItem = ref<ItemValue | null>(null)
  const isOpen = ref(false)
  const items = ref<(ItemValue | undefined)[]>([
    {
      id: '1',
      backgroundColor: '#7FAA65',
      shadowColor: '#B8D99859',
      quantity: 4,
    },
    {
      id: '2',
      backgroundColor: '#AA9765',
      shadowColor: '#D9BB9859',
      quantity: 2,
    },
    {
      id: '3',
      backgroundColor: '#656CAA',
      shadowColor: '#7481ED59',
      quantity: 5,
    },
  ])

  const selectItem = (item: ItemValue) => {
    isOpen.value = true
    selectedItem.value = { ...item }
  }

  const close = () => {
    isOpen.value = false
    selectedItem.value = null
  }

  const selectedItemId = computed(() => selectedItem.value?.id)

  return { items, selectItem, selectedItemId, selectedItem, isOpen, close }
})
