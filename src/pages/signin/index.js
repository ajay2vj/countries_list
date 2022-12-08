import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from '../../components/form';
import signInIcon from '../../assets/Illustration.png';
import './style.css';
function SignIn(){
  return(
    <Container>
      <Row className='mt-5'>
        <Col lg={{span: 4, offset: 1}} md={4}>
          <Form />
        </Col>
        <Col lg={{span: 4, offset: 2}} md={4} className="screen-hide">
          <div className='p-10'>
            <img src={signInIcon} alt="png" />
          </div>
        </Col>
      </Row>
    </Container>
  )
};
export default SignIn;