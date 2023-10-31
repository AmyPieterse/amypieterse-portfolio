<template>
    <div class="landingContainer">
      <div id="heading">
          <div id="textbox">
            <h1>Hi,</h1>
            <h1>I'm Amy Pieterse</h1>
            <h2 class="descriptionText"> An <span class="">Aspiring</span> Fullstack Web Developer</h2>
          </div>
          <div id="contactButton">
            <a href="/contact">Download Resume</a>
          </div>
      </div>
      <div>

      </div>
    </div>
      
  </template>
  
  <script>
    export default {
    }
  </script>
  
  <style scoped>
  .landingContainer{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  #heading{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    width: 1200px;
    color: white;
  }

  #heading div{
    padding: 1rem;
  }

  #contactButton a{
    text-decoration: none;
    background-color: var(--accent-color-1);
    font-size:16px;
    font-weight: 600;
    text-align: center;
    color: white;
    border: 3px solid white;
    border-radius: 6px;
    padding: 14px 20px;
    margin-left: 1rem;
  }
  
  #textbox h1{
    font-size: 68px;
    font-weight: 600;
  }
  
  .descriptionText{
    font-size:35px;
    font-weight: bold;
    color: var(--accent-color-1);
    font-style: italic;
  }
  
  .glitchText{
    opacity:1;
    animation: glitch-animation 2s infinite linear alternate-reverse;
    animation-delay: 2s;
  } 
  
  @keyframes glitch-animation {
    0%,100%{
      text-shadow: 
          0.08em 0 0 rgba(255,0,0,0.75),
          -0.08em -0.025em 0 rgba(0,255,0,0.75),
          -0.025em 0.08em 0 rgba(0,0,255,0.75); 
    }
    15%{
      text-shadow: 
      -0.08em -0.025em 0 rgba(255,0,0,0.75),
      0.025em 0.025em 0 rgba(0,255,0,0.75),
      -0.08em -0.08em 0 rgba(0,0,255,0.75); 
    }
    50%{ 
      text-shadow: 
      0.025em 0.09em 0 rgba(255,0,0,0.75),
      0.09em 0 0 rgba(0,255,0,0.75),
      0.025em 0.09em 0 rgba(0,0,255,0.75);
    }
  }
  @media (max-width: 992px) {
  
    #textbox h1 {
      font-size: 55px;
    }
  
    .descriptionText {
      font-size: 35px;
    }
  }
  
  @media (max-width: 768px) {
    #textbox h1 {
      font-size: 50px;
    }
  
    .descriptionText {
      font-size: 30px;
    }
    #contactButton a{
    font-size:14px;
    padding: 12px 18px;
  }
  }
  
  @media (max-width: 576px){
    #textbox h1{
      font-size: 35px;
    }
    .descriptionText{
      font-size: 20px;
    }
    #contactButton a{
    font-size:14px;
    padding: 10px 16px;
  }
  }
  
  @media (max-width: 360px){
    #textbox h1{
      font-size: 25px;
    }
    .descriptionText{
      font-size: 18px;
    }
    #contactButton a{
    font-size:14px;
    padding: 8px 12px;
  }
  }
  
  </style>