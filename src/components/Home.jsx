import React from 'react';
import Slider from './Slider';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import weapon from '../images/weapons.webp';
import raids from '../images/raids.webp';
import history from '../images/death.webp';
import Jumbotron from './Jumbotron';

const Home = () => {
    return (
        <>
          <Slider />
          <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
              <Row>
                  <Col>
                    <CardItem 
                    image={ weapon } 
                    header='Weapon' 
                    text='Lorem sdfsdf d sf s' />
                  </Col>
                  <Col>
                    <CardItem 
                    image={ raids } 
                    header='Raids' 
                    text='Lorem sdfsdf d sf s' />
                  </Col>
                  <Col>
                    <CardItem 
                    image={ history } 
                    header='History' 
                    text='Lorem sdfsdf d sf s' />
                  </Col>  
              </Row>
          </Container>
          <Jumbotron />
          <Container style={{marginBottom: '30px'}}>
              <Row>
                  <Col md={7}>
                    <img src={ weapon } alt="weapon image" height={350}/>
                  </Col>
                  <Col md={5}>
                        <h2>React Dev</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo ab iusto, sint modi accusamus dignissimos minus quisquam id voluptatibus minima veritatis vel ratione ut consectetur sunt. Saepe, culpa reiciendis.<br/><br/>

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, nemo. Asperiores architecto aliquam odio voluptates iure. Eos suscipit magni, dolorum rem consequuntur, officia aspernatur odio quibusdam incidunt doloremque explicabo ipsa.<br/><br/>

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sunt ratione recusandae.
                        </p>
                  </Col>
              </Row>
          </Container>
        </>
    )
}

const CardItem = ({image, header, text}) => {
    return (
        <Card style={{'width': '18rem'}}>
            <Card.Img variant='top' src={ image }/>
            <Card.Body>
                <Card.Title>{ header }</Card.Title>
                <Card.Text>{ text }</Card.Text>
                <Button variant='primary'>Learn more</Button>
            </Card.Body>
        </Card>
    )
}

export default Home;