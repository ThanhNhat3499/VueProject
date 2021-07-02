<template>
    <div id="contact">
        <div class="index">CONTACT</div>
        <hr>
        <br>
        <div class="sub-index">Address:</div>
        <div class="detail">
            <textarea name="" ref="address" rows="2" :value="dataCV.db[1].description" :disabled="dataCV.isDisabled"   @keydown.tab="emitToParent"/>
        </div>
        <div class="sub-index">Mobile:</div>
        <div class="detail">
            <input type="text" name="" id="mobile" :value="dataCV.db[2].description" :disabled="dataCV.isDisabled">
        </div>
        <div class="sub-index">Email:</div>
        <div class="detail">
            <input type="text" name="email" id="email" :value="dataCV.db[0].description" :disabled="dataCV.isDisabled">
        </div>
        <div class="sub-index">Website:</div>
        <div class="detail">
            <input type="text" name="website" id="website" :value="dataCV.db[3].description" :disabled="dataCV.isDisabled">
        </div>
        <div class="sub-index">Github:</div>
        <div class="detail">
            <input type="text" name="skype" id="skype" :value="dataCV.db[4].description" :disabled="dataCV.isDisabled">
        </div>
    </div>
</template>

<script>
  export default {
      props:["dataCV"],
      methods:{
          emitToParent(){
              
          }
      }
  };
</script>

<style scoped>
#contact{
    margin-top: 5%;
}
.sub-index{
    margin-bottom: 2%;
    font-weight: 650;
}
.detail{
    margin-bottom: 5%;
}
</style>