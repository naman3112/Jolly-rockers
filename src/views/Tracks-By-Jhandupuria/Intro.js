import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import {
    Container, Button,
    Row,
    Col
} from 'reactstrap';
import jolly from '../../assets/img/tracks-by-jhandupuria/Intro.jpeg'

export default function Intro() {
    return (
        <div style={{ margin: '5%', height: '50%', width: '90%' }}>
            <Card style={{ opacity: '0.9' }}>
                <Container fluid>
                    <Row>
                        <Col sm={12} md={8} >

                            <CardBody>
                                <h2 style={{ fontWeight: 'bold' }}> About Us</h2>
                                <CardText style={{ fontSize: '1.2rem', fontWeight: 'bold' }} >
                                    Jolly Rockers Productions is a dynamic production house that have a strong motivation towards creating awesome projects that includes songs, lyrics, compositions and interviews. It also extends its hand in upliftment society by highlighting the current social issues. Besides this we give ample amount of opoortunities to the budding artists.
        <br />
Our mission is to come up with some exquisite piece of work that entertains every masses and classes.
        </CardText>
                                <CardText style={{ fontWeight: 'bold', fontSize: '2rem' }}> ਨਾਨਕ ਨਾਮ ਚੜਦੀ ਕਲਾ, ਤੇਰੇ ਭਾਣੇ ਸਰਬਤ ਦਾ ਭਲਾ ।। Waheguru 🙏🏻</CardText>
                                <h3 style={{ fontWeight: 'bold' }} >Follow us on </h3>

                                <a href="https://twitter.com/CreativeTim?ref=creativetim" style={{ margin: '4%' }} >
                                    <i className="fa-3x fa fa-twitter" />
                                </a>
                                <a href="https://twitter.com/CreativeTim?ref=creativetim" style={{ margin: '4%' }}>
                                    <i className="fa  fa-3x fa-facebook-square" />
                                </a>
                                <a href="https://twitter.com/CreativeTim?ref=creativetim" style={{ margin: '4%' }}>
                                    <i className="fa fa-3x fa-instagram" />
                                </a>
                                <a href="https://twitter.com/CreativeTim?ref=creativetim" style={{ margin: '4%' }}>
                                    <i className="fa fa-3x fa-twitter" />
                                </a>
                                <h4>We are now taking bookings for show</h4>
                                <Button href="https://docs.google.com/forms/d/1DyHOq3MYiYu95NJqYe289uI0uscrP5CFi3H5y6nEXhY/edit" size="lg" color="danger" type="button">
                                    Book Now!
      </Button>
                                <br />
                                <h4> Let's collaborate to make some more aweosme projects</h4>
                                <Button href="https://docs.google.com/forms/d/1rG6s-kkvsjR6KnRyeTIdIeJCKYHBllime4n9cvmJKeM/viewform?edit_requested=true" size="lg" color="danger" type="button">
                                    Want to collab with us?
      </Button>
                                <h2 style={{ fontWeight: 'bold' }}> Contact Us</h2>
                                <h4 style={{ width: '100%', fontWeight: 'bold', background: 'red', color: 'white' }}>    jollyrockerstoofan@gmail.com  </h4>
                            </CardBody>
                        </Col>
                        <Col sm={12} md={4}>
                            <CardImg style={{ minHeight: '40%' }} src={jolly} alt="..."></CardImg>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </div>
    )
}

