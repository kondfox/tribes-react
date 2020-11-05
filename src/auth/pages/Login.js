import React from 'react'
import Box from '../../common/components/Box'
import PasswordInput from '../components/PasswordInput'
import UsernameInput from '../components/UsernameInput'
import ValidForm from '../../common/components/ValidForm'
import { fetchService } from '../../common/services/fetchService'
import '../auth.scss'

const Login = () => {
  const onSubmit = reqBody => {
    fetchService.post('/login', reqBody)
  }

  return (
    <div className="auth">
      <h1>Tribes of Kondfox - Login</h1>
      <Box>
        <ValidForm submitLabel="login" onSubmit={onSubmit}>
          <UsernameInput />
          <PasswordInput />
        </ValidForm>
      </Box>
    </div>
  )
}

export default Login
