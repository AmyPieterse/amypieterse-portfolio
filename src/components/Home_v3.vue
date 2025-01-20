<template>
    <div class="landingContainer">
        <div id="textbox">
          <h1>Hi,</h1>
          <h1>I'm Amy Pieterse</h1>
          <h1 class="descriptionText">Full-Stack Web Developer</h1>
          <div id="downloadResume">
                <a class="" type="button" href="https://drive.google.com/uc?export=download&id=1mvSQIXwtRIT9L8TbTTBeJg_Wb0CgpiL2" target="_blank">Download CV</a>
            </div>
        </div>
        <img src="https://i.ibb.co/vjMRqJ2/Migal-VANAS-Photography-8-K-IMG-4000.jpg" alt="profile image">
    </div>
      
  </template>
  
  <script>
   
  </script>
  
  <style scoped>
 
  #downloadResume{
        width: 100%;
        margin-top: 2em;
        display: flex;
    }
    
    #downloadResume a{
        text-decoration: none;
        background-color: #16d1e2;
        color: white;
        border: 2px solid #fff;
        border-radius: 6px;
        padding: 10px 20px;
    }


  .landingContainer{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 10rem;
  }
  .landingContainer img{
    border: 1px solid #16d1e2;
    box-shadow: 10px 10px #16d1e2;
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
    border-radius: 10px;
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
      font-size: 20px!important;
    }
    #contactButton a{
    font-size:14px;
    padding: 12px 18px;
  } 

  .landingContainer{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4em;
    padding-inline: 0;
  }
  .landingContainer img{
    width: 275px;
  }

  }
  
  @media (max-width: 576px){
    .landingContainer{
      display: flex;
    }
    
    #textbox h1{
      font-size: 35px;
    }
    .descriptionText{
      font-size: 20px;
    }
    .landingContainer img{
    width: 200px;
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