<template>
    <div class="container">
        <div class="heading">
            <h2 class="text-center">Work & Education</h2>
        </div>   
    <div class="timeline-container">
        <div class="timeline">
            <ul>
                <li v-for="work in resume" :key="work.id"  class="timeline-event" data-aos="zoom-out-up">
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
.container{
    padding-top: 3em;
}
.heading{
    padding: 3em 0;
}
.timeline-container{
    min-height: 160vh;
    width: 100%;
}

.timeline{
    width: 80%;
    height: 150vh;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
}
.timeline::before{
    content: '';
    position: absolute;
    background-color: black;
    height: 100%;
    width: 2px;
    left: 6%;
    transform: translateX(-50%);
    color: black;
}

.timeline ul{
    list-style: none;
}

.timeline ul li{
    position: relative;
    padding: 10px;
    border: 2px solid black;
    border-radius: 10px;
    margin-bottom: 20px;
    width: 100%;
}
.timeline li:last-child{
    margin-bottom: 0;
}
@media screen and (max-width: 900px) {
    .timeline{
    height: 145vh;
    }
}

@media screen and (min-width: 768px) {
    .timeline::before{
        content: '';
        position: absolute;
        height: 100%!important;
        width: 2px;
        color: black!important;
        left: 50%;
        transform: translateX(-50%);
    }
    .timeline ul li{
        width: 50%;
        margin-bottom: 50px;
        position: relative;
    }
    .timeline li:nth-child(odd){
    float: left;
    clear: right;
    transform: translateX(-30px);
}
.timeline li:nth-child(even){
    float: right;
    clear: left;
  
}
}


</style>