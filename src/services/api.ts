import axios from 'axios'

const api = axios.create({
  baseURL: 'https://covid-cpu-api.vercel.app/api'
})

export default api;