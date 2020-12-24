import axios from 'axios'

export const Service = (baseUrl) => {

  const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
  }

  return  {
    getAll
  }
}