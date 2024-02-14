<template>
    <div class="container">
        <div class="heading">
            <h2 class="text-center">Work & Education</h2>
        </div>   
    <div class="timeline-container">
        <div class="timeline">
            <ul>
                <li v-for="work in resume" :key="work.id"  class="timeline-event" data-aos="fade-up-right" data-aos-duration="800">
                    <label class="timeline-event-icon"></label>
                    <div class="timeline-content">
                        <p  class="timeline-event-thumbnail">{{work.year}}</p>
                        <h3>{{work.place}}</h3>
                        <p>{{work.work}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        computed: {
            resume() {
            return this.$store.state.resume;
            },
        },
        mounted() {
            this.$store.dispatch("fetchResume");
        },
    } 
</script>

<style scoped>

/* *{
    border: 2px solid aqua;
} */
.container{
  min-height: 100vh;
}
.heading{
  padding: 3rem 0 5rem 0;
}
.timeline-container{
  height: 150vh;
  width: 100%;
}
.timeline {
  margin: 4em auto;
  position: relative;
  height: 100%;
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
}
.timeline::before{
  content: '';
  position: absolute;
  height: 100%;
  width: 2px;
}

.timeline ul{
    list-style: none;
    height: 100%;
    width: 100%;
    align-items: center;
}



.timeline-event {
    width: 50%;
    position: relative;
  
  &:hover {
    .timeline-event-icon {
      rotate:-45deg;
      background-color: aqua;
    }
    
    .timeline-event-thumbnail {
      box-shadow:inset 40em 0 0 0 aqua;
    }
  }
}

.timeline-event:nth-child(odd){
    float: left;
    clear: right;
} 
.timeline-event:nth-child(even){
    float: right;
    clear: left;
} 

.timeline-content {
  padding: 2em;
  position: relative;
  top: -1.875em;
  left: 4em;
  width: 80%;
}

.timeline-event-icon {
  transition: transform 0.2s ease-in;
  rotate: 45deg;
  background-color: black;
  outline: 6px solid white;
  display: block;
  margin: 0.5em 0.5em 0.5em -1.2em;
  position: absolute;
  top: 0;
  width: 1em;
  height: 1em;
}

.timeline-event-thumbnail {
  transition: box-shadow 0.5s ease-in 0.1s;
  color: white;
  font-size: 0.75em;
  background-color: black;
  box-shadow: inset 0 0 0 0em #ef795a;
  display: inline-block;
  margin-bottom: 1.2em;
  padding: 0.25em 1em 0.2em 1em;
}

</style>