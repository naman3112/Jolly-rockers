import React, { Component }  from 'react';
import Track from './Track'
import warvsswag from "../../assets/img/home-page/warvsswag.jpg";
import adhithdy from "../../assets/img/home-page/adhithdy.jpeg";
import sunheriye from "../../assets/img/tracks-by-jhandupuria/sunHeriye.jpg"
import { Card} from 'reactstrap';
import { Container,Button,
    Row,
    Col } from 'reactstrap';

export default function AllTracks(){
    return(
        <div style={{marginLeft: '5%', marginTop: '0%', height: '50%',width:'90%'}}>

<Card style={{opacity: '0.9'}}>
   <Container justify fluid>
       <h1  style={{textAlign: 'center',marginBottom: '2%',fontWeight: 'bold'}}>Our single tracks</h1>
        <Row >
            <Col sm={4}>
                  <Track  title="War Vs Swag" img={warvsswag}/>
             </Col>
             <Col sm={4}>
                  <Track  title="Addy Thdy" img={adhithdy}/>
             </Col>
             <Col sm={4}>
                  <Track  title="Sunn ne Heriye" img={sunheriye}/>
             </Col>
        </Row>
   </Container>
   
  
</Card>


        </div>
    )
}

