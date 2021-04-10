
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const cities = [
  [ 
    {city:"Rome", path:'../assets/rom.jpg' ,id:"01"},
    {city:"Cancun", path:"../assets/cancun.jpg", id:"02"},
    {city:"Ibiza" ,path:"../assets/ibiza.jpg" ,id:"03"},
    {city:"New York", path:"../assets/ny.jpg",id:"04"},
    
  ],
  [
    {city:"LA", path:"../assets/eeuu.jpg",id:"05"},
    {city:"Tokio", path:"../assets/tokio.jpg",id:"06"},
    {city:"Paris" ,path:"../assets/paris.jpg",id:"07"},
    {city:"Amsterdam", path:"../assets/amsterdam.jpg",id:"08"}, 
    
  ],
  [
    {city:"Barcelona", path:"../assets/barcelona.jpg",id:"09"},
    {city:"Milan", path:"../assets/milan.jpg",id:"10"},
    {city:"Buenos Aires" ,path:"../assets/buenosaires.jpg",id:"11"},
    {city:"Berlin", path:"../assets/berlin.jpg",id:"12"}, 
    
  ],
 
];


const Carrousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === cities.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? cities.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = cities.map((slide) => {
    return (
      <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={slide.city}
      ><div className="slide">
        {
        slide.map ( citys =>{
          return (
          
              <div style = {{backgroundImage:`url(${citys.path})`,width:"40vw", height:"30vh",margin:"1vh",padding:"1vh",backgroundSize:"cover"}}>
                <p>{citys.city}</p>
              </div>
         

            )
        })
      }
      </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel className="carousel"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      
    > 
      <CarouselIndicators items={cities} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
      <CarouselControl direction="next" directionText="Next" onClickHandler={next}  />
    </Carousel>
  );
}

export default Carrousel;