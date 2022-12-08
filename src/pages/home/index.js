import { Typography } from 'antd';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tab from '../../components/tab';

function Home(){
  const [tab, setTab] = useState('Asia')
  
  const { Title } = Typography;
  return(
    <div className='p-8'>
      <div className='flex justify-between px-10'>
        <Title level={4}>Countries</Title>
        <Tab
          setClickedIndex={setTab}
          clickedTab={tab}
        />
      </div>
      <div className='px-10'>
        <Container>
          <Row>
            <Col lg={{span: 4, offset: 1}} md={4}>
              <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
};
export default Home;