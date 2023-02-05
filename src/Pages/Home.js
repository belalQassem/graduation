import React from 'react'
import {  Carousel,Image, Card, Col, Row} from 'antd';
import love from '../assets/love.jpeg'
import elev from '../assets/elev.jpeg'
import four from '../assets/four.jpeg'
import image1 from '../assets/test.jpeg'
import image2 from '../assets/five.jpeg'
import image3 from '../assets/siven.jpeg'
// import image4 from '../assets/eigh.jpeg'
import image5 from '../assets/Group.png'
import image6 from '../assets/second.jpeg'
import image4 from '../assets/third.jpeg'
import image7 from '../assets/ten.jpeg'
import image8 from '../assets/six.jpeg'
import image9 from '../assets/g3.png'
import kids from "../Video/Kids.mp4";
import Foot from '../Components/Footer';
const { Meta } = Card;
const Home = () => {
 
    const style = {
      // background: '#F5F5F6',
      padding: '20px 20px 20px 30px',
    };


  return (
    <div>
      <div className="carousel">
      <Carousel autoplay>
        <div><a href="/"> <video width="100%" height="680px" autoPlay >
      <source src={kids} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video></a></div>
        <div><Image src={four} style={{height:"680px",width:"100vw"}}></Image></div>
      <div> <Image src={love} style={{height:"680px",width:"99vw"}}></Image></div>
      </Carousel>
      </div>
  



  
  <div className="site-card-wrapper">
  <div style={{textAlign:"center",paddingTop:"50px" }}>
    <p style={{fontSize:"14px" }}>Explore Awesome Products</p>
    <p style={{fontSize:"25px",fontWeight:"700",marginTop:"-5px" ,textTransform:"capitalize"}}>RECOMMENDED FOR YOU</p>
  </div>
  <div style={{paddingLeft:"15%" , paddingTop:"20px"}}>
    <Row gutter={16}>
      <Col span={7}>
      <Card
    hoverable
    style={{
      width: 320,
      height: 400,
    }}
    cover={<Image src={image1} height= "307px"></Image>}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
      </Col>
      <Col span={7}>
      <Card
    hoverable
    style={{
      width: 320,
      height: 400
    }}
    cover={<Image src={image2} height= "307px"></Image>}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
      </Col>
      <Col span={7}>
        <Card
    hoverable
    style={{
      width: 320,
      height: 400
    }}
    cover={<Image src={image3} height= "307px"></Image>}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
      </Col>
    </Row>
    </div>
  </div>


  <div>
   <img src={image5} alt="ff" width="100%" style={{marginTop:"10%"}}/>
  </div>
  
  <Row style={{marginTop:"10%"}}>
  <Col className="gutter-row" span={1}></Col>
      <Col className="gutter-row" span={6}>
        <div style={style}><Image src={image7} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}}/></div>
        
        <div style={style}><Image src={image8} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}}/></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}><Image src={elev} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}} /></div>
        
        <div style={style}><Image src={image4} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}}/></div>
      </Col>
      {/* <Col className="gutter-row" span={1}></Col> */}
      <Col className="gutter-row" span={10}>
        <div style={style}>
          <Image src={image6} alt="ff" width="100%" style={{border:"1px",borderRadius:"132px",height:"604px"}}/>
        </div>
      </Col>
    </Row>

     <div><img src={image9} alt="ff" width="100%" style={{marginTop:"10%"}}/></div>
     <Row style={{marginTop:"10%"}}>
      <Col className="gutter-row" span={6}>
        <div style={style}><Image src={image7} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}}/></div>
        
        <div style={style}><Image src={image8} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}}/></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}><Image src={elev} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}} /></div>
        
        <div style={style}><Image src={image4} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}}/></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}><Image src={image7} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}}/></div>
        
        <div style={style}><Image src={image8} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}}/></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}><Image src={elev} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}} /></div>
        
        <div style={style}><Image src={image4} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}}/></div>
      </Col>
    </Row>
    <div>
   <img src={image5} alt="ff" width="100%" style={{marginTop:"10%"}}/>
  </div>
     <Foot/>
    </div>
  )
}

export default Home;
