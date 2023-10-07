<template>
  <div>  
    <h1>Violation Events</h1>
    <ul :style="listStyle">
      <li v-for="item in items" :key="item.id">
        <list-item :item="item"></list-item>
    </li>
    </ul></div>
   
</template>

<script>
import {getEventsDataJson}  from './api'
import ListItem from './components/ListItem.vue';

export default {
  components: {
    ListItem, 
  },
  data() {
    return {
      items: [], 
      listStyle :{
        listStyle:'none',
        padding:'1rem',
        margin:0
      }
    };
  },
  created() {
    getEventsDataJson().then(e => this.items = e)
  },
};
</script>
