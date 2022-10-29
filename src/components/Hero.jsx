import React from 'react';

function Hero() {
  return (
    <div className="hero">
      <div className="hero--gallery-container">
        <img src="gallery.png" alt="Experiences image gallery" className='hero--gallery'/>
      </div>
      <div className="hero--text-container">
        <h1 className='hero--title'>Online Experiences</h1>
        <p className='hero--text black'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </div>
  );
}

export default Hero;
