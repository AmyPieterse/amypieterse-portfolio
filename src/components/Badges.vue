<template>
    <div class="badges-container">
        <h3>Badges/Certificates</h3>
        <div class="certificates">
            <figure class="ibm-figure">
                <img class="ibm" src="../assets/images/IBM_logo.svg.png" alt="">
                <figcaption>Python for Data-Science, AI and Development</figcaption>
            </figure>
        </div>
        <div class="badge">
            <figure>
                <img class="cisco" src="../assets/images/networking-basics.png" alt="">
                <figcaption>Networking Basics</figcaption>
            </figure>
            <figure>
                <img class="cisco" src="../assets/images/operating-systems-basics.png" alt="">
                <figcaption>Operating System Basics</figcaption>
            </figure>
            <figure>
                <img class="cisco" src="../assets/images/junior-cybersecurity-analyst-career-path.1.png" alt="">
                <figcaption>Networking Essentials</figcaption>
            </figure>
            
        </div>
    </div>
  </template>
  
  <script>
   
  </script>
  
  <style scoped>
    figure{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .badges-container h3{
        text-align: center;
    }
    .badge, .certificates{
        display: flex;
        justify-content: center;
        margin-top: 3em;
        gap: 2em;
    }
    .badge .cisco{
        width: auto;
        height: 150px;
    }
    .ibm{
        width: 150px;
        height: auto;
    }
    .badge figcaption{
        margin-top: 1em;
        color: var(--primary-color);
        font-size: 14px;
        font-weight: 600;
    }
    .certificates figcaption{
        margin-top: 1em;
        color: var(--primary-color);
        font-size: 14px;
        font-weight: 600;
    }
    
  </style>