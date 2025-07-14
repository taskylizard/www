<script setup lang="ts">
useHead({
  titleTemplate: title => (title ? `${title} · tasky` : 'taskylizard'),
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: '#ff91af' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const appConfig = useAppConfig()
useSeoMeta({
  ogSiteName: appConfig.app.name,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterSite: appConfig.app.name
})
</script>

<template>
  <NuxtLoadingIndicator :color="false" class="bg-[#ff91af]" />
  <NuxtRouteAnnouncer />
  <Navigation />
  <main
    class="content mx-auto max-w-[700px] bg-neutral-1 px-6 py-12 text-neutral-11 font-sans prose prose-pre:my-0 prose-table:block prose-table:overflow-x-auto prose-table:whitespace-nowrap prose-pre:rounded-lg md:px-6 md:pb-20 md:pt-10 focus:outline-none dark:prose-invert">
    <NuxtPage />
    <footer class="pt-4" aria-label="footer">
      <p class="pt-2">
        &copy; taskylizard, CC BY-NC-SA 4.0
      </p>

      <div class="flex flex-row flex-wrap items-center justify-between pt-2 prose-a:no-underline"
        aria-label="Footer links">
        <Social to="https://bsky.app/profile/tasky.nuxt.dev" icon="simple-icons:bluesky" />

        <Social to="https://github.com/taskylizard" icon="carbon:logo-github" />
      </div>
    </footer>
  </main>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>
