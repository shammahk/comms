import { useForm, ErrorMessage } from 'react-hook-form';

import Layout from './layout';
import {Input} from '../inputFields/formInputs';
import {FormButtons, LinkButtons} from '../buttons/Buttons';
import { Paragraph } from '../text/Text';
import {PageLink} from '../links/Links';



const LoginForm = () => {
  const { register, handleSubmit, watch, errors } = useForm(
    {validateCriteriaMode: "all"}
  )
  const onSubmit = data => { console.log(data) }

  return (
    <Layout>
      <Paragraph className="text-center mb-8">
        Please complete to create your account.
      </Paragraph>
      
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="w-full"
      >
        <div className="grid grid-cols-2 gap-6">
          
          <Input 
            type="text" 
            name="firstname"
            defaultValue=""
            label="First name"
            ref={register({ required: true })}
          />
         
          <Input 
            type="text" 
            name="lastname"
            defaultValue=""
            label="Last name"
            ref={register({ required: true })}
          />
          
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            {errors.firstname && <div className="text-red-500 text-center">First Name is required</div>}
          </div>
          <div>
            {errors.lastname && <div className="text-red-500 text-center">Last Name is required</div>}
          </div>
        </div>

        <Input 
          type="text" 
          name="username"
          defaultValue=""
          label="Username"
          ref={register({ 
            required: "Username is required", 
            minLength: {
              value: 3,
              message: "Must be at least 3 characters long."
            }
          })}
        />
        <ErrorMessage errors={errors} name="username" >
          {({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type} className="text-red-500 text-center">{message}</p>
            ))
          }
        </ErrorMessage>

        <Input 
          type="email" 
          name="email"
          defaultValue=""
          label="Email"
          ref={register({ 
            required: "Please enter a valid email",
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Email not valid"
            }
           })}
        />
        <ErrorMessage errors={errors} name="email">
          {({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type} className="text-red-500 text-center">{message}</p>
            ))
          }
        </ErrorMessage>

        <Input 
          type="password" 
          name="password"
          defaultValue=""
          label="Password"
          ref={register({ 
            required: "Password is required",
             minLength: {
              value: 8,
              message: "Must be at least 8 characters."
            }
          })}
        />
         <ErrorMessage errors={errors} name="password">
          {({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type} className="text-red-500 text-center">{message}</p>
            ))
          }
        </ErrorMessage>

        <div className="text-center mt-8">
          <FormButtons type="submit" primary>
            Sign up
          </FormButtons>

        </div>

        <PageLink href="index" className="text-center">
          Already have an account? Sign in.
        </PageLink>

      </form> 
    </Layout>
  )

}

export default LoginForm;