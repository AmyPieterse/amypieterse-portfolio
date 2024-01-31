<template>
  <div class="wrapper">
     <div class="grid1">
      <h5>Kgodisho Lebopa - Peer</h5>
      <p>"I have been impressed by Amy's commitment to learning and growing as a coder. She has a natural talent for problem-solving and has already demonstrated proficiency in the work she does. I highly recommend Amy to any organization seeking a motivated developer."</p>
     </div>
     <div class="grid2">
      <h5>Kamvelihle Sikalana - Peer</h5>
      <p>"Amy is proficient in HTML, CSS and JavaScript. She is reliable and a team player in group related projects, she has a hunger to learn more"</p>
     </div>
     <div class="grid3">
      <h5>Seth Kallis - Mentor</h5>
      <p>"Amy is dedicated, hard working and a team player. She works well with her peers and performs well on her projects. She has a good understanding of web development and would be a valuable addition to any team that is lucky enough to have her."</p>  
     </div>
     <div class="grid4">
      <h5>Cody Kader - Peer</h5>
      <p>"Amy works well in both teamwork and individual settings. She has strong skills in HTML, CSS and Javascript and she's always willingly to help her peers.</p>    
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
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(250px, auto);
  grid-gap: 10px;
}

.wrapper div{
  background-color: var(--tertiary-color-1);
  color: var(--text-color);
  padding: 1em;
  border-radius: 10px;
}

.wrapper p{
  font-size: 14px;
}

.grid1{
  grid-column: 1/5;
}

.grid2{
  grid-column: 5/7;
}

.grid3{
  grid-column: 1/4;
}
.grid4{
  grid-column: 4/7;
}
</style>