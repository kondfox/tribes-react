import React from 'react'
import InputField from '../../common/components/InputField'
import { usernameValidators } from '../validators'

const UsernameInput = ({ setInput, markValid }) => {
  return (
    <InputField
      placeholder="Username"
      validators={usernameValidators}
      setInput={setInput}
      markValid={markValid}
    />
  )
}

export default UsernameInput
