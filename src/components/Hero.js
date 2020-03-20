import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../index.css'


function Hero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0"> 
            <Container fluid={true} className="center back-color1"> 
                <Row className="justify-content-center py-5" > 
                    <Col md={8} sm={13} lg={8}> 
                        { props.title && <h1 className="title">{props.title}</h1> } 
                        { props.subTitle && <h3 className="subtitle">{props.subTitle}</h3> } 
                        { props.text && <h3 className="text">{props.text}</h3> } 
                    </Col> 
                </Row> 
            </Container> 
        </Jumbotron>
    )
}

export default Hero