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

export const useTextField = (type, minLength, maxLength, required = false) => {
  const [value, setValue] = useState('')
  const [validationMessage, setValidationMessage] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onInvalid = () => {
    setValidationMessage('Tekstin tulee olla ' + minLength + '-' + maxLength + ' merkkiä')
  }

  return [
    {
      type,
      minLength,
      maxLength,
      required,
      value,
      onChange,
      onInvalid
    },
    validationMessage,
    setValue
  ]
}

export const useNumberField = (type, min, max, step = 1, required = false) => {
  const [value, setValue] = useState('')
  const [validationMessage, setValidationMessage] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onInvalid = (event) => {
    setValidationMessage('Arvon pitää olla välillä ' + min + '-' + max)
  }

  return [
    {
      type, min, max, step, required, value, onChange, onInvalid
    },
    validationMessage
  ]
}