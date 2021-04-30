import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../Project.css';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge'

const Project = (props) => {
    const name = props.name;
    const link = props.link;
    const image = props.image;
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front" style = {{backgroundImage: "URL(" + image + ")", display: "flex"}}>
                    <h2>{name}</h2>
                </div>
                <div className="flip-card-back">
                    <p>With love</p>
                    <p>By Juan</p>
                    <Button variant='danger' onClick = {(event) => {
                    event.preventDefault();
                    window.open(link);
                }}>
                    Check it out
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Project