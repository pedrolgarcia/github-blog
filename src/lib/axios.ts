import axios from 'axios'

export const ghUsername = 'pedrolgarcia'
export const ghRepo = 'github-blog'

export const api = axios.create({
  baseURL: 'https://api.github.com',
})
