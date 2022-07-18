import ky from 'ky'

const url = import.meta.env.VITE_API_URL
// const access_token = localStorage.getItem('access_token')

export const api = ky.create({
  prefixUrl: url,
  // headers: {
  //   Authorization: `Bearer ${access_token}`,
  // },
})
