import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';



const imageslide = ({photos}) => {
  return (
    <div>
        

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
    </div>
  )
}

export default imageslide