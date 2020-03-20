import React from "react"
import Card from "./Card"
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'

import image1 from '../assets/images/instagram_clone.png'
import image2 from '../assets/images/beach1.jpg'
import image3 from '../assets/images/Flappy_Bird_icon.png'

class Carousel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Instagram Clone',
                    subTitle: 'My version of Instagram.',
                    imgSrc: image1,
                    link: 'https://instagram.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Beach Resort',
                    subTitle: 'Booking a hotel.',
                    imgSrc: image2,
                    link: 'https://www.beachresort.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Flappy Bird Clone',
                    subTitle: 'My version of Flappy Bird.',
                    imgSrc: image3,
                    link: 'https://flappy.com',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false
            }
        })

        this.setState({
            items
        })
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid = {true}>
                <Row className = "justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel