<template>
  <div class="wrapper">
     <div class="grids grid1">
      <div>
        <img src="https://i.ibb.co/23rV8JW/Kgodisho.jpg" alt="">
        <div class="grid-heading">
          <h5>Kgodisho Lebopa</h5>
          <h6>Peer</h6>
        </div>
      </div>
      
      <p>"I have been impressed by Amy's commitment to learning and growing as a coder. She has a natural talent for problem-solving and has already demonstrated proficiency in the work she does. I highly recommend Amy to any organization seeking a motivated developer."</p>
     </div>
     <div class="grids grid2">
      <div>
        <img src="https://i.ibb.co/K5JwVyS/Kamva.jpg" alt="Kamva">
        <div class="grid-heading">
          <h5>Kamvelihle Sikalana</h5>
          <h6>Peer</h6>
        </div>
      </div>
      <p>"Amy is proficient in HTML, CSS and JavaScript. She is reliable and a team player in group related projects, she has a hunger to learn more"</p>
     </div>
     <div class="grids grid3">
      <div>
        <img src="https://i.ibb.co/FBf6P79/54-nashville-james-pp239qc98r7xx39cycmv6fuoze5d1prza9yjize41y-1.webp" alt="Nash">
        <div class="grid-heading">
          <h5>Nashville James</h5>
          <h6>Team Lead</h6>
        </div>
      </div>
      <p>"Amy is incredibly hardworking, always striving to deepen her understanding of web development. Her dedication and eagerness to learn make her an undeniable asset to any company she joins."</p>  
     </div>
     <div class="grids grid4">
      <div>
        <img src="https://i.ibb.co/hLLwZfD/Codi.jpg" alt="Codi">
        <div class="grid-heading">
          <h5>Cody Kader</h5>
          <h6>Peer</h6>
        </div>
      </div>
      <p>"Amy works well in both teamwork and individual settings. She has strong skills in HTML, CSS and Javascript and she's always willingly to help her peers."</p>    
     </div>
  </div>
</template>


<script>
export default {

};
</script>

<style scoped>

.wrapper{
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: minmax(250px, auto);
  grid-gap: 10px;
}

.wrapper div{
  background-color: #1293ab;
  color: var(--text-color);
  padding: 1em;
  border-radius: 10px;
}
.grids div{
  display: flex;
 
  padding: 0;
}
.grids h4{
  font-size: 14;
}
.grid-heading{
  display: flex;
  flex-direction: column;
  margin-left: 1em;
}
.grids img{
  border-radius: 100%;
  width: 50px;
  height: 50px;
  object-fit: cover; 
  object-position: top;
}

.wrapper p{
  font-size: 14px;
}

.grid1{
  grid-column: 1/5;
}

.grid2{
  grid-column: 5/9;
}

.grid3{
  grid-column: 1/6;
}
.grid4{
  grid-column: 6/9;
}

@media (max-width: 990px) {
  .wrapper{
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3em 1em;
  }
 
}
</style>