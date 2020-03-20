import React from 'react'
import Hero from '../components/Hero'
import ShowImages from '../components/ShowImages'
import Footer from '../components/Footer'

function HomePage(props) {
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <ShowImages />
        </div>
    )
}

export default HomePage