<template>
    <div class="container">   
    <div class="row">
        <div class="heading">
            <h2 class="text-center">Work & Education</h2>
        </div>
        <div class="timeline">
            <ul>
                <li v-for="work in resume" :key="work.id" class="timelineItem" data-aos="fade-up-right" data-aos-duration="800">
                    <div class="timelineCard">
                        <div class="timelineDate">{{work.year}}</div>
                        <div class="timelineContent">
                            <h3>{{work.place}}</h3>
                            <p>{{work.work}}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="row">
        <div class="mb-4 mt-5">
            <h3 class="text-center">Skills</h3>
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
.timeline{
    border: 2px solid aqua;
}
.timeline ul li{
    margin: 5em auto;
    border: 2px solid black;
    width: 30rem;
    min-height: 10rem;
    text-align: center;
    padding-top: auto;
    padding-bottom: auto;
    color: black;
}
.timelineContent{
    margin-top: 1.5em;
}

</style>