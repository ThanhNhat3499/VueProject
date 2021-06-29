<template>
    <div id="skills">
        <div class="index">SKILLS</div>
        <hr>
        <br>
        <div class="row">
            <div class="obj">
                Wordpress
            </div>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div class="row">
            <div class="obj">
                Joomla
            </div>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div class="row">
            <div class="obj">
                Photoshop
            </div>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div class="row">
            <div class="obj">
                Illustrator
            </div>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div class="row">
            <div class="obj">
                HTML 5
            </div>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {};
</script>

<style scoped>
#skill{
    line-height: 1.6;
    margin-top: 5%;
}  
.row{
    display: flex;
    margin-bottom: 2%;
    padding-left: 4%;
}
.row .progress{
    height: 5px;
    width: 50%;
    margin-top: 3%;
}
.row .progress .progress-bar{
    width: 75%;
    background-color: #332e32;
}
.obj{
    font-weight: 650;
}
</style>