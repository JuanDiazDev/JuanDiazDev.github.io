import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge'

const Project = (props) => {
    const name = props.name;
    const link = props.link;
    const image = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";
    return (
        <Card 
        style={{ width: '20rem' }}>
        <Card.Header as = "h4"> {name} </Card.Header>
        <Card.Img variant="top" src={image}/>
        <Card.Body>
            <Badge variant = "dark"> Python </Badge>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant='danger' onClick = {(event) => {
                event.preventDefault();
                window.open(link);
            }}>
                Check it out
            </Button>
        </Card.Body>
        </Card>
    );
}

export default Project
