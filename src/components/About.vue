<template>
    <div class="about-container">
        <h1 class="heading">About Me</h1>
        
        <div class="image-container">
            <img src="https://i.ibb.co/Q84GvTK/about-Profile-Image.jpg" alt="About Image" class="customImage">
        </div>
        
        <div class="summary">
            <p>
                I am currently expanding my skill set through the web development program at Life Choices Coding Academy.
                As I work towards becoming a full-stack web developer, I'm driven by my strong passion for learning and my commitment to doing great work. My journey in the tech world is marked by my dedication to exploring new solutions and always striving to do better.   
            </p>
            <p>
                I really enjoy math, solving problems, and creating augmented reality experiences. I'm also a big fan of logical thinking and don't like sticking to the same old ways of doing things. I believe in the power of not giving up and taking on challenging tasks. 
            </p>
            <p>
                Furthermore, I have a passion for playing the guitar, challenging opponents in chess matches, and exploring new experiences, including trying out different new foods.
            </p>
            <div id="downloadResume">
                <a href="https://drive.google.com/uc?export=download&id=1cMUB9dz3hHzdm4LQea8gmmIo733-msVD" class="btn btn-primary btn-sm">Download Resume</a>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
    
    }
</script>

<style scoped>
    .about-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
    .heading{
        grid-column: span 2;
        margin-bottom: 5rem;
    } 
    .summary{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        padding-right: 3em;
        padding-top: 3em;
    }

    .image-container{
        display: flex;
        justify-content: center;
        padding-left: 3em;
        align-items: center;
    }
  
    .customImage{
        width: 375px;
        height : auto;
    }

    #downloadResume{
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 2em;
    }
    
    #downloadResume a{
        text-decoration: none;
        background-color: black;
        color: white;
        border: 2px solid #fff;
        border-radius: 6px;
        padding: 10px 20px;
    }

@media (max-width: 1024px) {
    .customSize{
        width: 90%;
    }
    .customImage{
        width: 375px;
        height : auto;
    }
}
@media (max-width: 990px) {
    #aboutContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
    }
    
    #imageContainer{
        padding: 0;
        justify-content: center !important;
        align-items: center;
    }
    #summary{
        width: 80%;
        align-items: center;
        justify-content: center;
    }
    .customSize{
        text-align: center;
        padding-top: 0;
    }
    .customImage {
        width: 300px;
        height: auto;
    }

}

@media (max-width: 768px) {
    .customImage {
        width: 270px;
        height: auto;
    }
    #summary{
        width: 95%;
    }

    #downloadResume {
        text-align: center;
    }
}

@media (max-width: 576px) {

    #downloadResume a {
    font-size: var(--fs-400);
    padding: 8px 16px;
    }
    .customImage{
        width: 200px;
        height : auto;
    }
    .customSize p{
        font-size: 14px;
    }

}
</style>