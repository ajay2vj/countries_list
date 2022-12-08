import { Typography } from 'antd';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useQuery } from 'react-query';
import customapi from '../../api';
import Box from '../../components/box';
import Tab from '../../components/tab';
import './style.css';
import { FaBars } from 'react-icons/fa';

function Home(){
  const [tab, setTab] = useState('All')
  const getData = async() => {
    try {
      const res = customapi.get('/v2/all?fields=name,region,flag');
      return res;
    }catch(err){
      // console.log(err)
    }
  }
  const { data } = useQuery('getData', getData)
  const { Title } = Typography;
  return(
    <div className='p-8'>
      <div className='flex justify-between screen-class2'>
        <Title level={4}>Countries</Title>
        <div className='tab-screen'>
          <Tab
            setClickedTab={setTab}
            clickedTab={tab}
          />
        </div>
        <div className='tab-nav'>
          <FaBars 
            className='cursor-pointer'
          />
        </div>
      </div>
      <div className='screen-class'>
        <Container>
          <Row>
            {tab === 'All' && (
              <>
                {data?.data?.map((item, idx)=>(
                  <Col lg={{span: 6}} md={4} key={idx} className="mb-4">
                    <Box
                      svgCountry={item?.flag}
                      countries={item?.name}
                      region={item?.region}
                    />
                  </Col>
                ))}
              </>
            )}
            {tab === 'Asia' && (
              <>
                {data?.data?.filter((fitem)=> fitem?.region === 'Asia')?.map((item, idx)=>(
                  <Col lg={{span: 6}} md={4} key={idx} className="mb-4">
                    <Box
                      svgCountry={item?.flag}
                      countries={item?.name}
                      region={item?.region}
                    />
                  </Col>
                ))}
              </>
            )}
            {tab === 'Europe' && (
              <>
                {data?.data?.filter((fitem)=> fitem?.region === 'Europe')?.map((item, idx)=>(
                  <Col lg={{span: 6}} md={4} key={idx} className="mb-4">
                    <Box
                      svgCountry={item?.flag}
                      countries={item?.name}
                      region={item?.region}
                    />
                  </Col>
                ))}
              </>
            )}
          </Row>
        </Container>
      </div>
    </div>
  )
};
export default Home;