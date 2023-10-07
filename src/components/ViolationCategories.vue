<template>
    <div class="violation-category">
          <span><b>Violation Categories:- </b></span>  <b-badge v-for="category in categories" :key="category.id">{{  category.category.name }}</b-badge>
    </div>
  </template>
  <script>
  export default {
    props: {
      categories: Array,  
    },
  };
  </script>