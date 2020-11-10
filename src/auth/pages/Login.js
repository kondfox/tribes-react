import React from 'react'
import Box from '../../common/components/Box'
import ValidForm from '../../common/components/ValidForm'
import InputField from '../../common/components/InputField'
import { connect } from 'react-redux'
import { loginAction } from '../userActions'
import { usernameValidators, passwordValidators } from '../validators'
import { VALIDATE_ON } from '../../common/validators'
import '../auth.scss'

const Login = ({ loginAction, history }) => {
  const onSubmit = reqBody => loginAction(reqBody, history)

  return (
    <div className="auth">
      <h1>Tribes of Kondfox - Login</h1>
      <Box>
        <ValidForm
          submitLabel="login"
          onSubmit={onSubmit}
          validateOn={VALIDATE_ON.SUBMIT}
        >
          <InputField
            name="username"
            placeholder="Username"
            validators={usernameValidators}
          />
          <InputField
            name="password"
            placeholder="Password"
            validators={passwordValidators}
            type="password"
          />
        </ValidForm>
      </Box>
    </div>
  )
}

export default connect(null, { loginAction })(Login)
