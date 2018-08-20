import axios from 'axios'

const isProduction = process.env.NODE_ENV === 'production'

export default axios.create({
  headers: {'Authorization': localStorage.getItem('token')},
  baseURL: isProduction ? '/' : 'http://localhost:3000/'
})
