<template>
    <div class="tags-row ">
     <span><b>Tags:</b> </span>
      <b-badge v-for="tag in tags" :key="tag.tag.id" class="mr-2">
        <span>{{ tag.tag.name }}</span>
        <span v-if="tag.tag.emoji" class="ml-1">{{ tag.tag.emoji }}</span>
      </b-badge>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tags: Array,
    },
  };
  </script>