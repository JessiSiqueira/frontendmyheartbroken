import { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css.components/carousel.css'
import shrek from '../images/shrek2.jpeg'
import spotify from '../images/Spotify.jpg'
import marcia from '../images/marcia.jpg'
import tinder from '../images/tinder.jpg'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='carousel-div'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <a href="https://www.netflix.com/br/title/60034572" target="Shrek2">
          <img className="carouselImg" src={shrek}/>
        </a>     
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://tinder.com/pt/download" target="Tinder">
          <img className="carouselImg" src={tinder}/>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://www.youtube.com/watch?v=0sBO4OdoBVc" target="Marcia">  
          <img className="carouselImg" src={marcia}/>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://open.spotify.com/playlist/2bjQ6NTcIhfUumZ90b6Kvv" target="playlist"> 
          <img className="carouselImg" src={spotify}/>
        </a>     
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;