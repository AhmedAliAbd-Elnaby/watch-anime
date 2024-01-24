import React from 'react'
import image from '../assets/hero_img.jpg'

function Hero() {
  return (
    <section className='hero' id='hero'>

      <div className="wrapper">
        <h1 className='hero__title'>Watch <br /> Any <span>Anime</span>,<br /> Any <span>Time</span>,<br /> Any <span>Where</span>.</h1>
        <img className='hero__image' src={image} alt="" />
      </div>

      <div className='hero__infinite-scroll'>
        <div className='row'>
          <span >Shonen</span>
          <span >Shojo</span>
          <span >Seinen</span>
          <span >Josei</span>
          <span >Mecha</span>
          <span >Isekai</span>
          <span >Slice of Life</span>
          <span >Fantasía</span>
        </div>
      </div>
    </section>
  )
}

export default Hero;