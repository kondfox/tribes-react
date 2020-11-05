import React from 'react'
import InputField from '../../common/components/InputField'
import { passwordValidators } from '../validators'

const PasswordInput = ({ setInput, markValid }) => {
  return (
    <InputField
      placeholder="Password"
      validators={passwordValidators}
      setInput={setInput}
      markValid={markValid}
      type="password"
    />
  )
}

export default PasswordInput
