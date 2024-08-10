import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const photocard = ({photosdata}) => {
  return (
    <div>

  <Row>
   

  {photosdata.map(photo => (
  
    <Col lg={3} md={4} sm={6} xs={12} key={photo.id}>
     <Card style={{ width: '18rem' }}>
  <Card.Header></Card.Header>  
  <Card.Img className="testimonialImages d-block w-100 h-70" variant="top" key={photo.id} src={photo.download_url} />
  <Card.Body>
  <Card.Title></Card.Title>
  <Card.Text>         
  Author :- {photo.author}
  </Card.Text>  
  <Card.Text>         
  <a href={photo.download_url} download>
   Download
   </a>
  </Card.Text>
 
  <Button>Add to favs </Button>
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