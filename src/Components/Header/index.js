import {  Badge,
    Button,
    Checkbox,
    Drawer,
    Form,
    Input,
    InputNumber,
    Menu,
    message,
    Table,
    Typography, Image} from "antd";
import { HomeFilled, ShoppingCartOutlined ,UserOutlined } from "@ant-design/icons";
import {  useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCart } from "../../API/index.js"
import logo from "../../assets/logo.jpg"
function Header() {
    const navigate = useNavigate();

    const onMenuClick = (item) => {
      navigate(`/${item.key}`);
    };
    return (
      <div className='header' >
      <Typography.Title style={{display:"flex",gap:"10px"}}><Image src={logo} width="45px" height="45px"/>Inner Beauty</Typography.Title>
      <Menu
      className="appMenu"
      onClick={onMenuClick}
      mode="horizontal"
      items={[
        {
          label: <HomeFilled style={{fontSize:"20px" }} />,
          key: "",
        },
         {
          label: <UserOutlined style={{fontSize:"20px" }} />,
          key: "SignInForm",
        },
        {
          label: "About",
          key: "about",
        },
        {
          label: "Proudect",
          key: "proudect",
         
        },
        {
          label: "Contact",
          key: "contact",
        },
      ]}
    />
    <AddCart/>
      </div>
    );
  }
  function AddCart(){
    const navigate = useNavigate();
    const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
    const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      getCart().then((res) => {
        setCartItems(res.products);
      });
    }, []);
    const onConfirmOrder = (values) => {
      console.log({ values });
      setCartDrawerOpen(false);
      setCheckoutDrawerOpen(false);
      message.success("Your order has been placed successfully.");
    };
  
    return (
      <div>
        <Badge
          onClick={() => {
            setCartDrawerOpen(true);
          }}
          count={cartItems.length}
          className="soppingCartIcon"
        >
   <ShoppingCartOutlined />
          
        </Badge>
        <Drawer
          open={cartDrawerOpen}
          onClose={() => {
            setCartDrawerOpen(false);
          }}
          title="Your Cart"
          contentWrapperStyle={{ width: 500 }}
        >
          <Table
            pagination={false}
            columns={[
              {
                title: "Title",
                dataIndex: "title",
              },
              {
                title: "Price",
                dataIndex: "price",
                render: (value) => {
                  return <span>${value}</span>;
                },
              },
              {
                title: "Quantity",
                dataIndex: "quantity",
                render: (value, record) => {
                  return (
                    <InputNumber
                      min={0}
                      defaultValue={value}
                      onChange={(value) => {
                        setCartItems((pre) =>
                          pre.map((cart) => {
                            if (record.id === cart.id) {
                              cart.total = cart.price * value;
                            }
                            return cart;
                          })
                        );
                      }}
                    ></InputNumber>
                  );
                },
              },
              {
                title: "Total",
                dataIndex: "total",
                render: (value) => {
                  return <span>${value}</span>;
                },
              },
            ]}
            dataSource={cartItems}
            summary={(data) => {
              const total = data.reduce((pre, current) => {
                return pre + current.total;
              }, 0);
              return <span>Total: ${total}</span>;
            }}
          />
          <Button
            onClick={() => {
              setCheckoutDrawerOpen(true);
            }}
            type="primary"
            style={{background:"#e93467"}}
          >
            Checkout Your Cart
          </Button>
        </Drawer>
        <Drawer
          open={checkoutDrawerOpen}
          onClose={() => {
            setCheckoutDrawerOpen(false);
          }}
          title="Confirm Order"
        >
          <Form onFinish={onConfirmOrder}>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please enter your full name",
                },
              ]}
              label="Full Name"
              name="full_name"
            >
              <Input placeholder="Enter your full name.." />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email",
                },
              ]}
              label="Email"
              name="your_name"
            >
              <Input placeholder="Enter your email.." />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please enter your address",
                },
              ]}
              label="Address"
              name="your_address"
            >
              <Input placeholder="Enter your full address.." />
            </Form.Item>
            <Form.Item>
              <Checkbox defaultChecked disabled>
                Cash on Delivery
              </Checkbox>
            </Form.Item>
            <Typography.Paragraph type="secondary">
              More methods coming soon
            </Typography.Paragraph>
            <Button type="primary" htmlType="submit" style={{background:"#e93467"}}>
              {" "}
              Confirm Order
            </Button>
            <Button type="primary" htmlType="submit" style={{ marginLeft:"10px",background:"#e93467"}} onClick={()=>navigate("/CheckoutForm")}>
         
              {" "}
              Checkout
            </Button>
          </Form>
        </Drawer>
      </div>
)
  }
  export default Header;