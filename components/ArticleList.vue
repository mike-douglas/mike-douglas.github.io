<template>
  <ul>
    <li v-for="article in articles" :key="article.stub">
      <ArticleStub :article="article"/>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'ArticleList',
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 2.0rem;
}
</style>