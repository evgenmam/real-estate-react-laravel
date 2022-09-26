import create from 'zustand'

const useMapStore = create((set) => ({
  map: null,
  properties: [],
  filters: {
    types: [],
    price: [1000, 50000],
    rooms: null,
    bathrooms: null,
    search: '',
  },

  setMap: (map) => {
    set({ map: map })
  },

  setFilters: (filter) => {
    set((state) => ({ filters: { ...state.filters, ...filter } }))
  },
}))

export default useMapStore
