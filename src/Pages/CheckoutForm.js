import { Row,Form, Input, Typography,Button, Select } from 'antd';

function CheckoutForm() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
    <Typography.Title level={2}  style={{ padding:"5%", margin: '0 auto' }}> Checkout</Typography.Title>
    <Row justify="center"  style={{padding:"1%",height:"680px",width:"100vw"}}>
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Full Name"
        name="fullName"
        rules={[{ required: true, message: 'Please input your full name!' }]}
      >
        <Input style={{ width:"40vw",height: 50 }}/>
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input style={{marginLeft:"28px", width:"40vw",height: 50 }}/>
      </Form.Item>

      <Form.Item
        label="Payment Method"
        name="paymentMethod"
        rules={[{ required: true, message: 'Please select a payment method!' }]}
      >
        <Select >
          <Select.Option value="creditCard">Credit Card</Select.Option>
          <Select.Option value="paypal">PayPal</Select.Option>
          <Select.Option value="bankTransfer">Bank Transfer</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit"  style={{marginLeft:"15%",width:"39vw",height: 50,background:"#e93467"}}>
          Checkout
        </Button>
      </Form.Item>
    </Form>
    </Row>
    </>
  );
}
export default CheckoutForm;