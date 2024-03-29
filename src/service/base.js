import axios from 'axios'

const baseURL = '/'
const ERR_OK = 0
axios.defaults.baseURL = baseURL

export function get (url, params) {
  return axios
    .get(url, { params })
    .then(res => {
      const serveData = res.data
      if (serveData.code === ERR_OK) {
        return serveData.result
      }
    })
    .catch(e => {
      console.log(e)
    })
}
