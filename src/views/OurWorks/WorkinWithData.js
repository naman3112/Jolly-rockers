import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
export default function OurWorkWithData(props){
   
    return(
<Card style={{minWidth: '22rem'}}>
    <CardImg top 
src={require(`assets/img/our-work/${props.img}` )}

    alt="..."/>
    <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.short}</CardText>
        <Button href={props.link} color="danger" size="lg" >Watch Now</Button>

    </CardBody>
</Card>

    )
}