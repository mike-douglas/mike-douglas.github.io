<template>
  <section>
    <header>
      <h1>Archive</h1>
    </header>

    <ArticleList :articles="articles"/>
  </section>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'

export default {
  async asyncData({ $content, $moment } : Context) {
    const articles = await $content('articles')
      .sortBy('createdAt', 'desc')
      .fetch()
    
    articles.forEach((a: any) => {
      a.formattedCreatedAt = $moment(a.createdAt).format('MMMM Do, YYYY')
    })

    return {
      articles
    }
  }

}
</script>

<style lang="scss" scoped>
header {
  margin-bottom: 2.0rem;
}

header h1 {
  font-size: 2.8rem;
  color: $standout-txt-color;
}

header time {
  color: $main-txt-sub-color;
}
</style>