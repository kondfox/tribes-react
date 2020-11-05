import React, { useEffect, useState } from 'react'
import Button from './Button'

const ValidForm = ({ submitLabel, onSubmit, children }) => {
  const initValues = children.reduce(
    (v, c) => ({ ...v, [c.type.name]: undefined }),
    {}
  )
  const validationInit = children.reduce(
    (v, c) => ({ ...v, [c.type.name]: false }),
    {}
  )

  const [inputValues, setInputValues] = useState(initValues)
  const [validations, setValidations] = useState(validationInit)
  const [isAllValid, setAllValid] = useState(false)

  useEffect(() => {
    setAllValid(Object.values(validations).every(v => v))
  }, [validations])

  const setInput = inputName => value =>
    setInputValues({ ...inputValues, [inputName]: value })

  const markValid = inputName => isValid =>
    setValidations({ ...validations, [inputName]: isValid })

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit()
  }

  const fieldName = inputName =>
    inputName
      .toLowerCase()
      .replace(/input/i, '')
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())

  return (
    <form>
      {children.map(c =>
        React.cloneElement(c, {
          setInput: setInput(fieldName(c.type.name)),
          markValid: markValid(c.type.name),
          key: c.type.name,
        })
      )}
      <Button
        label={submitLabel}
        isActive={isAllValid}
        onClick={handleSubmit}
      />
    </form>
  )
}

export default ValidForm
