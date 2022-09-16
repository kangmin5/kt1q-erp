import React from 'react'
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"

const Slideshow = () => {

  const images = [
    "slides/slide_01.png",
    "slides/slide_02.png",
    "slides/slide_03.png",
    "slides/slide_04.png",

    "slides/slide_06.png",
  ];

  const zoomInProperties = {
		indicators: true,
		scale: 1.2,
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		prevArrow: (
			<div style={{ width: "30px", marginRight: "-30px", cursor: "pointer" }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="#ede4e4"
				>
					<path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
				</svg>
			</div>
		),
		nextArrow: (
			<div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="#ede4e4"
				>
					<path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
				</svg>
			</div>
		),
	};

  return (
    <div>
      <Zoom {...zoomInProperties}>
				{images.map((each, index) => 
          // eslint-disable-next-line @next/next/no-img-element
          <img key={index} style={{width:"100%", maxHeight:"400px", objectFit:"cover"}} src={each}	alt='slides'/>

				)}
			</Zoom>
		</div>
  )
}

export default Slideshow