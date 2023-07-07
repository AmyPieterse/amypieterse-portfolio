<template>
  <div class="row">
    <div id="heading">
        <div id="textbox">
          <p>I'M</p>
          <h1>AMY PIETERSE</h1>
          <h2 class="descriptionText"> I <span class="glitchText">DEVELOP</span> WEBSITES</h2>
        </div>
        <div id="buttons">
          <a href="/projects">Explore My Projects</a>
          <a href="/contact">Contact Me</a>
        </div>
    </div>
  </div>
    
</template>

<script>
  export default {
    name: 'HomeView',
    components: {
    }
  }
</script>

<style scoped>

.row{
  width: 100%;
  height: 100%;
  margin: 0;
  background: url("https://i.postimg.cc/zXnqbCjw/9158532-resized.png");
  background-size: cover;
  background-repeat: no-repeat;
}

#heading{
  display: flex;
  flex-direction: column;
  align-items: center;
}
#buttons{
  display: flex;
  gap: 1rem;
}
#buttons a{
  text-decoration: none;
  background-color: #000;
  width: 12.5rem;
  font-size:14px;
  text-align: center;
  color: white;
  border: 2px solid #fff;
  border-radius: 2px;
  padding: 10px 20px;
}

#textbox p{
  font-size: 50px;
  font-weight: 600;
}

#textbox h1{
  font-size: 100px;
  margin-left: -20px;
}

.descriptionText{
  font-size:50px;
  font-weight: bold;
  text-transform: uppercase;
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

@media (max-width: 768px) {
  #textbox p {
    font-size: 30px;
  }

  #textbox h1 {
    font-size: 60px;
  }

  .descriptionText {
    font-size: 30px;
  }
}

@media (max-width: 576px){
  #textbox p {
    font-size: 20px;
  }

  #textbox h1{
    font-size: 40px;
  }

  .descriptionText{
    font-size: 20px;
  }

  #buttons a{
    font-size: 12px;
    padding: 4px 10px;
    width: 9rem;
    height: 2rem;
  }
}

</style>