import React from 'react';
import { Input, Typography, Checkbox, Button } from 'antd';
import './style.css';
import google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'
import tw from '../../assets/tw.png'
import linkedin from '../../assets/linkedin.png'
function Form(){
  const { Title } = Typography;
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
      <form>
        <div className='flex flex-col gap-5'>
          <Input placeholder='Username or email' />
          <Input placeholder='Password' />
        </div>
        <div className='py-2'>
          <Checkbox>Keep me signed in</Checkbox>
        </div>
        <Button
          onClick={()=> {}}
          className='py-3 w-full'
        >Sign In
        </Button>
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