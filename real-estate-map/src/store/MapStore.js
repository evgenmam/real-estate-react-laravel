import create from 'zustand'
import { api } from '../utils/api'

const useMapStore = create((set, get) => ({
  map: null,
  properties: [],
  filters: { types: [], price: [1000, 20000], rooms: null, bathrooms: null },

  setMap: (map) => {
    set({ map: map })
  },

  setFilters: (filter) => {
    set((state) => ({ filters: { ...state.filters, ...filter } }))
  },
}))

export default useMapStore
