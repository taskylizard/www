<script setup lang="ts">
const article = ref<HTMLElement | null>(null)
const route = useRoute()
const { data: page, error } = await useAsyncData(route.path, () =>
  queryContent(route.path).findOne()
)

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
  ogDescription: page.value?.description
})

const [next, prev] = await queryContent()
  .only(['_path', 'title', 'description'])
  .sort({ date: -1 })
  .where({ _draft: false })
  .findSurround(useRoute().path)

const onBackToTop = () => {
  article.value!.scrollIntoView({
    behavior: 'smooth'
  })
}
</script>

<template>
  <main ref="article">
    <ContentDoc v-slot="{ doc }">
      <article>
        <h1>{{ doc.title }}</h1>
        <p>
          {{ doc.description }} •
          <NuxtTime :datetime="doc.date" />
        </p>
        <ContentRenderer :value="doc" />
        <div class="mt-8 space-y-4">
          <div class="flex items-center justify-start">
            <button
              class="flex items-center space-x-2 rounded-md bg-neutral-3 px-4 py-2 transition duration-300 ease-in-out hover:bg-neutral-5 focus:outline-none focus:ring-2 focus:ring-neutral-6 dark:bg-neutral-dark-3 dark:hover:bg-neutral-dark-5 dark:focus:ring-neutral-dark-6"
              aria-label="Back to top"
              @click="onBackToTop"
            >
              <Icon name="lucide:chevron-up" class="size-4" />
              <span class="text-sm font-medium">Back to Top</span>
            </button>
          </div>
          <nav
            class="flex flex-col items-stretch justify-between space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0"
          >
            <PrevNextButton :prev />
            <PrevNextButton :next />
          </nav>
        </div>
      </article>
    </ContentDoc>
  </main>
</template>
