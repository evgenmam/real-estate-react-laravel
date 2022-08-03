import ky from 'ky'

const url = import.meta.env.VITE_API_URL

export const api = ky.create({
  prefixUrl: url,
})
