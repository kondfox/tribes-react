import React from 'react'
import Box from '../../common/components/Box'
import Button from '../../common/components/Button'
import KingdomNameInput from '../components/KingdomNameInput'
import PasswordInput from '../components/PasswordInput'
import UsernameInput from '../components/UsernameInput'
import '../auth.scss'

const RegistrationForm = () => {
  return (
    <div className="auth">
      <h1>Tribes of Kondfox - Registration</h1>
      <Box>
        <UsernameInput />
        <PasswordInput />
        <KingdomNameInput />
        <Button label="sign up" onClick={() => console.log('click')} />
      </Box>
    </div>
  )
}

export default RegistrationForm
