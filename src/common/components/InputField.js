import React, { useState } from 'react'
import './InputField.scss'
import {ReactComponent as ErrorIcon} from '../../assets/icons/error.svg'

const InputField = ({ placeholder, validators = [], type = 'text', errorMsg }) => {
  const validity = {
    true: 'input-valid',
    false: 'input-invalid',
    undefined: 'input-unknown',
  }

  const [isValid, setValid] = useState(validity.undefined)
  const [fieldValue, setFieldValue] = useState('')

  const onInputChange = e => {
    setFieldValue(e.target.value)
    setValid(validity[validators.every(v => v.validate(e.target.value))])
  }

  return (
    <div className='inputField'>
      <input
        className={isValid}
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
        value={fieldValue}
      />
      <div className='input-error'>
        { isValid === validity.false && <span>errorMsg || 'error'</span> }
        <ErrorIcon />
      </div>
    </div>
  )
}

export default InputField