import React from 'react'
import Box from '../../common/components/Box'
import Button from '../../common/components/Button'
import InputField from '../../common/components/InputField'
import { notBlank, minLength } from '../../common/validators'
import '../auth.scss'

const Registration = () => {
  return (
    <div className='auth'>
      <h1>Tribes of Kondfox - Registration</h1>
      <Box>
        <InputField placeholder='Username' validators={[notBlank]} />
        <InputField placeholder='Password' validators={[minLength(8)]} type='password' />
        <InputField placeholder='Kingdom name' />
        <Button label='sign up' onClick={() => console.log('click')} />
      </Box>
    </div>
  )
}

export default Registration