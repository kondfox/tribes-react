import React from 'react'
import Box from '../../common/components/Box'
import ValidForm from '../../common/components/ValidForm'
import InputField from '../../common/components/InputField'
import {
  usernameValidators,
  passwordValidators,
  emailValidators,
  kingdomNameValidators,
} from '../validators'
import { VALIDATE_ON } from '../../common/validators'
import { registerAction } from '../userActions'
import { connect } from 'react-redux'
import '../auth.scss'

const Registration = ({ registerAction, history }) => {
  const onSubmit = reqBody => registerAction(reqBody, history)

  return (
    <div className="auth">
      <h1>Tribes of Kondfox - Registration</h1>
      <Box>
        <ValidForm
          submitLabel="sign up"
          onSubmit={onSubmit}
          validateOn={VALIDATE_ON.CHANGE}
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
          <InputField
            name="email"
            placeholder="Email"
            validators={emailValidators}
            type="email"
          />
          <InputField
            name="kingdomName"
            placeholder="Kingdom name"
            validators={kingdomNameValidators}
          />
        </ValidForm>
      </Box>
    </div>
  )
}

export default connect(null, { registerAction })(Registration)
