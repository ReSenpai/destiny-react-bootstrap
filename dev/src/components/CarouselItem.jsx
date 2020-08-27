import React from 'react';
import { Carousel } from 'react-bootstrap';


const CarouselContent = ({image, header, desription}) => {
    return (
        <div>
            <img className='d-block w-100' src={ image } alt='slider image'></img>
            <Carousel.Caption>
                <h3>{ header }</h3>
                <p>{ desription }</p>
            </Carousel.Caption>
        </div>
    )
}

export default CarouselContent;