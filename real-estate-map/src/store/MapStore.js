import create from 'zustand'
import { api } from '../utils/api'

const useMapStore = create((set, get) => ({
  map: null,
  properties: [],
  filters: { types: [], price: [1000, 20000], rooms: '', bathrooms: '' },

  setMap: (map) => {
    set({map: map})
  },

  getProperties: async () => {
    try {
      const { data } = await api
        .get('properties', {
          searchParams: get().filters,
        })
        .json()
      set({ properties: data })
    } catch (error) {
      console.log(error)
      set({ properties: [] })
    }
  },

  setFilters: (filter) => {
    set((state) => ({ filters: { ...state.filters, ...filter } }))
  },
}))

export default useMapStore
