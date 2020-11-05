import React from 'react'
import Box from '../../common/components/Box'
import PasswordInput from '../components/PasswordInput'
import UsernameInput from '../components/UsernameInput'
import ValidForm from '../../common/components/ValidForm'
import KingdomNameInput from '../components/KingdomNameInput'
import { fetchService } from '../../common/services/fetchService'
import '../auth.scss'

const Registration = () => {
  const onSubmit = reqBody => {
    fetchService.post('/register', reqBody)
  }

  return (
    <div className="auth">
      <h1>Tribes of Kondfox - Registration</h1>
      <Box>
        <ValidForm submitLabel="sign up" onSubmit={onSubmit}>
          <UsernameInput />
          <PasswordInput />
          <KingdomNameInput />
        </ValidForm>
      </Box>
    </div>
  )
}

export default Registration
