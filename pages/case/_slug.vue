<template>
  <div>
    <!-- <h1 class="title">{{ response.details.subject }}</h1> -->

    <h2>{{ response.details.case.case_title }}</h2>
    <img :src="response.details.case.case_logo_img.url" width="150">
    <img :src="response.details.case.case_main_img.url" width="600">
    <h3>{{ response.details.case.case_lead }}</h3>
    <p>{{ response.details.case.case_desc }}</p>
     <div v-for="n in response.details.point" :key="n.slug" >
      <h3>{{ n.point_title }}</h3>
      <div>{{ n.point_lead }}</div>
      <div>{{ n.point_desc }}</div>
      <img :src="n.point_img.url" width="300">
    </div>
    <div v-for="n in response.details.category" :key="n.slug" >
      <div>{{ n }}</div>
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