<script setup lang="ts">
import type { MarkdownParsedContent } from '@nuxt/content'
import { withTrailingSlash } from 'ufo'

const { data: _posts } = await useAsyncData(
  'posts',
  async () =>
    await queryContent<MarkdownParsedContent>(withTrailingSlash('posts'))
      .sort({ date: -1 })
      .only(['title', 'date', '_path'])
      .find()
)

const posts = computed(
  () =>
    (_posts.value
      && (_posts.value.map(({ _path, title, date }) => ({
        title,
        date,
        path: _path
      })) as { title: string, date: string, path: string }[]))
      || []
)

interface Project {
  name: string
  link: string
  description?: string
}

const _projects: Project[] = [
  { name: 'Wotaku', link: 'https://wotaku.wiki' },
  { name: 'privateersclub', link: 'https://megathread.pages.dev' },
  { name: '/r/freemediaheckyeah', link: 'https://fmhy.net' },
  {
    name: 'vyx',
    link: 'https://github.com/taskylizard/vyx',
    description: 'Personal discord bot for funsies.'
  }
]

const projects = computed(() =>
  _projects.map(p => ({ ...p, link: withTrailingSlash(p.link) }))
)

useSeoMeta({
  ogTitle: 'Hello! I am tasky. 🌷',
  ogDescription: 'Welcome!'
})
</script>

<template>
  <div>
    <h1 tracking-tight>
      <span>Hello! I am </span>
      <p
        from-indigo-300
        to-rose-300
        bg-gradient-to-r
        bg-clip-text
        text-transparent
        font-medium
        font-pacifico
      >
        tasky
      </p>
    </h1>

    <p>
      I love writing software that scales, design systems, and try to have fun
      in everyday challenges. Music is love. Shitposter by day, programmer by
      night.
      <Pronouns />
    </p>

    <h2>Posts</h2>
    <ul>
      <li
        v-for="(post, index) in posts"
        :key="index"
      >
        <LinkItem
          type="post"
          :title="post.title ?? post.path"
          :date="post.date"
          :to="post.path"
        />
      </li>
    </ul>

    <h2>Projects</h2>
    <p>The projects I made, or I'm a core member of sorts.</p>
    <ul>
      <li
        v-for="{ name, link, description } in projects"
        :key="name"
      >
        <LinkItem
          type="project"
          :title="name"
          :to="link"
          :description
        />
      </li>
    </ul>
  </div>
</template>
