<template>
<div>   
    <div>
    <h2 class="text-center">Work/Education</h2>
    </div>
    <div class="timeline-item">
        <div class="timeline-card">
            <div class="timeline-date">Work</div>
            <div class="timeline-content">
                <h3>2018</h3>
                <p>Worked as a waitress</p>
            </div>
        </div>
    </div>
    <div class="timeline-item">
        <div class="timeline-card">
            <div class="timeline-date">High School</div>
            <div class="timeline-content">
                <h3>2017</h3>
                <p>Matriculated at Cape Academy of Mathematics, Science and Technology</p>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <h3>Skills</h3>
    <div></div>
</div>

    
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.timeline-item {
    position: relative;
    padding: 20px;
    display: flex;
    align-items: flex-start;
}

.timeline-card {
    background-color: #3498db;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    width: 20rem;
    height: 8rem;
}

.timeline-date {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
    text-align: center;
}

.timeline-content {
    margin-top: 5px;
    text-align: center;
}

.timeline-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: #3498db;
    margin-left: -1px;
}

.timeline-item:nth-child(odd) {
    justify-content: flex-end;
}

.timeline-item:nth-child(even) {
    justify-content: flex-start;
}

.timeline-item:nth-child(odd) .timeline-card {
  margin-right: 250px; /* Adjust the spacing to the right of odd-indexed items */
}

.timeline-item:nth-child(even) .timeline-card {
  margin-left: 250px; /* Adjust the spacing to the left of even-indexed items */
}

</style>