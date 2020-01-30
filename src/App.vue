<template>
  <div class="main" id="app">
    <ImageList />
  </div>
</template>

<script>
import ImageList from './components/ImagesList'

export default {
  name: 'app',
  components: {
    ImageList
  }
}
</script>

<style>
  .main {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>