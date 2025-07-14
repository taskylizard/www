<script setup lang="ts">
import Toc from '~/components/Toc.vue'

const article = ref<HTMLElement | null>(null)
const route = useRoute()
const { data: page, error } = await useAsyncData(route.path, () =>
  queryContent(route.path).findOne())

if (error.value) {
  throw createError({
    statusCode: 404,
    message: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
  ogTitle: page.value?.title,
  ogDescription: page.value?.description,
  ogType: 'article',
  ogUrl: `https://tasky.nuxt.dev${route.path}`,
  ogImage: `https://tasky.nuxt.dev${route.path}/og-image.png`,
  ogImageAlt: page.value?.title,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogSiteName: 'tasky',
  articleAuthor: 'taskylizard',
  articlePublishedTime: page.value?.date,
  articleModifiedTime: page.value?.date,
  twitterCard: 'summary_large_image',
  twitterSite: '@taskylizard',
  twitterTitle: page.value?.title,
  twitterDescription: page.value?.description,
  twitterImage: `https://tasky.nuxt.dev${route.path}/og-image.png`,
  twitterImageAlt: page.value?.title
})

const [next, prev] = await queryContent()
  .only(['_path', 'title', 'description'])
  .sort({ date: -1 })
  .where({ _draft: false })
  .findSurround(useRoute().path)

function onBackToTop() {
  article.value!.scrollIntoView({
    behavior: 'smooth'
  })
}
</script>

<template>
  <main
    ref="article"
    class="relative"
  >
    <ContentDoc v-slot="{ doc }">
      <article>
        <h1>{{ doc.title }}</h1>
        <p class="mb-4">
          {{ doc.description }} •
          <NuxtTime 
            :datetime="doc.date" 
            date-style="short" 
            locale="en-GB" 
          />
        </p>
        <Toc /> <ContentRenderer :value="doc" />
        <div class="mt-8 space-y-4">
          <div class="flex items-center justify-start">
            <button
              class="group flex items-center gap-2 text-neutral-11 hover:text-neutral-12 transition-colors duration-300"
              aria-label="Back to top"
              @click="onBackToTop"
            >
              <Icon
                name="lucide:chevron-up"
                class="size-4 transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              <span class="text-sm">Back to Top</span>
            </button>
          </div>
          <nav class="flex flex-col items-stretch justify-between sm:flex-row sm:items-center space-y-4 sm:space-x-4 sm:space-y-0">
            <PrevNextButton :prev />
            <PrevNextButton :next />
          </nav>
        </div>
      </article>
    </ContentDoc>
    <!-- Desktop TOC is fixed positioned, so its exact DOM location here is less critical -->
    <!-- Mobile TOC (collapsible) is part of Toc.vue and will be placed correctly by the above move -->
  </main>
</template>
