import React, { useEffect, useState } from 'react'
import { ReactComponent as ErrorIcon } from '../../assets/icons/error.svg'
import { VALIDATE_ON } from '../../common/validators'
import './InputField.scss'

const InputField = ({
  name,
  placeholder,
  setInput,
  markValid,
  validators = [],
  type = 'text',
  validateOn,
  shouldShowErrors,
}) => {
  const validity = {
    true: 'input-valid',
    false: 'input-invalid',
    undefined: 'input-unknown',
  }

  const shouldShowError =
    shouldShowErrors.state || validateOn === VALIDATE_ON.CHANGE

  const [isValid, setValid] = useState(validity.undefined)
  const [fieldValue, setFieldValue] = useState('')
  const [error, setError] = useState('')

  const validateInput = input => {
    const failingValidation = validators.find(v => !v.validate(input))
    markValid(!failingValidation)
    setError(failingValidation ? failingValidation.error : '')
    if (shouldShowError)
      setValid(validity[validators.every(v => v.validate(input))])
  }

  useEffect(() => {
    markValid(!validators.length)
    if (shouldShowErrors.state) validateInput(fieldValue)
  }, [shouldShowErrors])

  const onInputChange = e => {
    setFieldValue(e.target.value)
    setInput(e.target.value)
    validateInput(e.target.value)
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
      <div
        className={`input-error${
          shouldShowError && error.length ? '' : ' hidden'
        }`}
      >
        <span>{error}</span>
        <ErrorIcon />
      </div>
    </div>
  )
}

export default InputField
