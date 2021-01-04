import { useState } from 'react'

export const useFilters = () => {
  const [value, setValue] = useState([])

  const onChange = (event) => {
    const filters = event.target.value.split(',')
    setValue(filters[0] === '' ? [] : filters.map(filter => filter.trim()))
  }

  return [
    value,
    onChange
  ]
}