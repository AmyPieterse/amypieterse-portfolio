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
.heading{
    padding: 3em 0;
}
.timeline-container{
    min-height: 100vh;
    width: 100%;
}

.timeline{
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
}

.timeline ul{
    list-style: none;
}

.timeline li{
    position: relative;
    background-color: pink;
    padding: 10px;
    margin-bottom: 20px;
    width: 50%;
}
.timeline li:nth-child(odd){
    float: left;
    clear: right;
}
.timeline li:nth-child(even){
    float: right;
    clear: left;
}
.timeline li:last-child{
    margin-bottom: 0;
}

</style>