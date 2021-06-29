<template>
    <div id="btns">
        <button type="button" class="btn btn-dark" id="edit-btn" @click="disable=!disable">Edit</button>
        <button type="button" class="btn btn-info" id="save-btn">Save</button>
    </div>
</template>

<script>
  export default {
    data(){
      return {
        disable: true
      }
    }
  };
</script>

<style scoped>
  #btns{
    width: 20%;
    margin: auto;
    margin-top: 5%;
    margin-bottom: 2%;
  }
  #edit-btn, #save-btn{
      outline: 0;
      box-shadow: none;
      width: 45%;
  }
  #save-btn{
      float: right;
  }

  @media screen and (max-width: 991px){
    #btns{
        width: 50%;
    }
  }

  /*Desktop*/
  @media screen and (min-width: 992px) and (max-width: 1464px){
    #btns{
        width: 40%;
    }
  }
</style>