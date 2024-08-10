import React from 'react';
import { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

const photocard = ({photosdata}) => {

    const [show, setShow] = useState(false);

  return (
    <div>
   <Alert show={show} variant="primary">
        <Alert.Heading>Photo added to Favorite 💖</Alert.Heading>
        <hr />
        <p>
        Find millions of top-quality photos that will leave your audience speechless
        </p>
        
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>      
       

  <Row>
   

  {photosdata.map(photo => (
     
    <Col lg={3} md={4} sm={6} xs={12} key={photo.id}>
     <Card.Img className="testimonialImages d-block w-100 h-70" variant="top" key={photo.id} src={photo.download_url} />   
     <Card >
     
     <Card.Header>Author :- {photo.author}</Card.Header>  
     <Card.Body>
     <Card.Title></Card.Title>  
    <Card.Text>         
     <a href={photo.download_url} download>
      Download
     </a>
    </Card.Text>
  
    <Button onClick={() => setShow(true)  }variant="outline-success" > Add to favs 💖 </Button>
 </Card.Body>
 </Card>
 <br />
 </Col>   
 


  ))}

  </Row>
  

  {/* {photos.map((photo) => (
        
        
             <img key={photo.id} src={photo.download_url} alt={photo.title} width={500} height={500} />          
      ))} */}

    </div>
  )
}

export default photocard