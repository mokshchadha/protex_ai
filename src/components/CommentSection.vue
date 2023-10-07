<template>
 <div>
    <b-list-group>
      <h4>Comments</h4>
      <b-list-group-item v-for="comment in item.comment_threads" :key="comment.id">
        <b-media>
          <b-avatar :src="comment.user.profile_pic_url" alt="User Avatar"></b-avatar>
        <b-media-body>
          <p class="mb-0">{{ comment.user.first_name }} {{ comment.user.last_name }} <span class="text-muted"> {{ formatDate(comment.timestamp) }}</span></p>
        </b-media-body>
      </b-media>
      <p class="mt-2">{{ comment.message }}</p>
      </b-list-group-item>
    </b-list-group>
 </div>
  
  </template>
  
  <script>
 import { formatDate } from '@/dateutils';
  export default {
    props: {
      item: Object,  
      
    },
    methods:{formatDate: formatDate}
  };
  </script>