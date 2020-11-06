import React from 'react'
import Box from '../../common/components/Box'
import PasswordInput from '../components/PasswordInput'
import UsernameInput from '../components/UsernameInput'
import ValidForm from '../../common/components/ValidForm'
import { connect } from 'react-redux'
import { loginAction } from '../userActions'
import '../auth.scss'

const Login = ({ loginAction, history }) => {
  const onSubmit = reqBody => loginAction(reqBody, history)

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

export default connect(null, { loginAction })(Login)
