<script setup lang="ts">
import type { Link } from "@/lib/Link"
import fetchLinks from '@/lib/links'
import { onBeforeMount, reactive } from 'vue';

type Props = {
  limitDays?: number
}

type DailyArchive = {
  date: string,
  sortKey: Date,
  links: Link[]
}

const props = withDefaults(defineProps<Props>(), {
  limitDays: 7 
})
  
type State = {
  dailyArchive: DailyArchive[]
}

const state : State = reactive({ dailyArchive: []})

onBeforeMount(async () => {
  const map = new Map<string, Link[]>();

  (await fetchLinks()).forEach((item) => {
    const key = item.posted.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    const collection = map.get(key)

    if (!collection) {
      map.set(key, [item])
    } else {
      collection.push(item)
    }
  })

  map.forEach((links, key) => {
    state.dailyArchive.push({
      date: key,
      sortKey: new Date(links[0].posted.toDateString()),
      links
    })
  })
})

</script>

<template>
  <article
    v-for="day in state.dailyArchive
      .sort((a, b) => (a.sortKey > b.sortKey ? -1 : 1))
      .slice(0, limitDays)"
    :key="day.date">
    <section>
      <header>
        <h1>{{ day.date }}</h1>
      </header>
      <ul>
        <li
          v-for="link in day.links
            .sort((a, b) => (b.posted.getTime() - a.posted.getTime()))"
          :key="link.url">
          <a :href="link.url" target="_blank">
            {{ link.title }}
          </a>
          <span v-if="link.comment.length > 0" class="comment">
            {{ link.comment }}
          </span>
        </li>
      </ul>
    </section>
  </article>
</template>