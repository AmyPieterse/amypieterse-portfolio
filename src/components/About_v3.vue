<template>
    <div class="about-container" id="about">
        <div class="image-container">
            <img src="https://i.ibb.co/Q84GvTK/about-Profile-Image.jpg" alt="About Image" class="customImage">
        </div>
        
        <div class="summary">
            <h1 class="heading">About Me</h1>
            <div class="paragraphs">
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
                <p><span>Date of birth:</span> 19/07/1999</p>
                <p><span>Address:</span> Ravensmead, Cape Town</p>
                <p><span>Languages:</span> English & Afrikaans</p>
                <p><span>Contact:</span> 067 000 4602</p>
            </div>
            </div>
            <div class="interests">
                <h4>My Interests</h4>
                <div class="interest-icons">
                    <img src="../assets/icons/electric-guitar.png" alt="guitar" data-toggle="modal" data-target="#Modal">
                    <img src="../assets/icons/chess.png" alt="chess">
                    <img src="../assets/icons/hiking.png" alt="hiking">
                    <img src="../assets/icons/open-book.png" alt="reading">
                    <img src="../assets/icons/space.png" alt="space">
                    <img src="../assets/icons/gardening.png" alt="gardening">
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
   
    .about-container{
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap: 3em;
        padding: 3em 10rem;
        background-color: rgba(0, 0, 255, 0.03);
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
    .paragraphs{
        padding: .8em .8em .8em 0;
        background-image: linear-gradient(
            45deg,
            #16d1e2,
            #41def0,
            #97f6fb,
        );
    }
    .interests{
        margin:1em
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
        margin-top: 3em;
    }
    .additional-info span{
        font-weight: bold;
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
        border: 1px solid var(--accent-color-4);
        box-shadow: -10px 10px var(--accent-color-4);
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
        grid-gap: 0;
        padding:3em 1em;
    }
    .customImage{
        box-shadow: none;
        border: none;
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
    .summary{
        margin-top: 2em;
    }
    .about-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .paragraphs{
        padding: 0;
    }
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