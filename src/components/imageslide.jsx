import React from 'react'
import { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';



const imageslide = ({photos}) => {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return (
    <div>
        

        <Carousel>      
        {photos.map(photo => (
          <Carousel.Item key={photo.id}>
            <img
              className="testimonialImages d-block w-100 h-10"
              src={photo.download_url}
              alt={photo.author}
            />
            <Carousel.Caption>
            <h3>Find millions of top-quality photos that will leave your audience speechless</h3>
            <hr />
              <p>Owner : {photo.author}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Alert  variant="success">
        <Alert.Heading>Explore Free Stock Photos 📸</Alert.Heading>
        <hr />
        <p>
            <h1>Stunning royalty-free images & royalty-free stock</h1>
        
        Over 4.9 million+ high quality stock images, videos and music shared by our talented community.
          
        </p>
        
        <div className="d-flex justify-content-end">
          
        </div>
      </Alert>
      


      <Col md={6} className="mb-2">
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">React Project</strong>
            <small>11 second ago 🕛</small>
          </Toast.Header>
          <Toast.Body variant="success">Woohoo, Download Your Favorite Image, its FREE!</Toast.Body>
        </Toast>
      </Col>
    </div>
  )
}

export default imageslide