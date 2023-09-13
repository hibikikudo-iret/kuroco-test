<template>
    <div>
      <p>制作事例一覧ページ</p>
      <div v-for="n in response.list" :key="n.slug">
        <nuxt-link :to="`/case/${n.topics_id}`">
          {{ n.ymd }} {{ n.subject }}
        </nuxt-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ $axios }) {
      return {
        response: await $axios.$get('/rcms-api/7/case'),
      };
    },
  };
  </script>