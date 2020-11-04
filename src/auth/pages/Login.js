import React from 'react'
import Box from '../../common/components/Box'
import Button from '../../common/components/Button'
import InputField from '../../common/components/InputField'
import '../auth.scss'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Tribes of Kondfox - Login</h1>
      <Box>
        <InputField placeholder='Username' />
        <InputField placeholder='Password' type='password' />
        <Button label='sign up' onClick={() => console.log('click')} />
      </Box>
    </div>
  );
};

export default Login;