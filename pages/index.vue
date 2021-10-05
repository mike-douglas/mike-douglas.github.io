<template>
  <span>
    <header class="hero">
      <div class="author-image">
        <Portrait />
      </div>
      <h1>
        <span class="standout">
          <span class="wave">👋</span>
          Hi, I'm Mike.
        </span>
        I lead teams that build awesome things.
      </h1>

      <nuxt-content class="hero-content" :document="pageContent"/>

    </header>
    <section>
      <header>
        <h1>Posts</h1>
      </header>

      <ArticleList :articles="articles"/>

      <NuxtLink to="/archive">Full Archive &gt;&gt;</NuxtLink>
    </section>
    <section>
      <header>
        <h1>Projects</h1>
      </header>

      <ProjectList :projects="projects"/>
    </section>
  </span>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'

export default {
  layout: 'hero',
  async asyncData({ $content, $moment } : Context) {
    const pageContent = await $content('index').fetch()
    const articles = await $content('articles')
      .sortBy('createdAt', 'desc')
      .limit(5)
      .fetch()
    const projects = await $content('projects').fetch()

    articles.forEach((a: any) => {
      a.formattedCreatedAt = $moment(a.createdAt).format('MMMM Do, YYYY')
    })

    return {
      pageContent,
      articles,
      projects
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  margin-bottom: 2.0rem;
}

h1 {
  font-size: $hero-txt-size;
  margin: 4.0rem 0 0 0;
}

p {
  line-height: $main-txt-line-height;
}

.author-image img {
  width: 200px;
  height: 200px;
}

.author-image {
  margin: $hero-txt-size 0;
}

.standout {
  color: $standout-txt-color;
}

.hero h1 {
  margin-bottom: 3.0rem;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  .author-image {
    text-align: center;
    margin: 1.0rem 0;
  }

  h1 {
    font-size: div($hero-txt-size, 1.2);
  }

  .hero h1 {
    text-align: center;
  }

  .standout {
    display: block;
  }
}
</style>

<style lang="scss">
.hero-content p {
  line-height: $main-txt-line-height*1.25;
}
</style>