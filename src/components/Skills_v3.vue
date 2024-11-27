<template>
    <div  class="skills-container" id="skill">
      <h1 class="heading">My Skills</h1>
      <ul class="cards">
  <li>
    <div class="card">
      <img src="../assets/images/pexels-picjumbocom-196645.jpg" class="card-image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <div class="card__header-text">
            <h3 class="card__title">Frontend</h3>            
          </div>
        </div>
        <ul class="card-description">
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Vue.js</li>
          <li>WordPress</li>
          <li>WooCommerce</li>
        </ul>
      </div>
    </div>      
  </li>
  <li>
    <div class="card">
      <img src="../assets/images/pexels-luis-gomes-546819.jpg" class="card-image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <div class="card__header-text">
            <h3 class="card__title">Backend</h3>
          </div>
        </div>
        <ul class="card-description">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>JWT</li>
          <li>RESTful APIs</li>
          <li>MySQL</li>
          <li>Python</li>
          <li>Numpy</li>
          <li>Pandas</li>
          <li>SQL</li>
        </ul>
      </div>
    </div>
  </li>
  <li>
    <div class="card">
      <img src="../assets/images/github-pages.jpg" class="card-image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <div class="card__header-text">
            <h3 class="card__title">Other</h3>
          </div>
        </div>
        <ul class="card-description">
          <li>Git</li>
          <li>Github</li>
          <li>SEO</li>
          <li>Agile</li>
          <li>Figma</li>
          <li>Networking</li>
          <li>Cybersecurity</li>
        </ul>
      </div>
    </div>
  </li>  
</ul> 
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.skills-container{
  padding: 5rem 10rem;
  min-height: 100vh;

}

.heading{
    text-align: center;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  height: 20rem;
  gap: 2rem;
  margin: 4rem 5vw;
  padding: 0;
  list-style-type: none;
}

.card {
  position: relative;
  display: block;
  height: 100%;  
  background-color: black;
  color: var(--primary-color);
  border-radius: calc(40 * 1px); 
  border: 1px solid var(--secondary-color-2);
  overflow: hidden;
  text-decoration: none;
}
.card-image {      
  object-fit: contain;
  object-position: center;
  width:  350px;
  height: 300px;
  object-fit: cover
}
.card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;      
  border-radius: calc(40 * 1px);    
  background-color: var(--secondary-color-2);      
  transform: translateY(100%);
  transition: .2s ease-in-out;
}

.card:hover .card__overlay {
  transform: translateY(0);
}

.card__header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 1em;
  border-radius: calc(40 * 1px) 0 0 0;    
  background-color: var(--secondary-color-2);
  transform: translateY(-100%);
  transition: .2s ease-in-out;
}

.card__arc {
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 100%;
  right: 0;      
  z-index: 1;
}

.card__arc path {
  fill: var(--secondary-color-2);
  d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
}       

.card:hover .card__header {
  transform: translateY(0);
}

.card__thumb {
  flex-shrink: 0;
  width: 50px;
  height: 50px;      
  border-radius: 50%;      
}

.card__title {
  font-size: 20px;
  margin: 0 0 .3em;
  font-weight: 500;
  color: var(--primary-color);
}

.card__tagline {
  display: block;
  margin: 1em 0;
  font-family: "MockFlowFont";  
  font-size: .8em; 
  color: var(--accent-color-1);  
}

.card-description {
  padding: 0 2em 2em;
  font-size: 14px;
  margin: 0; 
  background-color: var(--secondary-color-2); 
  display: -webkit-box;
  color: var(--primary-color);
  column-count: 2;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}  

@media (max-width: 990px) {
  .skills-container{
    padding: 3rem 1.5rem;
    min-height: 160vh;
    width: 100%;
  }
  .cards{
    margin: 3em 0 0 0;
  }
  .cards li{
    height: 16.5rem;
  }
  .card-description {
  height: 10rem;
  column-count: 2;
}  
.card-description li {
  height: min-content;
} 
}

</style>