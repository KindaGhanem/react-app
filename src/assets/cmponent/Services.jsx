import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col , Container, Row, TabContainer } from "react-bootstrap"
import { useState } from 'react';


export default function Services(){


    const [services , setServices ] = useState ([])

    fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json()).then (res => {

        setServices(res)
    });


    return(
        <Container>
            <Row> 
                {
                    services.map((services,index) => {
                    return (
                        <Col key={services.id} lg ="4" md ="6" sm ="12" >
                        <Card  className=' my-5' >
                            <Card.Img variant="top" src= {services.url} />
                            <Card.Body>
                                <Card.Title>{services.title}</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant={services.buttonVarient || "primary" }>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                );
                })}
            </Row>
        </Container>
    );
}