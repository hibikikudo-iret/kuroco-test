<template>
  <div>
    <p>ニュース一覧ページ{{ this.$route.query.page }}</p>
    <div v-for="n in response.list" :key="n.slug">
      <nuxt-link :to="`/news/${n.topics_id}`">
        {{ n.ymd }} {{ n.subject }}
      </nuxt-link>
    </div>
    <Paginator v-bind="{ ...response.pageInfo }" />
  </div>
</template>
  
<script>
import Paginator from '/components/Paginator.vue';

export default {
  components: {
    Paginator,
  },
  async asyncData({ $axios, route }) {
    return {
      response: await $axios.$get('/rcms-api/8/news', {
        params: {
          pageID: route.query.page || 1,
        },
      }),
    };
  },
};
</script>