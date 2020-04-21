import { useForm, ErrorMessage } from 'react-hook-form';

import Layout from './layout';
import {Input} from '../inputFields/formInputs';
import {FormButtons, LinkButtons} from '../buttons/Buttons';
import { Paragraph } from '../text/Text';
import {PageLink} from '../links/Links';



const LoginForm = () => {
  const { register, handleSubmit, watch, errors } = useForm()
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
          {errors.username && <div className="text-red-500 text-center">This field is required</div>}
         
          <Input 
            type="text" 
            name="lastname"
            defaultValue=""
            label="Last name"
            ref={register({ required: true })}
          />
          {errors.username && <div className="text-red-500 text-center">This field is required</div>}
          
        </div>

        <Input 
          type="text" 
          name="username"
          defaultValue=""
          label="Username"
          ref={register({ 
            required: true, 
            maxLength: {
              value: 3,
              message: "This input exceed maxLength."
            }
          })}
        />
        <ErrorMessage errors={errors} name="username">
          {({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          }
        </ErrorMessage>

        <Input 
          type="email" 
          name="email"
          defaultValue=""
          label="Email"
          ref={register({ required: true })}
        />
        {errors.email && <div className="text-red-500 text-center">This field is required</div>}

        <Input 
          type="password" 
          name="password"
          defaultValue=""
          label="Password"
          ref={register({ 
            required: {
              value:true,
              message: "This field is required"
            },
             maxLength: {
              value: 8,
              message: "This input exceed maxLength."
            }
          })}
        />
        

        <Input 
          type="password" 
          name="cpassword"
          defaultValue=""
          label="Confirm Password"
          ref={register({ 
            required: {
              value:true,
              message: "This field is required"
            },
             maxLength: {
              value: 8,
              message: "This input exceed maxLength."
            }
          })}
        />

        <div className="text-center mt-8">
          <FormButtons type="submit" primary>
            Sign up
          </FormButtons>

        </div>

        <PageLink href="login">
          
        </PageLink>

      </form> 
    </Layout>
  )

}

export default LoginForm;