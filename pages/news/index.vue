<template>
  <div>
    <p>ニュース一覧ページ{{ this.$route.query.page }}</p>
    <div v-for="n in response.list" :key="n.slug">
      <nuxt-link :to="`/news/${n.topics_id}`">
        {{ n.ymd }} {{ n.subject }}
      </nuxt-link>
    </div>
    <Pagenator v-bind="{ ...response.pageInfo }" />
  </div>
</template>
  
<script>
import Pagenator from '/components/Paginator.vue';

export default {
  components: {
    Pagenator,
  },
    async asyncData({ $axios, route }) {
    return {
      //response: await $axios.$get('/rcms-api/4/news'),
      response: await $axios.$get('/rcms-api/8/news'),
      params: {
          pageID: route.query.page || 1,
        },
    };
  },
};
</script>