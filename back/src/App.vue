<template>
  <div id="app">
  	<app-quote @add="getDate($event)"></app-quote>
   		<app-quote-gird :quotes="quotes"></app-quote-gird>
   		<button @click="quoted"></button>
   		
  </div>
</template>

<script>
	import quoteird from "./conponets/quotegirde.vue"
	import quote from "./conponets/quote.vue"
export default {
	
	data:function(){
		
 	return {
 		maxlength:10,
 		quotes:[
 			"this is a first "
 		],
 	}
 },
 components :{
 	appQuoteGird:quoteird,
 	appQuote :quote
 },
 methods:{
 	getData:function(data){
 		this.quotes.push(data);
 	}
 }
}
</script>

<style>

</style>
