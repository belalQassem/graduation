import { Typography } from "antd";
import { PhoneOutlined,MailOutlined } from '@ant-design/icons';
import logo from '../../assets/logo.jpg'
import '../../../src/App.css';

function Foot() {
    return (
        <div style={{display:"flex",justifyContent:"space-around"}} className="foot">
          {/* <Typography.Link  style={{ color:"#e93467" }} href="email:EmanSho@gmail.com" target={"_blank"}>
          <MailOutlined style={{marginRight:"10px"}} /> EmanSho@gmail.com
          </Typography.Link>
          <Typography.Link style={{ color:"#e93467" }} href="tel:+970 597353341" target={"_blank"}>
          <PhoneOutlined  style={{marginRight:"10px"}}/> +970 597353341
          </Typography.Link>
          <Typography.Link  style={{ color:"#e93467" }} href="https://www.google.com" target={"_blank"}>
          Privacy Policy
        </Typography.Link>
        <Typography.Link style={{ color:"#e93467" }}  href="https://www.google.com" target={"_blank"}>
          Terms & Conditions
        </Typography.Link>
        <Typography.Link  style={{ color:"#e93467" }} href="https://www.google.com" target={"_blank"}>
          Return Policy
        </Typography.Link> */}

        <div>
          <img src={logo} alt="logo" width="60px"></img>
          <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore</p>
        </div>
        <div>
          <ul style={{listStyle:"none"}}>
            <li style={{fontWeight:"700"}}>Products</li>
            <li>Trending</li>
            <li>My Account</li>
            <li>Vendors</li>
            <li>Brands</li>
          </ul>
        </div>
        <div>
          <ul style={{listStyle:"none"}}>
            <li style={{fontWeight:"700"}}>Legals</li>
            <li> <Typography.Link href="https://www.google.com" target={"_blank"}>
          Privacy Policy
        </Typography.Link></li>
            <li><Typography.Link  href="https://www.google.com" target={"_blank"}>
          Return Policy
        </Typography.Link></li>
            <li>About Us</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div>
          <ul style={{listStyle:"none"}}>
            <li style={{fontWeight:"700"}}>Contacts</li>
            <li>Fell free get in touch with us via phone<br/> or send us a message</li>
            <li> <Typography.Link href="email:EmanSho@gmail.com" target={"_blank"}>
          <MailOutlined style={{marginRight:"10px"}} /> EmanSho@gmail.com
          </Typography.Link></li>
            <li><Typography.Link href="tel:+970 597353341" target={"_blank"}>
          <PhoneOutlined  style={{marginRight:"10px"}}/> +970 597353341
          </Typography.Link></li>
          </ul>
        </div>
        </div>
      );
}
export default Foot;
//     <span>
           
// <span className="test">
// 
// </span><br/>
// <span className="test">
// 
// </span>
// </span>
// <div className="left">
// <span className="logo">Inner beauty</span>
// <span className="copyright">
//   © Copyright 2023. All Rights Reserved
// </span>
// </div>