import React, { useEffect, useState } from 'react'
import Button from './Button'

const ValidForm = ({ submitLabel, onSubmit, children }) => {
  const init = children.reduce((v, c) => ({ ...v, [c.type.name]: false }), {})
  const [validations, setValidations] = useState(init)
  const [isAllValid, setAllValid] = useState(false)

  useEffect(() => {
    setAllValid(Object.values(validations).every(v => v))
  }, [validations])

  const markValid = inputName => isValid => {
    const newValidations = { ...validations }
    newValidations[inputName] = isValid
    setValidations(newValidations)
  }

  return (
    <form>
      {children.map(c =>
        React.cloneElement(c, {
          markValid: markValid(c.type.name),
          key: c.type.name,
        })
      )}
      <Button label={submitLabel} isActive={isAllValid} onClick={onSubmit} />
    </form>
  )
}

export default ValidForm
