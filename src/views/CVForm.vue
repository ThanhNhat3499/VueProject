<template>
  <div class="cv-form">
    <HeadPart />
    <BodyPart :dataCV='dataCV' />
  </div>
</template>

<script>

import HeadPart from './HeadPart.vue'
import BodyPart from './BodyPart.vue'
export default {
  props:["dataCV"],
  components:{
    HeadPart,
    BodyPart
  }
}
</script>

<style>
.cv-form{
    width: 55%;
    font-size: 16px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
}
@media screen and (max-width: 991px) {
    .cv-form{
        width: 100%;
    }
    .rfr-container{
        flex-direction: column;
    }
    #reference .reference-left, #reference .reference-right{
        width: 100%;
    }
    .reference-left{
        padding-left: 2%;
        margin-bottom: 5%;
    }
}

/*Mobile*/
@media screen and (max-width: 767px){
    .cv-form, .top, .rfr-container, .row, .top, .bottom{
        flex-direction: column;
    }
    .head-part .name{
        font-size: 35px;
    }
    .avatar{
        width: 40%;
    }
    .body-part, .head-part, .body-left, .body-right, .position, .organization, .year, .infor, .school, .major{
        width: 100%;
    }
    .body-left{
        border: none;
    }
    .body-right{
        padding-left: 0%;
    }
    #about-me p, .exp-container, .edu-container{
        padding-left: 3%;
        padding-right: 2%;
    }
    .bottom{
        margin-bottom: 5%;
    }
    .index{
        font-size: 20px;
    }
    .sub-index, .detail, .obj, .progress{
        margin-left: 4%;
    }
    .row .progress{
        height: 5px;
        width: 80%;
        margin-top: 3%;
    }
}

/*Tablet*/
@media screen and (min-width: 768px) and (max-width: 991px){
    .body-right{
        padding-top: 5%;
    }
    .bottom{
        margin-bottom: 5%;
    }
    .row{
        padding-left: 5%;
    }
    #reference .reference-left,#reference .reference-right{
        width: 100%;
    }
}

/*Desktop*/
@media screen and (min-width: 992px) and (max-width: 1464px){
    .cv-form{
        width: 90%;
        margin-top: 2%;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }
    .bottom{
        margin-bottom: 5%;
    }
}

/*Large Desktop*/
@media screen and (min-width: 1465px){
    .cv-form{
        margin-top: 2%;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }
    .bottom{
        margin-bottom: 3%;
    }
    .sub-index{
        margin-bottom: 0%;
    }
    .detail{
        margin-bottom: 2%;
    }
    .position, .year, .school{
        padding-left: 3%;
    }
}
</style>