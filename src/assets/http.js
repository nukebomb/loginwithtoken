import axios from 'axios'

const http = axios.create()

http.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.common['Authorization'] = token
    }
    console.log(config)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  response => {
    let data = response.data
    if (data.code === 200) {
      return data.data
    }
    if (data.code === 401) {
      window.location.href = '/login'
    }
    return Promise.reject(data)
  },
  error => {
    return Promise.reject(error)
  }
)

export default http
