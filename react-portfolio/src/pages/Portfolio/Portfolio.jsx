import React from 'react';

export default function Portfolio() {
  return (
<div>
  <h1 class="text-center">Portfolio</h1>
  <div class="row row-cols-1 row-cols-sm-2 g-3">
    
    <div class="col">
      <div class="card">
        <img src={require('../../assets/screenshots/e-commerce-home-page.jpeg')} alt='E-commerce art store homepage'  class="card-img-top" ></img> 
        <div class="card-body">
          <h5 class="card-title">E commerce art store</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <a href='https://github.com/timmobrien/e-commerce-art-store'> <img src={require('../../assets/icons/github-icon.png')} alt='github icon'  height='50px' ></img> </a>   
          <a href='https://e-commerce-art-application.herokuapp.com/'> <img src={require('../../assets/icons/deployed-icon.jpeg')} alt='deployed icon'  height='50px' ></img> </a>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card">
        <img src={require('../../assets/screenshots/jate-screenshot.png')} alt='jate text editor homepage' class="card-img-top" ></img> 
          <div class="card-body">
          <h5 class="card-title">JATE</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <a href='https://github.com/njenkins2727/pwa-text-editor'> <img src={require('../../assets/icons/github-icon.png')} alt='github icon'  height='50px' ></img>  </a>      
          <a href='https://jate-text-editor-app.herokuapp.com/'><img src={require('../../assets/icons/deployed-icon.jpeg')} alt='deployed icon'  height='50px' ></img> </a>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card">
        <img src={require('../../assets/screenshots/note-taker.png')} alt='note taker app homepage' class="card-img-top" ></img> 
        <div class="card-body">
          <h5 class="card-title">Note Taker</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          <a href='https://github.com/njenkins2727/note-taker'> <img src={require('../../assets/icons/github-icon.png')} alt='github icon'  height='50px' ></img>  </a>       
          <a href='https://your-note-taking.herokuapp.com/'> <img src={require('../../assets/icons/deployed-icon.jpeg')} alt='deployed icon'  height='50px' ></img> </a>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card">
        <img src={require('../../assets/screenshots/reademe-generator.png')} alt='functional read.me generator' class="card-img-top" ></img> 
          <div class="card-body">
            <h5 class="card-title">README.md generator </h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <a href='https://github.com/njenkins2727/readme-generator'> <img src={require('../../assets/icons/github-icon.png')} alt='github icon'  height='50px' ></img>  </a>      
          </div>
       </div>
    </div>

    <div class="col">
      <div class="card">
        <img src={require('../../assets/screenshots/work-schedule.png')} alt='scheduler app homepage' class="card-img-top" ></img> 
        <div class="card-body">
          <h5 class="card-title">Schedule Planner</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <a href='https://github.com/njenkins2727/scheduler-planner'><img src={require('../../assets/icons/github-icon.png')} alt='github icon'  height='50px' ></img> </a>
          <a href='https://njenkins2727.github.io/scheduler-planner/'><img src={require('../../assets/icons/deployed-icon.jpeg')} alt='deployed icon'  height='50px' ></img>  </a>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card">
        <img src={require('../../assets/screenshots/password-generator.png')} alt='password generator app homepage' class="card-img-top" ></img> 
        <div class="card-body">
          <h5 class="card-title">Password Generator</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <a href='https://github.com/njenkins2727/random-password-generator'><img src={require('../../assets/icons/github-icon.png')} alt='github icon'  height='50px' ></img> </a>
          <a href='https://njenkins2727.github.io/random-password-generator/'><img src={require('../../assets/icons/deployed-icon.jpeg')} alt='deployed icon'  height='50px' ></img> </a>
        </div>
      </div>
    </div>

  </div>
  
</div>

  );
}
