import axios from 'axios'

export const Service = (baseUrl) => {

  const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
  }

  const getResource = async (path) => {
    const res = await axios.get(`${baseUrl}/${path}`)
    return res.data
  }

  const create = async (path, resource) => {
    const res = await axios.post(`${baseUrl}/${path}`, resource)
    return res.data
  }

  return  {
    getAll,
    getResource,
    create
  }
}