import { Typography } from 'antd';
import React from 'react';

function Box({countries, svgCountry, region}){
  const { Title } = Typography;
  return(
    <div className='border-solid border-2'>
      <div className='flex gap-3 p-4'>
        <img src={svgCountry} alt="img" width={'140px'} height={'84px'} />
        <div className='py-3'>
          <Title style={{fontSize: '17px'}}>{countries}</Title>
          <Title style={{fontSize: '14px'}}>{region}</Title>
        </div>
      </div>
    </div>
  )
};
export default Box;