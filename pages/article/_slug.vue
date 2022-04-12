<template>
  <article>
    <header>
      <h1>{{ article.title }}</h1>
      <time :datetime="article.createdAt">
          {{ formattedCreatedAt }}
      </time>
    </header>
    <div class="main">
      <nuxt-content class="article-content" :document="article" />
    </div>
    <div class="sidebar">
      <footer>
        <section class="tags">
          <strong>Tags:</strong>
          <span v-for="tag in article.tags" :key="tag">{{ tag }}</span>
        </section>
        <section class="contact">
          <span class="author-image">
            <Portrait />
          </span>
          <a href="https://twitter.com/intent/tweet?screen_name=miked&ref_src=twsrc%5Etfw">@miked</a>
        </section>
      </footer>
    </div>
  </article>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Portrait from '@/components/Portrait.vue'

export default {
  components: {
    Portrait,
  },
  async asyncData({ $content, $moment, params } : Context) {
    const article = await $content('articles', params.slug).fetch()
    const formattedCreatedAt = $moment((article as any).createdAt).format('MMMM Do, YYYY')

    return {
      article,
      formattedCreatedAt,
    }
  }
}
</script>

<style lang="scss" scoped>
header h1 {
  font-size: $hero-txt-size;
  background: $standout-txt-color;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

article {
  display: grid;
  column-gap: 2.0rem;
}

header {
  grid-area: 1 / 1 / 1 / span 2;
}

article .sidebar {
  grid-area: 2 / 1 / 2 / 1;
}

article .main {
  grid-area: 2 / 2 / 2 / 2;
}

.sidebar, time {
  color: $main-txt-sub-color;
}

.sidebar {
  max-width: 15rem;
  line-height: $main-txt-line-height*1.25;
}

footer section {
  margin-bottom: 2.0rem;
}

section.contact .author-image img {
  width: 48px;
  height: 48px;
  margin-right: 1.0rem;
}

section.contact {
  display: flex;
  text-align: left;
  align-items: center;
}

section.contact a {
  text-decoration: none;
}

section.tags span::after {
  content: ", ";
}

section.tags span:last-child::after {
  content: " ";
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  article {
    display: block;
  }

  header h1 {
    font-size: div($hero-txt-size, 1.2);
  }  
}
</style>

<style lang="scss">
.article-content {
  background-color: white;
  color: #222;
}

.article-content p, .article-content ul, .article-content ol {
  line-height: $main-txt-line-height*1.25;
}

.article-content blockquote {
  background-color: $panel-bg-color;
  margin: 0;
  padding: 1.0rem;
}

.article-content blockquote p {
  padding: 0;
  margin: 0;
}

.article-content .centerpiece {
  text-align: center;
}

.article-content .centerpiece img {
  width: 80%;
}

.article-content h1 {
  color: $content-txt-h1-color;
}

.article-content h2 {
  color: $content-txt-h3-color;
}

.article-content h3 {

}

</style>