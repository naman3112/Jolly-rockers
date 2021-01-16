import React, { Component }  from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import amazon from "../../assets/img/tracks-by-jhandupuria/amazonMusic.jpg"
import spotify from ".../../assets/img/tracks-by-jhandupuria/spotify.png"
import apple from ".../../assets/img/tracks-by-jhandupuria/appleMusic.png"
import savan from ".../../assets/img/tracks-by-jhandupuria/savan.png"
import you from "../../assets/img/home-page/youtube.png"

const styleimg={
  height: '30%',
  width : '20%' ,
  //marginRight: "0%"
}
export default function Track (props){
return (
<Card   >
    <CardImg style={{height: '20rem'}} top src={props.img} alt="..."/>
    <CardBody>
        <h2 style={{fontWeight: 'bold',marginBottom: '2%'}}>{props.title}</h2>
       
        <Button size="lg" color="danger" href="https://bit.ly/35FNMFs">
        <img src={you} style={{height:'20px', width: '30px'}} alt="Youtube" />

          Listen Now</Button>
        <h4>You can also listen our songs on </h4>
     

        <a href="https://amzn.to/2KQ2iU3">
<img style={{marginRight :'1%',height:"150px", width: "160px"}} src={amazon} />
</a>
<a  href="https://spoti.fi/35Ha4qh">
<img style={{marginRight :'3%',height:"50px", width: "50px"}} src={spotify} />
</a>

<a href="https://apple.co/38JNmjg">
<img style={{marginRight :'1%',height:"7%", width: "20%"}} src={apple} />
</a>
<a href="https://bit.ly/2KcZAra" >
<img style={{marginLeft :'3%',height:"15%", width: "20%"}} src={savan} />
</a>
<a href="https://bit.ly/35FNMFs" target="_blank"> 
            <img style ={styleimg} src= {require('../../assets/img/home-page/youtube.jpg')} />

</a>
    </CardBody>
</Card>

)

}
