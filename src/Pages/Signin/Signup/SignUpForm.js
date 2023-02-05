import React from 'react'
import {Row,Form, Input, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
const SignUpForm = () => {
  
    const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  return (
    <>
    <Typography.Title level={2}  style={{ padding:"5%", margin: '0 auto' }}>Sign Up</Typography.Title>
    <Row  justify="center"  style={{padding:"1%",height:"680px",width:"100vw"}}>
    
  <Form
    name="basic"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    className="Form"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
   
    >
      <Input style={{ width:"40vw",height: 50 }}/>
    </Form.Item>
   

    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your email!' }]}
    
    >
      <Input   style={{marginLeft:"28px", width:"40vw",height: 50 }}/>
    </Form.Item>
    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
      
    >
      <Input.Password  style={{ width:"40vw",height: 50 }}/>
    </Form.Item>

    <Form.Item>
      <Button type="primary" style={{marginLeft:"13%",width:"40vw",height: 50,background:"#e93467"}} htmlType="submit">
      Sign Up  
      </Button>
    </Form.Item>
    <Link to="/SignInForm">I already have an account Sign In </Link>
  </Form>
  </Row>
  </>
  )
}

export default SignUpForm
