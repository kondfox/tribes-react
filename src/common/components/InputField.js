import React, { useEffect, useState } from 'react'
import { ReactComponent as ErrorIcon } from '../../assets/icons/error.svg'
import './InputField.scss'

const InputField = ({
  placeholder,
  setInput,
  markValid,
  validators = [],
  type = 'text',
}) => {
  const validity = {
    true: 'input-valid',
    false: 'input-invalid',
    undefined: 'input-unknown',
  }

  const [isValid, setValid] = useState(validity.undefined)
  const [fieldValue, setFieldValue] = useState('')
  const [error, setError] = useState('')

  useEffect(() => markValid(!validators.length), [])

  const onInputChange = e => {
    setFieldValue(e.target.value)
    setInput(e.target.value)
    setValid(validity[validators.every(v => v.validate(e.target.value))])
    const failingValidation = validators.find(v => !v.validate(e.target.value))
    setError(failingValidation ? failingValidation.error : '')
    markValid(!failingValidation)
  }

  return (
    <div className="inputField">
      <input
        className={isValid}
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
        value={fieldValue}
      />
      <div className={`input-error${error.length ? '' : ' hidden'}`}>
        <span>{error}</span>
        <ErrorIcon />
      </div>
    </div>
  )
}

export default InputField
