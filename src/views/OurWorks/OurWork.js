import React from 'react';
import { Container,
   Row,
   Col } from 'reactstrap';
import OurWorkWithData from './WorkinWithData';
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import Workinfo from './WorkData';



export default function OurWork(){

    return(
      <>
      
      <IndexNavbar />
      
    <div style={{paddingTop:"2%", backgroundColor: 'black'}}>

        <Container fluid justify> 
        <h1 style={{ textDecorationLine: 'underline',    fontWeight : 'bold', color: "#f5da42",margin: "5%",textAlign: 'center'}}>Transforming  <span style={{color: 'white'}}>India</span></h1>
        <Row  >
            <Col sm={3} style={{marginLeft: "3%"}} >
            <OurWorkWithData 
                  name={Workinfo[9].Name}
                  short={Workinfo[9].short}
                  link={Workinfo[9].link}
                  img={Workinfo[9].img}
               />
            </Col>
           
            <Col sm={4} style={{marginLeft:"5%"}}  >
            <OurWorkWithData 
                  name={Workinfo[8].Name}
                  short={Workinfo[8].short}
                  link={Workinfo[8].link}
                  img={Workinfo[8].img}
               />
            </Col>
            <Col sm={3} style={{marginLeft:"5%"}} >
               <OurWorkWithData 
                  name={Workinfo[10].Name}
                  short={Workinfo[10].short}
                  link={Workinfo[10].link}
                  img={Workinfo[10].img}
               />
            </Col>
           </Row>




        <h1 style={{ textDecorationLine: 'underline',    fontWeight : 'bold', color: "#f5da42",margin: "5%",textAlign: 'center'}}>Food  <span style={{color: 'white'}}>For You</span></h1>
           <Row  >
            <Col sm={3} style={{marginLeft: "2%"}} >
               <OurWorkWithData 
                  name={Workinfo[0].Name}
                  short={Workinfo[0].short}
                  link={Workinfo[0].link}
                  img={Workinfo[0].img}
               />
            </Col>
            <Col sm={3}  >
               <OurWorkWithData 
                  name={Workinfo[1].Name}
                  short={Workinfo[1].short}
                  link={Workinfo[1].link}
                  img={Workinfo[1].img}
               />
            </Col>
            <Col sm={3}  >
               <OurWorkWithData 
                  name={Workinfo[2].Name}
                  short={Workinfo[2].short}
                  link={Workinfo[2].link}
                  img={Workinfo[2].img}
               />
            </Col>
            <Col sm={2}  >
               <OurWorkWithData 
                  name={Workinfo[3].Name}
                  short={Workinfo[3].short}
                  link={Workinfo[3].link}
                  img={Workinfo[3].img}
               />
            </Col>

           </Row>
           <h1 style={{ textDecorationLine: 'underline', fontWeight : 'bold', color: "white",margin: "5%",textAlign: 'center'}}><span style={{color: '#f5da42'}}>Reshaping the earth </span>into heaven</h1>
           <Row  >
            <Col sm={5} style={{marginLeft: "4%"}} >
               <OurWorkWithData 
                  name={Workinfo[4].Name}
                  short={Workinfo[4].short}
                  link={Workinfo[4].link}
                  img={Workinfo[4].img}
               />
            </Col>
            <Col sm={5} style={{marginLeft:"5%"}} >
               <OurWorkWithData 
                  name={Workinfo[5].Name}
                  short={Workinfo[5].short}
                  link={Workinfo[5].link}
                  img={Workinfo[5].img}
               />
            </Col>
     
           </Row>
           <h1 style={{ textDecorationLine: 'underline', fontWeight : 'bold', color: "white",margin: "5%",textAlign: 'center'}}><span style={{color: '#f5da42'}}>The Real </span>Heroes</h1>
         <Row >
             <Col sm={5} style={{marginLeft: "4%"}}>
             <OurWorkWithData 
                  name={Workinfo[6].Name}
                  short={Workinfo[6].short}
                  link={Workinfo[6].link}
                  img={Workinfo[6].img}
               />
             </Col>
             <Col sm={5} style={{marginLeft: "5%"}}>
             <OurWorkWithData 
                  name={Workinfo[7].Name}
                  short={Workinfo[7].short}
                  link={Workinfo[7].link}
                  img={Workinfo[7].img}
               />
             </Col>
         </Row>


        </Container>
      </div>
    </>

    )
}