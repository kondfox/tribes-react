import React from 'react'
import InputField from '../../common/components/InputField'
import { passwordValidators } from '../validators'

const PasswordInput = ({ markValid }) => {
  return (
    <InputField
      placeholder="Password"
      validators={passwordValidators}
      markValid={markValid}
      type="password"
    />
  )
}

export default PasswordInput
