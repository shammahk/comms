import Head from 'next/head';

import {FormLayout} from '../components/Layout';
import {FormBgImage} from '../components/Background';
import SignUpForm from '../components/forms/SignUpForm'


const SignUp = () => {
  return (
    <FormLayout> 
      <Head>
        <title>Comms - sign up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FormBgImage /> 
      <SignUpForm />

    </FormLayout>
  )
}

export default SignUp;