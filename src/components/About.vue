<template>
    <div class="about-container">
        
        <div class="image-container">
            <img src="https://i.ibb.co/Q84GvTK/about-Profile-Image.jpg" alt="About Image" class="customImage">
        </div>
        
        <div class="summary">
            <h1 class="heading">About Me</h1>
            <p>
                I am currently expanding my skill set through the web development program at Life Choices Coding Academy.
                As I work towards becoming a full-stack web developer, I'm driven by my strong passion for learning and my commitment to doing great work. My journey in the tech world is marked by my dedication to exploring new solutions and always striving to do better.   
            </p>
            <p>
                I really enjoy math, solving problems, and I'm a big fan of logical thinking and don't like sticking to the same old ways of doing things. I believe in the power of not giving up and taking on challenging tasks. 
            </p>
            <div class="interests">
                <h4>My Interests</h4>
                <div class="interest-icons">
                    <img src="../assets/icons/electric-guitar.png" alt="guitar">
                    <img src="../assets/icons/chess.png" alt="chess">
                    <img src="../assets/icons/hiking.png" alt="hiking">
                    <img src="../assets/icons/open-book.png" alt="reading">
                    <img src="../assets/icons/space.png" alt="space">
                    <img src="../assets/icons/gardening.png" alt="gardening">
                </div>
            </div>
            <div id="downloadResume">
                <a class="btn btn-primary btn-sm" download="../assets/files/Amy_Pieterse_Resume.pdf">Download Resume</a>
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
        grid-template-columns: 1fr 2fr;
        grid-gap: 3em;
    }
    .image-container{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5.6em;
    }
    .heading{
        margin-bottom: 1em;
    } 
    .summary{
        display: flex;
        flex-direction: column;
        align-content: center;
        padding: 4em;
       
    }
   
    .interests h4{
        margin: .8em 0 1.2em 0;
    }
    
    .interest-icons{
        display: flex;
        justify-content: space-between;
        padding-right: 4em;
    }
    .interests img{
        width: 28px;
    }
    .summary p{
        text-wrap: balance;
    }
    .customImage{
        width: 375px;
        height : auto;
        border: 1px solid black;
        box-shadow: -10px 10px black;
    }

    #downloadResume{
        width: 100%;
        margin-top: 2em;
        display: flex;
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