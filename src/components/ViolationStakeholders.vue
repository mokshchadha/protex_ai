<template>
    <div>
      <h4>Stakeholders</h4>
      <b-table :items="users" striped hover :fields="fields"></b-table>
    </div>
  </template>
  
  <script>
  import { BTable,   } from "bootstrap-vue"; 
  import {formatDate} from '../dateutils' 
  import "bootstrap/dist/css/bootstrap.css";
  import "bootstrap-vue/dist/bootstrap-vue.css";
  
  export default {
    components: {
      BTable,  
      
    },
    props: {
      users: Array,
    },

    methods :{formatDate},

    computed: {
      fields() {
        return [
          {
            key: "name",
            label: "Name",
            formatter: (value, key, item) => {
              return `${item.user.first_name} ${item.user.last_name}`;
            },
          },
          {
            key: "last_login",
            label: "Last Login",
            formatter: (value, key, item) => {
              return item.user.last_login? formatDate(item.user.last_login) : "N/A";
            },
          },
        ];
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your CSS styles for the table here */
  </style>
  