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

type Project = {
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
    description: 'Personal discord/revolt/divolt bot for funsies.'
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
    <h1>Hello! I am tasky.</h1>

    <p>
      I love writing software that scales, design systems, and try to have fun
      in everyday challenges. Music is love. Shitposter by day, programmer by
      night.
    </p>

    <h2>Posts</h2>
    <ul>
      <li
        v-for="(post, index) of posts"
        :key="index"
      >
        <LinkItem
          :date="post.date"
          :text="post.title ?? post.path"
          :to="post.path"
        />
      </li>
    </ul>

    <h2>Projects</h2>
    <p>The projects I made, or I'm a core member of sorts.</p>
    <ul>
      <li
        v-for="{ name, link, description } of projects"
        :key="name"
      >
        <LinkItem
          :text="name"
          :to="link"
        />
        <span v-if="description"> — {{ description }}</span>
      </li>
    </ul>

    <h2>Stack</h2>
    <p>Shit I like to use, in no order.</p>
    <ul>
      <li>
        The obvious:
        <div class="flex gap-2">
          <Icon name="logos:vue" />
          <Icon name="devicon:solidjs" />
          <Icon name="skill-icons:typescript" />
          <Icon name="logos:sass" />
          <Icon name="devicon:tailwindcss" />
          <Icon name="logos:unocss" />
          <Icon name="skill-icons:prisma" />
          <Icon name="logos:postgresql" />
          <Icon name="devicon:sqlite" />
          <Icon name="logos:vitest" />
          <Icon name="logos:vitejs" />
          <Icon name="devicon:neovim" />
        </div>
      </li>
      <li>
        Good stuff:
        <div class="flex gap-2">
          <Icon name="devicon:cloudflare" />
          <Icon name="skill-icons:workers-light" />
          <Icon name="logos:deno" />
          <Icon name="logos:supabase-icon" />
          <Icon name="logos:sourcegraph" />
          <Icon name="logos:xata-icon" />
        </div>
      </li>
      <li>
        Tools:
        <div class="flex gap-2">
          <Icon name="devicon:biome" />
          <Icon name="devicon:tailwindcss" />
          <Icon name="logos:deno" />
          <Icon name="logos:sourcegraph" />
        </div>
      </li>
      <li>
        Languages:
        <div class="flex gap-2">
          <Icon name="skill-icons:typescript" />
          <Icon name="skill-icons:rust" />
          <Icon name="skill-icons:crystal-light" />
          <Icon name="skill-icons:elixir-light" />
          <Icon name="skill-icons:ruby" />
          <Icon name="skill-icons:golang" />
          <Icon name="skill-icons:python-light" />
        </div>
      </li>
    </ul>

    <p>
      See also:
      <NuxtLink to="/art">
        Art
      </NuxtLink>
    </p>
  </div>
</template>
