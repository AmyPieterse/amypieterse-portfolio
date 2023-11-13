<template>
    <div>
      <h3 class="text-center mb-5">My Skills</h3>
      <div id="container">
        <div class="row d-flex justify-content-center mb-3 skillsContainer">
            <div class="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
                <img src="https://i.postimg.cc/hPWbYWfv/html.png" alt="" class="img-fluid custom-image">
                <h5>HTML</h5>
                <div>Advanced</div>
            </div>
            <div class="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
                <img src="https://i.postimg.cc/nzNYZN2d/css.png" alt="" class="img-fluid custom-image">
                <h5>CSS</h5>
                <div>Advanced</div>
            </div>
            <div class="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
                <img src="https://i.postimg.cc/pLPQ2fQt/javascript.png" alt="" class="img-fluid custom-image">
                <h5>JavaScript</h5>
                <div>Intermediate</div>
            </div>
            <div class="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
                <img src="https://i.postimg.cc/zftF2ygY/bootstrap.png" alt="" class="img-fluid custom-image">
                <h5>Bootstrap</h5>
                <div>Intermediate</div>
            </div>
            <div class="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
                <img src="https://i.postimg.cc/8cLq82MG/github.png" alt="" class="img-fluid custom-image">
                <h5>Github</h5>
                <div>Intermediate</div>
            </div>
            <div class="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
                <img src="https://i.postimg.cc/MHR0Gtrz/Git.png" alt="" class="img-fluid custom-image">
                <h5>Git</h5>
                <div>Intermediate</div>
            </div>
            <div class="col-md-6  d-flex flex-column justify-content-center align-items-center">
                <img src="https://i.postimg.cc/YC86jv8L/vue.png" alt="" class="img-fluid custom-image">
                <h5>Vue</h5>
                <div>Beginner</div>
            </div>
        </div> 
      </div>  
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.skillsContainer{
  background-color: var(--accent-color-1);
  width: max-content;
  padding: 1rem;
}
#container{
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-image{
    width: 100px;
}

.timeline::before{
    content:"";
    position:absolute;
    height: 100%;
    width: 2px;
    background-color: black;
    left: 50%;
}
.timeline{
    width:80%;
    height:auto;
    max-width: 850px;
    margin:0 auto;
    position:relative;
}
.timelineItem::after{
    content:"";
    position:absolute;
    height: 20px;
    width: 20px;
    background-color: black;
    border-radius: 50%;
    top:0%;
}
.timelineItem:nth-child(even):after{
    right:-50px;
    transform: translate(50%, -50%);
}
.timeline ul{
    list-style: none;
    margin: 0;
    padding: 0;
} 
.timelineItem{
    margin-bottom: 65px;
}
.timelineItem:nth-child(even){
    float: left;
    clear: right;
    transform: translateX(-20px);
}
.timelineItem:nth-child(odd){
    float: right;
    clear: left;
    transform: translateX(20px);
}
.timelineItem:nth-child(odd)::after{
    left:-48px;
    transform: translate(-50%, -50%);
}
.timelineCard {
    background-color: #42b983;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    width: 24rem;
    height: 10rem;
    padding: 20px;
}

.timelineDate {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 5px;
    text-align: center;
}

.timelineContent {
    text-align: center;
}

.timelineContent h3{
    font-size: 20px;
    font-weight: bold;
}

@media screen and (width<1200px) {
    
}
@media screen and (width<1000px){
    
}
@media screen and (width<756px) {
    .timelineItem::after {
    display: none;
    }


.timelineContent h3{
    font-size: 16px;
}
.timelineCard {
    width: 100%;
    max-width: 400px;
    padding: 10px;
    }

.timelineItem{
    margin-bottom: 20px;
}

.custom-image {
    width: 80px;
    }

.timelineItem:nth-child(even){
    float: none;
}
.timelineItem:nth-child(odd){
    float: none;
}
.timelineItem:nth-child(odd)::after{
    left:0;
    transform: translate(50%, 50%);
}

}

</style>