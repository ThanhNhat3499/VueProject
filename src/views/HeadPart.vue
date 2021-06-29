<template>
  <div class="head-part">
    <Name />
  </div>
</template>

<script>

import Name from '../components/Name.vue'

export default {
  components:{
    Name
  }
}
</script>

<style>
.head-part{
    width: 100%;
    height: 200px;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: #332e32;
    color: white;
}
</style>