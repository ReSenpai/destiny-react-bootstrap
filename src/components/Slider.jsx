import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import destiny1 from '../images/destiny_bg1.webp';
import destiny2 from '../images/destiny_bg2.webp';
import destiny3 from '../images/destiny_bg3.webp';
import CarouselContent from './CarouselItem';

const Slider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item style={{'height' : '600px'}}>
                    <CarouselContent image={ destiny1 } header='Earth'
                    desription='Home and the last stop of the wanderer' />
                </Carousel.Item>
                <Carousel.Item style={{'height' : '600px'}}>
                    <CarouselContent image={ destiny2 } header='Rift'
                    desription='Lost in Time on the Edge of Space' />
                </Carousel.Item>
                <Carousel.Item style={{'height' : '600px'}}>
                    <CarouselContent image={ destiny3 } header='Mars'
                    desription='War Machine on the planet god of war' />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Slider;