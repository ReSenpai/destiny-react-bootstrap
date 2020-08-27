import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import destiny3 from '../images/destiny_bg3.webp';
import styled from 'styled-components';

const Styles = styled.div `
    .jumbo {
        background: url(${destiny3}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        heigth: 400px;
        position: relative;
        z-index: -2;
    }
    .overlay {
       background-color: #000;
       opacity: 0.5;
       position: absolute;
       top: 0;
       left: 0;
       bottom: 0;
       right: 0;
       z-index: -1;
    }
`

const Jumbotron = () => {
    return (
        <>
           <Styles>
                <Jumbo fluid className='jumbo'>
                        <div className='overlay'></div>
                        <Container>
                            <h1>React dev</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex odio, velit et nostrum laudantium ipsum ab sit nisi officiis, quibusdam reprehenderit voluptate sint doloribus hic eum possimus neque illum?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint expedita necessitatibus, repellat, mollitia corporis odit fugit animi magni impedit voluptas illum alias nam deserunt dolor commodi laudantium dolore excepturi adipisci.
                            </p>
                        </Container>
                </Jumbo>
           </Styles>
        </>
    )
}

export default Jumbotron;