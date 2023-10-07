<template>
    <div class="violation-category">
        <span> <b>Rule:- </b> <b-badge>{{  rule.name }} </b-badge></span>  
         <span class="text-muted" > (Cameras:- </span>
        <b-badge v-for="camera in rule.rules_cameras" :key="camera.name"  >{{ (camera.camera.name)}}</b-badge>
        <span class="text-muted">) </span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      rule: Object,  
    },
  };
  </script>