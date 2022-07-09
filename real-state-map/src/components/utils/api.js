import ky from 'ky'

const url = 'http://localhost:8000/api'
// const access_token = localStorage.getItem('access_token')

export const api = ky.create({
  prefixUrl: url,
  // headers: {
  //   Authorization: `Bearer ${access_token}`,
  // },
})
