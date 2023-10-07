<template>
    <b-card :title="item.title" img-src="item.image_url" img-alt="Event Image">
      <p>Violation Id :- {{ item.id }}</p>
      <p class="card-text">Event Time: {{ formattedEventTime }}</p>
      <b-button v-b-modal.videoModal variant="primary">Watch Video</b-button>
  
      <b-modal id="videoModal" title="Video">
        <video :src="item.video_url" controls autoplay></video>
      </b-modal>
    </b-card>
  </template>
  
  <script>
  import { BCard, BButton, BModal } from "bootstrap-vue";  
  import { formatDate } from "@/dateutils";
  import "bootstrap/dist/css/bootstrap.css";
  import "bootstrap-vue/dist/bootstrap-vue.css";
  
  export default {
    props: {
      item: Object,
    },
    computed: {
      formattedEventTime() {
        const eventTime = formatDate(this.item.event_time);
        return eventTime
      },
    },
    components: {
      BCard,  
      BButton,  
      BModal, 
    },
  };
  </script>
  