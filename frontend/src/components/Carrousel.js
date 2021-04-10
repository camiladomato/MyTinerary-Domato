
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';


const cities = [
  [ 
    {city:"Rome", path:'../assets/rom.jpg'},
    {city:"Cancun", path:"../assets/cancun.jpg"},
    {city:"Ibiza" ,path:"../assets/ibiza.jpg"},
    {city:"New York", path:"../assets/ny.jpg"},
    
  ],
  [
    {city:"EEUU", path:"../assets/eeuu.jpg"},
    {city:"Tokio", path:"../assets/tokio.jpg"},
    {city:"Paris" ,path:"../assets/paris.jpg"},
    {city:"Amsterdam", path:"../assets/amsterdam.jpg"}, 
    
  ],
  [
    {city:"Barcelona", path:"../assets/barcelona.jpg"},
    {city:"Milan", path:"../assets/milan.jpg"},
    {city:"Buenos Aires" ,path:"../assets/buenosaires.jpg"},
    {city:"Berlin", path:"../assets/berlin.jpg"}, 
    
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
      <CarouselItem className="slide"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={slide.src}
      >{
        slide.map ( citys =>{
          return (
          
              <div style = {{backgroundImage:`url(${citys.path})`,width:"20vw", height:"30vh",margin:"1vh",padding:"1vh"}}>
                <p>{citys.city}</p>
              </div>
         
            
            )
        })
      }
      </CarouselItem>
    );
  });

  return (
    <Carousel 
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={cities} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Carrousel;