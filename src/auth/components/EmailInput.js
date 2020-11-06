import React from 'react'
import InputField from '../../common/components/InputField'
import { emailValidators } from '../validators'

const EmailInput = ({ setInput, markValid }) => {
  return (
    <InputField
      placeholder="Email"
      validators={emailValidators}
      setInput={setInput}
      markValid={markValid}
      type="email"
    />
  )
}

export default EmailInput
