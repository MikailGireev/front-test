import type { ItemValue } from '@/utils/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useInventoryItem = defineStore('inventoryItem', () => {
  const items = ref<ItemValue[]>([
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

  return { items }
})
