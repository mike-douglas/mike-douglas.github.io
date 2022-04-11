<template>
  <article>
    <header>
      <h1>{{ article.title }}</h1>
    </header>
    <div class="main">
      <nuxt-content class="article-content" :document="article" />
    </div>
    <div class="sidebar">
      <footer>
        <time :datetime="article.createdAt">
          {{ formattedCreatedAt }}
        </time>
        <nav>
          <h3>Start a conversation</h3>
          <a href="https://twitter.com/intent/tweet?screen_name=miked&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false" data-size="large">Tweet this @miked</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </nav>
      </footer>
    </div>
  </article>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'

export default {
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
header {
  margin-bottom: 2.0rem;
}

header h1 {
  font-size: $hero-txt-size;
  background: $standout-txt-color;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

time {
  color: $main-txt-sub-color;
}

footer {
  margin-top: 4.0rem;
}

article {
  display: grid;
  column-gap: 1.0rem;
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

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  header h1 {
    font-size: div($hero-txt-size, 1.2);
  }  
}
</style>

<style lang="scss">
.article-content {
  background-color: white;
  color: #222;
  margin: 0rem -2.0rem;
  padding: 1.0rem 2.0rem;
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