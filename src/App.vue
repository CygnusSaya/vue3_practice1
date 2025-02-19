<template>
  <div class="app">
    <h2 class="title">Vue路由测试</h2>
    <person/>
  </div>
</template>

<script lang="ts" setup name="App">
  import {RouterLink,RouterView} from 'vue-router'  
  import Person from './components/Person.vue';
</script>