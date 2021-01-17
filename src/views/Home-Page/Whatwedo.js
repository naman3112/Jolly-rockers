
import React from "react";
// react plugin used to create switch buttons

import {
  UncontrolledCarousel,
  Container,
  Row,
  Col,
} from "reactstrap";

const styleimg={
  height: '90%',
  width : '90%' ,
  //marginRight: "0%"
}
const carouselItems = [
  {
    src:
    require('../../assets/img/tracks-by-jhandupuria/sunHeriye.jpg'),
    altText: "Slide 1",
   
  },
    {
      src:
      require('../../assets/img/home-page/adhithdy.jpeg'),
      altText: "Slide 2",
      
    },
    {
      src: require('../../assets/img/home-page/warvsswag.jpg'),
      altText: "Slide 3",
      caption: ""
    }
  ];
export default function Whatwedo(){
    return (
      <Container fluid style={{textAlign : 'center', backgroundColor: "black"}} >
          <Row style={{backgroundColor: "black"}}>
            <Col md={4} style={{backgroundColor: "black", fontWeight: "bold"}}>
            <h1 style={{color: "white", fontWeight: "bold", marginLeft: "10%"}}>What we do?</h1>
              <h4 style={{fontWeight: "bold", color:"white", marginLeft: "10%"}}>
              Jolly Rockers Means “Free Style Vlogger , Lyricist & Singer ” Creating Something New & unique in Every Category of Masses & Classes &  we are into - Social work , Food Vlogs , Pubic Debates , Interactions , Reaction Videos , Music & Dance, Always Respect Others & I am Here for Good Cause
              
              </h4>
            </Col>
            <Col md={8} sm={12}>
            <UncontrolledCarousel items={carouselItems}  />
            </Col>
          </Row>
          <h1 style={{fontWeight : 'bold', color: "#f5da42",marginBottom: "2%"}}>You can <span style={{color: 'white'}}>stream</span> our music on  </h1>

        <Row style={{margin: "2%"}}>
          <Col md={2} sm={12} style={{margin: '2%'}} >
           <a href="https://spoti.fi/35Ha4qh" target="_blank"> 
           <img  style ={styleimg} src= {require('../../assets/img/home-page/spotify.png')} />
           </a>
          </Col>
          <Col md={2} sm={12} style={{margin: '2%'}}>
           <a href="https://www.jiosaavn.com/artist/jolly-jhandupuria-songs/5sYbiZ8fgDg_" target="_blank">
           <img style ={styleimg} src= {require('../../assets/img/home-page/jioSavan.png')} />
           </a>
          </Col>
          <Col md={2} sm={12} style={{margin: '2%'}} >
            <a href="https://apple.co/38JNmjg" target="_blank"> 
            <img style ={styleimg}src= {require('../../assets/img/home-page/appleMusic.jpeg')} />

            </a>
          </Col>
          <Col md={2} sm={12}style={{margin: '2%'}}>
            <a href="https://music.amazon.com/artists/B08F3W37RS/jolly-jhandupuria" target="_blank"> 
            <img style ={styleimg} src= {require('../../assets/img/home-page/amazonMusic.png')} />

            </a>
          </Col>

          <Col md={2} sm={12} >
            <a href="https://bit.ly/35FNMFs" target="_blank"> 
            <img style ={styleimg} src= {require('../../assets/img/home-page/youtube.jpg')} />

            </a>
          </Col>
        </Row>
      </Container>  
    )
    
}