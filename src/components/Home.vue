<template>
    <div class="landingContainer">
        <div id="textbox">
          <h1>Hi,</h1>
          <h1>I'm Amy Pieterse</h1>
          <h1 class="descriptionText"><span class="">Aspiring</span> Full-Stack Web Developer</h1>
        </div>
        <img src="https://i.ibb.co/x5pW0b6/professional-Image.png" alt="profile image">
    </div>
      
  </template>
  
  <script>
   
  </script>
  
  <style scoped>

  .landingContainer{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 10rem;
  }
  .landingContainer img{
    border: 1px solid black;
    box-shadow: 10px 10px black;
    width: 360px;
  }
  
  
  #heading{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    width: 1200px;
    color: var(--primary-color);
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
    font-weight: 900;
  }
  
  .descriptionText{
    font-size:40px!important;
    font-weight: bold;
    color: var(--accent-color-1);
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