<template>
  <div id="app">
  <app-header></app-header>
  	<div>
  	<app-left></app-left>
 	 	<app-right></app-right>
  	</div>
   
  </div>
</template>

<script>
	import header from './vue/header.vue'
	import left from './vue/left.vue'
	import right from './vue/right.vue'

export default {
  components:{
  	"app-header":header,
  	"app-left":left,  	
  }
 }
</script>
 
<style scoped>

#app{
	width: 1200px;
	margin: 0 auto;
	background-color:#76FF7E ;
overflow: hidden;
};

</style>
