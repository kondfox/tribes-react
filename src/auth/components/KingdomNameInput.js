import React from 'react'
import InputField from '../../common/components/InputField'
import { kingdomNameValidators } from '../validators'

const KingdomNameInput = ({ markValid }) => {
  return (
    <InputField
      placeholder="Kingdom name"
      validators={kingdomNameValidators}
      markValid={markValid}
    />
  )
}

export default KingdomNameInput
