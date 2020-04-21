import Head from 'next/head';

import {FormLayout} from '../components/Layout';
import {FormBgImage} from '../components/Background';
import LoginForm from '../components/forms/LoginForm'


const Login = () => {
  return (
    <FormLayout> 
      <Head>
        <title>Comms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FormBgImage /> 
      <LoginForm />

    </FormLayout>
  )
}

export default Login;