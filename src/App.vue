<template>
  <div id="app">
    <Navigation />
      <div class='main'><router-view/></div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'App',
  components: { Navigation }
}
</script>

<style>
  .main {
   padding: 0 20px;
  }
</style>
