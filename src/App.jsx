import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { Row } from 'react-bootstrap';
import { MoonLoader } from 'react-spinners';





function App() {
  const [count, setCount] = useState(0)
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [theme, setTheme] = useState('light');
  const spinnerColor = theme === 'light' ? '#000' : '#fff';

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const image = "https://picsum.photos/v2/list?page=2&limit=30";
  
      try {
        const resp = await fetch (image);
        const data = await resp.json();
        console.log(data);
        // Do anything you need to do to
        // data before this call:
        setPhotos(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
  
    getData();
  }, []);

  if (loading) {
    return <div>
      <MoonLoader color={spinnerColor} />
    </div>;
  }

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Imaze Bazar.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Post</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Likes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Post Image
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">My Favorites</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Your Downloads
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <ProgressBar animated now={95} />;
    <Col md={6} className="mb-2">
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">React Assignment Project</strong>
            <small>11 second ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, Downlode Your Favorite Image, its FREE!</Toast.Body>
        </Toast>
      </Col>


      <Carousel>      
        {photos.map(photo => (
          <Carousel.Item key={photo.id}>
            <img
              className="testimonialImages d-block w-100 h-50"
              src={photo.download_url}
              alt={photo.author}
            />
            <Carousel.Caption>
              <h3>Author</h3>
              <p>{photo.author}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <br />

      <Row>

      {photos.map(photo => (
        
          <Col lg={3} md={4} sm={6} xs={12} key={photo.id}>
           <Card style={{ width: '18rem' }}>
        <Card.Header></Card.Header>  
        <Card.Img className="testimonialImages d-block w-100 h-70" variant="top" key={photo.id} src={photo.download_url} />
        <Card.Body>
        <Card.Title>No. {photo.id}</Card.Title>
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


    {photos.map(photo => (
        
        <Col lg={3} md={4} sm={6} xs={12} key={photo.id}>
         <Card style={{ width: '18rem' }}>
      <Card.Header></Card.Header>  
      <Card.Img variant="top" key={photo.id} src={photo.download_url} />
      <Card.Body>
      <Card.Title>No. {photo.id}</Card.Title>
      <Card.Text>         
        Author :- {photo.author}
        </Card.Text> 
      <Card.Text>
      <a href={photo.download_url} download>
         Download
         </a>
      </Card.Text>
     
      <Button>Add to favs</Button>
     </Card.Body>
     </Card>
     <br />
     </Col>
     


      ))}

      </Row>



      {/* {photos.map((photo) => (
        
        
             <img key={photo.id} src={photo.download_url} alt={photo.title} width={500} height={500} />          
      ))} */}


    </>
  )
}

export default App
