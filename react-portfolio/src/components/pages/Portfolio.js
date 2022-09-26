import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <h1 class="text-center">Portfolio Page</h1>
      
      <div class="row row-cols-1 row-cols-sm-2 g-3">
  <div class="col">
    <div class="card">
    <img src={require('../../assets/e-commerce-home-page.jpeg')} alt='E-commerce art store homepage'  class="card-img-top" ></img> 
      <div class="card-body">
        <h5 class="card-title">E commerce art store</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <img src={require('../../assets/icons/github-icon.png')} alt='github icon'  height='50px' ></img>        
        <img src={require('../../assets/icons/linkedin.png')} alt='linkedin icon'  height='50px' ></img> 
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={require('../../assets/jate-screenshot.png')} alt='note taker app homepage' class="card-img-top" ></img> 
      <div class="card-body">
        <h5 class="card-title">JATE</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <img src={require('../../assets/icons/github-icon.png')} alt='github icon'  height='50px' ></img>        
        <img src={require('../../assets/icons/linkedin.png')} alt='linkedin icon'  height='50px' ></img> 
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={require('../../assets/note-taker.png')} alt='note taker app homepage' class="card-img-top" ></img> 
      <div class="card-body">
        <h5 class="card-title">Note Taker</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <img src={require('../../assets/icons/github-icon.png')} alt='github icon'  height='50px' ></img>        
        <img src={require('../../assets/icons/linkedin.png')} alt='linkedin icon'  height='50px' ></img> 
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={require('../../assets/reademe-generator.png')} alt='note taker app homepage' class="card-img-top" ></img> 

      <div class="card-body">
        <h5 class="card-title">README.md generator </h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <img src={require('../../assets/icons/github-icon.png')} alt='github icon'  height='50px' ></img>        
        <img src={require('../../assets/icons/linkedin.png')} alt='linkedin icon'  height='50px' ></img> 
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={require('../../assets/schedule-planner-home.jpeg')} alt='note taker app homepage' class="card-img-top" ></img> 

      <div class="card-body">
        <h5 class="card-title">Schedule Planner</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <img src={require('../../assets/icons/github-icon.png')} alt='github icon'  height='50px' ></img>        
        <img src={require('../../assets/icons/linkedin.png')} alt='linkedin icon'  height='50px' ></img> 
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={require('../../assets/password-generator.png')} alt='note taker app homepage' class="card-img-top" ></img> 
      <div class="card-body">
        <h5 class="card-title">Password Generator</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <img src={require('../../assets/icons/github-icon.png')} alt='github icon'  height='50px' ></img>        
        <img src={require('../../assets/icons/linkedin.png')} alt='linkedin icon'  height='50px' ></img> 
      </div>
    </div>
  </div>
</div>

</div>

  );
}
