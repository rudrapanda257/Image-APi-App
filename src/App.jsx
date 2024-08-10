import { useState,useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navigation';
import Carousel from './components/imageslide';
import Card from './components/photocard';
import Pagination from "./components/Pagination";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { MoonLoader } from 'react-spinners';


function App() {
 
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [theme, setTheme] = useState('light');
  const spinnerColor = theme === 'light' ? '#000' : '#fff';
  const [photosData, setPhotosData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(8);

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
        setPhotosData(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
  
    getData();
  }, []);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPhotos = photosData.slice(firstPostIndex, lastPostIndex);

  if (loading) {
    return <div>
      <MoonLoader color={spinnerColor} />
    </div>;
  }

  return (
    <>
      <Navbar/>

      <Carousel photos={photos}/>
      
      <br />
      <Card  photosdata={currentPhotos}/>

      <Pagination
                totalPhotos={photosData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />

      



      


    </>
  )
}

export default App
