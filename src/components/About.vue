<template>
    <div class="about-container">
        
        <div class="image-container">
            <img src="https://i.ibb.co/Q84GvTK/about-Profile-Image.jpg" alt="About Image" class="customImage">
        </div>
        
        <div class="summary">
            <h1 class="heading" id="about">About Me</h1>
            <p>
                I am currently expanding my skill set through the web development program at Life Choices Coding Academy.
                As I work towards becoming a full-stack web developer, I'm driven by my strong passion for learning and my commitment to doing great work. 
            </p>
            <p>
                My journey in the tech world is marked by my dedication to exploring new solutions and always striving to do better.   
            </p>
            <p>
                I really enjoy math, solving problems, and I'm a big fan of logical thinking and don't like sticking to the same old ways of doing things. I believe in the power of not giving up and taking on challenging tasks. 
            </p>
            <div class="additional-info">
                <p>Date of birth: 19/07/1999</p>
                <p>Address: Ravensmead, Cape Town</p>
                <p>Languages: English & Afrikaans</p>
                <p>Contact: 067 000 4602</p>
            </div>
            <div class="interests">
                <h4>My Interests</h4>
                <div class="interest-icons">
                    <img src="../assets/icons/electric-guitar.png" alt="guitar" data-toggle="modal" data-target="#Modal">
                    <div class="modal" tabindex="-1" role="dialog" aria-labelledby="Modal" id="Modal">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <p>Modal body text goes here.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <img src="../assets/icons/chess.png" alt="chess">
                    <div class="modal" tabindex="-1" role="dialog">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <p>Modal body text goes here.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <img src="../assets/icons/hiking.png" alt="hiking">
                    <img src="../assets/icons/open-book.png" alt="reading">
                    <img src="../assets/icons/space.png" alt="space">
                    <img src="../assets/icons/gardening.png" alt="gardening">
                </div>
            </div>
            <div id="downloadResume">
                <a class="" type="button" href="https://drive.google.com/uc?export=download&id=1yWb7Zln90IHLI-STHk4Jv-k5dGHdxDYW" target="_blank">Download CV</a>
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
        max-width: 100%!important;
    }
    .heading{
        margin-bottom: 1.2em;
    } 
    .summary{
        display: flex;
        flex-direction: column;
        align-content: center;
        padding: 4em 2.8em;
       
    }
   
    .interests h4{
        margin: .8em 0 1.2em 0;
    }
    
    .interest-icons{
        display: flex;
        justify-content: space-between;
        padding-right: 4em;
    }

    .interest-icons img{
        cursor: pointer;
    }

    .additional-info{
        column-count: 2;
        margin-top: 1em;
        background-color: var(--accent-color-1);
        color: var(--secondary-color-2);
        padding: 1em 0.8em;
        border-radius: 10px;
    }
    .additional-info p a{
        text-decoration: none;
        color: var(--secondary-color-2);
        font-weight: 600;
    }

    .interests img{
        width: 28px;
    }
    .summary p{
        line-height: 1.5;
        word-wrap: normal;
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
        padding-left: 1em;
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
    .customImage{
        width: 375px;
        height : auto;
    }
}
@media (max-width: 990px) {
    .about-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    .image-container{
        display: flex;
        justify-content: center;
        margin: 0;
    }
    .summary{
        text-align: center;
        align-items: center;
        justify-content: center;
        padding: 0;
    }
    .customImage {
        width: 250px;
        height: auto;
    }

    .interests{
        margin-bottom: 2em;
    }

    .interests h4{
       text-align: center;
       margin: .5em 0!important;
    }

    div .interest-icons{
        padding:0;
    }
    .interest-icons img{
        margin: 0 10px;
    }

    .interests h4 {
    margin: 0; 
    }
    .additional-info{
        column-count: 1;
    }
}

@media (max-width: 768px) {
    
    #downloadResume {
        text-align: center;
    }

    #downloadResume{
        margin-top: 1em;
        justify-content: center;
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

}
</style>