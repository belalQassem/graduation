import React from 'react'
import {Row,Form, Input, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
function SignInForm() {
    
    const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    // height: "252px", 
    // borderRadius: "16px",
    // width:"360px",marginRight: "24px",
//     marginLeft:"30%",borderRadius: "16px",
//  border:"1px solid #fff",backgroundColor: "#fff", boxShadow:"0 2px 2px 2px rgba(9, 9, 9, 0.23)"
    return (
        <>
        <Typography.Title level={2}  style={{ padding:"5%", margin: '0 auto' }}>Log In</Typography.Title>
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
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          
        >
          <Input.Password  style={{ width:"40vw",height: 50 }}/>
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" style={{marginLeft:"13%",width:"40vw",height: 50,background:"#e93467"}} htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
        <Link to="/SignUpForm">I don’t have an account Sign Up</Link>
      </Form>
      </Row>
      </>
    );
  }

export default SignInForm
