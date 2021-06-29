<template>
  <div id="app">
    <CVForm />
    <Buttons />
  </div>
</template>

<script>
import CVForm from './views/CVForm.vue'
import Buttons from './views/Buttons.vue'

export default {
  components: {
    CVForm,
    Buttons
  }
}
</script>

