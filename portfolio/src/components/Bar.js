import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

const Bar = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
    <Navbar.Brand>
       @JuanDiazDev
    </Navbar.Brand>
    <Button variant='light' onClick = {(event) => {
                event.preventDefault();
                window.open("https://github.com/JuanDiazDev");
            }}>
                Github
    </Button>
  </Navbar>
  )
};
export default Bar;