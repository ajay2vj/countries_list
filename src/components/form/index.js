import React from 'react';
import { Input, Typography, Checkbox } from 'antd';
import './style.css';
import google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'
import tw from '../../assets/tw.png'
import linkedin from '../../assets/linkedin.png'
import { useForm, Controller } from "react-hook-form";
import ErrorText from '../Errortext';

function Form(){
  const { Title } = Typography;
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const onSubmit = ()=> {
    window.location.href = "/home"
  }
  return(
    <div className='p-5'>
      <Title
        level={3}
        className='p-1 font-medium'
      >
        Sign In
      </Title>
      <div className='flex gap-3 px-1'>
        <p className='font-medium'>New user?</p>
        <p className='text-blue-500 font-normal'>Create an account</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-3'>
          <Controller
            name="name"
            {...register('name', {
              required: 'Name cannot be empty',
            })}
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, ref }) => (
              <Input
                name="name"
                value={value}
                ref={ref}
                placeholder='Username or email'
                onChange={(e) => {
                  onChange(e.target.value);
                }}
              />
            )}
          />
          <ErrorText errorMsg={errors.name && errors.name.message} />
          <Controller
            name="pass"
            {...register('pass', {
              required: 'Password cannot be empty',
            })}
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, ref }) => (
              <Input
                name="pass"
                value={value}
                ref={ref}
                placeholder='password'
                onChange={(e) => {
                  onChange(e.target.value);
                }}
              />
            )}
          />
          <ErrorText errorMsg={errors.pass && errors.pass.message} />
        </div>
        <div className='py-2'>
          <Checkbox>Keep me signed in</Checkbox>
        </div>
        <button
          type='submit'
          onClick={()=> handleSubmit(onSubmit)}
          className='py-3 w-full'
        >Sign In
        </button>
      </form>
      <div className='py-4'>
        <div className='hline'><span className='font-medium'>Or Sign In With</span></div>
      </div>
      <div className='flex py-8 gap-6 justify-center'>
        <img src={google} alt='google'/>
        <img src={facebook} alt='fb'/>
        <img src={linkedin} alt='linkedin'/>
        <img src={tw} alt='tw'/>
      </div>
    </div>
  )
};
export default Form;