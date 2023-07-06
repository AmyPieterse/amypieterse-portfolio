<template>
  <div class="row">
    <div id="heading">
      <div id="textbox">
        <p>I'M</p>
        <h1>AMY PIETERSE</h1>
        <h2 class="descriptionText"> I <span class="glitchText">DEVELOP</span> WEBSITES</h2>
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
  background: url("@/assets/images/9158532.png");
  background-size: cover;
  background-repeat: no-repeat;
  
}

#heading{
  display: flex;
  align-self: center;
  justify-content: center;
}

#textbox p{
  font-size: 50px;
  font-weight: 600;
}

#textbox h1{
  font-size: 120px;
  margin-left: -30px;
}

.descriptionText{
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
}

.glitchText{
  opacity:1;
  animation: glitch-animation 2s infinite linear alternate-reverse;
  animation-delay: 2s;
} 

@keyframes glitch-animation {
  0%{
    text-shadow: 
        0.05em 0 0 rgba(255,0,0,0.75),
        -0.05em -0.025em 0 rgba(0,255,0,0.75),
        -0.025em 0.05em 0 rgba(0,0,255,0.75); 
  }
  15%{
    text-shadow: 
    -0.05em -0.025em 0 rgba(255,0,0,0.75),
    0.025em 0.025em 0 rgba(0,255,0,0.75),
    -0.05em -0.05em 0 rgba(0,0,255,0.75); 
  }
  50%{ 
    text-shadow: 
    0.025em 0.05em 0 rgba(255,0,0,0.75),
    0.05em 0 0 rgba(0,255,0,0.75),
    0.025em 0.05em 0 rgba(0,0,255,0.75);
  }
  100%{ 
    
  }
}

</style>