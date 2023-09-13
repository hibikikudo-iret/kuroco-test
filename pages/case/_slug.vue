<template>
  <div>
    <h1 class="title">{{ response.details.subject }}</h1>
    <div class="post" v-html="response.details.contents"></div>

    <h2>{{ response.details.ext_1 }}</h2>
    <img :src="response.details.ext_2.url" width="300">
    <h3>{{ response.details.ext_3 }}</h3>
    <p>{{ response.details.ext_4 }}</p>
    <div>{{ response.details.ext_5[0] }}</div>
    <div v-for="n in response.details.ext_5" :key="n.slug" >
      <div>{{ n.ext_5 }}</div>
      <div>{{ n.ext_6 }}</div>
      <div>{{ n.ext_7 }}</div>
    </div>
  </div>
</template>
  
<script>
export default {
  async asyncData({ $axios, params }) {
    return {
      response: await $axios.$get(`/rcms-api/7/case_detail/${params.slug}`),
    };
  },
};
</script>