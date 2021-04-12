
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
    {id:1, city:"Rome", path:'../assets/rom.jpg' },
    {id:2,city:"Cancun", path:"../assets/cancun.jpg"},
    {id:3,city:"Ibiza" ,path:"../assets/ibiza.jpg" },
    {id:4,city:"New York", path:"../assets/ny.jpg"},
    
  ],
  [ 
    {id:5,city:"LA", path:"../assets/eeuu.jpg"},
    {id:6,city:"Tokio", path:"../assets/tokio.jpg"},
    {id:7,city:"Paris" ,path:"../assets/paris.jpg"},
    {id:8,city:"Amsterdam", path:"../assets/amsterdam.jpg"}, 
    
  ],
  [ 
    {id:9,city:"Barcelona", path:"../assets/barcelona.jpg"},
    {id:10,city:"Milan", path:"../assets/milan.jpg"},
    {id:11,city:"Buenos Aires" ,path:"../assets/buenosaires.jpg"},
    {id:12,city:"Berlin", path:"../assets/berlin.jpg"}, 
    
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
        
        
      >
        <h2 className="txt">Popular MYtineraries</h2>
        <div className="slide" >
        {
        slide.map ( citys =>{
          
          return (
            
              <div key={citys.city} className="photo" style = {{backgroundImage:`url(${citys.path})`,width:"37vw", height:"40vh",margin:"1vh",backgroundSize:"cover"}}>
                <h2 className="photo-name">{citys.city}</h2>
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