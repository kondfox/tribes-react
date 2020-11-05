import React from 'react'
import InputField from '../../common/components/InputField'
import { usernameValidators } from '../validators'

const UsernameInput = ({ markValid }) => {
  return (
    <InputField
      placeholder="Username"
      validators={usernameValidators}
      markValid={markValid}
    />
  )
}

export default UsernameInput
