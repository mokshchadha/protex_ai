<template>
  <div class="shadow-sm mb-4">
   <violation-details :item="item"></violation-details>
    <violation-stakeholders :users="item.violations_stakeholders"></violation-stakeholders>
    <div class="m-3">
    <violation-tags :tags="item.violations_tags"></violation-tags>
    <rule-section :rule="item.rule"></rule-section>
    <violation-categories :categories="item.violations_categories"></violation-categories>
  </div>
   <comments-section :item="item"></comments-section>
  </div>
  </template>
  
  <script>
  import ViolationDetails from "./ViolationDetails.vue"
  import CommentsSection from "./CommentSection.vue"
  import ViolationTags from './ViolationTags.vue'
  import ViolationCategories  from "./ViolationCategories.vue"
  import RuleSection from './RuleSection.vue'
  import ViolationStakeholders from './ViolationStakeholders.vue'

  export default {
    components:{
        CommentsSection,
        ViolationTags,
        ViolationCategories,
        RuleSection,
        ViolationStakeholders,
        ViolationDetails,
    },
    props: {
      item: Object,  
    },
  };
  </script>