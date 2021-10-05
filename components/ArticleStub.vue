<template>
  <span>
    <time :datetime="article.createdAt">
      {{ article.formattedCreatedAt }}
    </time>
    <h3>
      <NuxtLink :to="`/article/${article.slug}`">
        {{ article.title }}
      </NuxtLink>
    </h3>
    <p>
      {{ article.description }}
    </p>
  </span>
</template>

<script lang="ts">
export default {
  name: 'ArticleStub',
  props: {
    article: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
a, .nuxt-link-active {
  text-decoration: none;
  color: $standout-txt-color;
  border-bottom: 1px solid $standout-txt-border-color;
}

h3 {
  margin: 0 0 0.5rem 0;
}

p {
  margin: 0.75rem 0 0 0;
  line-height: $main-txt-line-height;
}

time {
  color: $main-txt-sub-color;
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
  display: block;
}
</style>