<template>
  <div class="body-part">
    <div class="body-left">
        <Avatar />
        <AboutMe />
        <Contact /> 
        <Skills />
    </div>
    <div class="body-right">
        <Experience />
        <Education />
        <Reference />
    </div>
  </div>
</template>

<script>
import Avatar from '../components/Avatar.vue'
import AboutMe from '../components/AboutMe.vue'
import Contact from '../components/Contact.vue'
import Skills from '../components/Skills.vue'
import Experience from '../components/Experience.vue'
import Education from '../components/Education.vue'
import Reference from '../components/Reference.vue'

export default {
  components:{
    Avatar,
    AboutMe,
    Contact,
    Skills,
    Experience,
    Education,
    Reference
  }
}
</script>

<style>
.body-part{
    padding: 0% 3% 2% 3%;
}
.body-left, .body-right{
    text-align: justify;
}
.body-left{
    float: left;
    padding-right: 2%;
    padding-top: 3%;
    width: 40%;
    border-right: 2px solid #332e32;
}
.body-right{
    padding-left: 3%;
    padding-top: 10%;
    float: right;
    width: 60%;
}
.index{
    font-size: 23px;
    font-weight: 700;
}
.top, .bottom{
    display: flex;
}
.year, .obj, .position, .school{
    width: 40%;
    text-align: left;
}
.organization, .infor, .major{
    width: 60%;
}
.year{
    opacity: 50%;
}
#highlight{
    color:  #2892a8;
}
#about-me hr, #contact hr, #skills hr, #experience hr, #education hr, #reference hr{
    float: left;
    width: 50px;
    margin-top: 1%;
    margin-bottom: 0%;
    border: 1px solid #2892a8;
}
</style>