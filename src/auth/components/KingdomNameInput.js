import React from 'react'
import InputField from '../../common/components/InputField'
import { kingdomNameValidators } from '../validators'

const KingdomNameInput = ({ setInput, markValid }) => {
  return (
    <InputField
      placeholder="Kingdom name"
      validators={kingdomNameValidators}
      setInput={setInput}
      markValid={markValid}
    />
  )
}

export default KingdomNameInput
