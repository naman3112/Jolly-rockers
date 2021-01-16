import React, { Component }  from 'react';
import { Container,
   Row,
   Col } from 'reactstrap';
import Intro from "./Intro";   
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import warvsswag from "../../assets/img/home-page/warvsswag.jpg";

import AllTracks from './AllTracks';
//import warvsswag from "../../assets/img/home-page/warvsswag.jpg";

export default function TracksByJhandupuria(){

    return(
      <>
      
      <IndexNavbar />
      
    <div style={{marginTop:"3%",}}>

        <Container fluid justify style={{
            backgroundImage:
            "url(" + require("assets/img/tracks-by-jhandupuria/Background1.jpeg") + ")",
            backgroundPosition :'60% 7%',
            backgroundSize: 'cover',
            
            backgroundRepeat: 'no-repeat',
            
            
            }} >  
            <Row>
                <Col>
                    <Intro/>    
                </Col>
            </Row>      
            <Row>
                <Col>
                    <AllTracks/>
                </Col>
            </Row>

        </Container>
      </div>
    </>

    )
}