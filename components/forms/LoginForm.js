import { useForm } from 'react-hook-form';

import Layout from './layout';
import {Input} from '../inputFields/formInputs';
import {FormButtons, LinkButtons} from '../buttons/Buttons';
import { Paragraph } from '../text/Text';



const LoginForm = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => { console.log(data) }

  return (
    <Layout>
      <Paragraph className="text-center mb-8">
        Welcome back! Please login to your account.
      </Paragraph>
      
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="w-10/12"
      >
      {/* register your input into the hook by invoking the "register" function */}
        <Input 
          type="text" 
          name="username"
          defaultValue=""
          label="Username"
          ref={register({ required: true })}
        />
        {errors.username && <div className="text-red-500 text-center">This field is required</div>}

        <Input 
          type="password" 
          name="password"
          defaultValue=""
          label="Password"
          ref={register({ required: true })}
        />
        {errors.username && <div className="text-red-500 text-center">This field is required</div>}


        {/* include validation with required or other standard HTML validation rules */}
        {/* errors will return when field validation fails  */}
        <div className="text-center mt-8">
          <FormButtons type="submit" primary>
            Login
          </FormButtons>
          <LinkButtons href="signup">
            Sign Up
          </LinkButtons>

        </div>

      </form> 
    </Layout>
  )

}

export default LoginForm;