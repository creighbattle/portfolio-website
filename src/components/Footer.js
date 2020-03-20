import React from 'react'
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../index.css'

function Footer() {
    return (
        <footer className = "mt-50">
            <Container fluid={true} className="bottom-page">
                <Row className=/*"border-top justify-content-between p-3"*/"border-top p-3 justify-content-between">
                    <Col className="p-0"  md={3} sm={12}>
                        Footer
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer