import React from 'react'
import Box from '../../common/components/Box'
import PasswordInput from '../components/PasswordInput'
import UsernameInput from '../components/UsernameInput'
import EmailInput from '../components/EmailInput'
import ValidForm from '../../common/components/ValidForm'
import KingdomNameInput from '../components/KingdomNameInput'
import { registerAction } from '../userActions'
import { connect } from 'react-redux'
import '../auth.scss'

const Registration = ({ registerAction, history }) => {
  const onSubmit = reqBody => registerAction(reqBody, history)

  return (
    <div className="auth">
      <h1>Tribes of Kondfox - Registration</h1>
      <Box>
        <ValidForm submitLabel="sign up" onSubmit={onSubmit}>
          <UsernameInput />
          <PasswordInput />
          <EmailInput />
          <KingdomNameInput />
        </ValidForm>
      </Box>
    </div>
  )
}

export default connect(null, { registerAction })(Registration)
