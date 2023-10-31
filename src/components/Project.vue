<template>
   <div class="container">
        <div class="m-3">
            <h1 class="heading text-center text-uppercase">Recent Work</h1>
        </div>
        <div id="projectContainer">
           <div data-aos="zoom-in" class="projectCard mb-md-4" v-for="(project) in projects" :key="index">
                    <div class="websiteScreenshot">
                        <img :src="project.image" class="card-img-top imageStyle" alt="Project Image" loading="lazy">
                    </div>          
                    <div class="websiteDetails">
                       <h3>{{project.title}}</h3>
                       <div class="descriptionContainer">
                        <p id="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quibusdam, consequuntur in est molestias dolorem tenetur quam fugiat quia voluptatum ad minus dolores architecto? Totam omnis dolor magnam similique quo. Left</p>
                       </div>
                       <p>{{project.technologies}}</p>
                       <div class="buttons">
                            <a id="sectionButton" href="">See Code</a>
                            <a id="sectionButton" href="">Visit Live Site</a>
                       </div>
                    </div>
           </div>
        </div>
   </div>
</template>

<script>
    export default {
        computed:{
            projects(){
                return this.$store.state.projects
            }
        },
        mounted(){
            this.$store.dispatch('fetchProjects')
        }
    }
</script>

<style scoped>
   
  
    #projectContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .heading{
        font-weight: 600;
        color: rgb(255, 255, 255);
    }
    .projectCard{
        display: grid;
        /* transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s; */
        max-width: 1200px;
        width: 100%;
        align-items: center;
        padding: 3.5em;
        margin: 1em;
    }
    .projectCard:nth-child(odd){
        grid-template-columns: 60% 40%;
    }
    .projectCard:nth-child(even){
        grid-template-columns: 60% 40%;
        direction: rtl;
    }
    .projectCard:nth-child(odd) .descriptionContainer{
        position: relative;
        z-index: 3;
        margin-left: -150px;
        height: max-content;
    }
    .projectCard:nth-child(even) .descriptionContainer{
        position: relative;
        z-index: 3;
        margin-right: -150px;
        height: max-content;
    }
    .projectCard:nth-child(odd) .websiteDetails{
        text-align: right;
    }
    .projectCard:nth-child(even) .websiteDetails{
        text-align: left;
    }
    .projectCard:nth-child(odd) .websiteScreenshot{
        box-shadow: -4px 2px 6px 1px rgb(255, 255, 255, 0.4);
    }
    .projectCard:nth-child(even) .websiteScreenshot{
        box-shadow: 4px 2px 6px 1px rgb(255, 255, 255, 0.4);
    }
    .websiteScreenshot{
        max-width: 600px;
        background-color: var(--accent-color-1);
        z-index: 1;
        filter: grayscale(100%) contrast(1) brightness(90%);
    }
    .imageStyle{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: static;
    }
    .descriptionContainer{
        z-index: 2;
        background-color: var(--secondary-color-1);
        border-radius: 6px;
        padding: 1em;
    }

    #sectionButton{
        text-decoration: none;
        background-color: var(--accent-color-1);
        font-size:16px;
        font-weight: 600;
        text-align: center;
        color: white;
        border: 3px solid white;
        border-radius: 6px;
        padding: 10px 16px;
        margin-left: 1rem;
    }

    @media (max-width: 1200px) {
      
    }   
    @media (max-width: 479px) {
        .websiteScreenshot{
            width: 100%;
            height: 100%;
            box-shadow: -2px 2px 2px 2px rgb(255, 255, 255, 0.4)!important;
        } 
        .projectCard{
            display: flex;
            flex-direction: column;
            max-width: 800px;
            width: 100%;
            padding: 1em;
        }
        .websiteDetails{
            text-align: center !important;;
        }
        .websiteDetails h3{
            font-size: 22px;
            margin: 24px 0px 18px
        }
        .websiteDetails p{
            font-size: 16px;
            margin: 6px 0px 12px
        }
        .projectCard div{
           direction: ltr;
        }
        .projectCard:nth-child(odd) .descriptionContainer{
            margin-left: 0px;
            height: max-content;
        }
        .projectCard:nth-child(even) .descriptionContainer{
            margin-right: 0px;
            height: max-content;
        }
        #description{
            font-size: 14px;
        }
        #sectionButton{
            font-size:12px;
            font-weight: 500;
            padding: 8px 14px;
            margin: 0;
        }
        .buttons{
            display: flex;
            justify-content: center;
            gap: 2rem;
        }
       
}



</style>
