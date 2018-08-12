import axios from 'axios'

export const HTTP = axios.create({
  headers: {'Authorization': localStorage.getItem('token')}
})
