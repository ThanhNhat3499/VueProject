<template>
  <div id="app" >
    <CVForm :dataCV='dataCV' />
    <Buttons @open="open" />
  </div>
</template>

<script>
import CVForm from './views/CVForm.vue'
import Buttons from './views/Buttons.vue'

export default {
  data(){
    return{
      dataCV:{
        isDisabled:true,
        db:[
            
          ]
      }
    };
  },
  mounted(){
    this.axios.get('https://back-end-for-cv-thanh-nhat.herokuapp.com/backendCV/read')
    .then((response)=> {
      this.dataCV.db=response.data;
      console.log(this.dataCV.db)
    })
  },
  components: {
    CVForm,
    Buttons
  },
  methods: {
    open(reply) {
      this.dataCV.isDisabled = reply;
    }
  }
}
</script>

