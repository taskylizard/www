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
    class="content prose mx-auto max-w-[700px] px-6 py-12 dark:prose-invert focus:outline-none prose-a:decoration-dashed hover:prose-a:decoration-solid focus:prose-a:decoration-solid prose-pre:my-0 prose-pre:rounded-lg prose-table:block prose-table:overflow-x-auto prose-table:whitespace-nowrap md:px-6 md:pb-20 md:pt-10"
  >
    <NuxtPage />
    <footer class="pt-4" aria-label="footer">
      <p class="pt-2">
        &copy; taskylizard, CC BY-NC-SA 4.0
      </p>

      <div class="flex flex-row flex-wrap gap-1 pt-2 prose-a:no-underline" aria-label="footer links">
        <div class="flex gap-1">
          <Social to="mailto:tasky@fmhy.net" icon="carbon:email" label="Email" accent="crimson" />
        </div>

        <div class="flex gap-1">
          <Social
            to="https://bsky.app/profile/tasky.nuxt.dev"
            icon="simple-icons:bluesky"
            label="Bluesky"
            accent="sky"
          />
        </div>

        <div class="flex gap-1">
          <Social to="https://github.com/taskylizard" icon="carbon:logo-github" label="Github" accent="olive" />
        </div>

        <div class="flex gap-1">
          <a href="https://notbyai.fyi">
            <img src="/not-by-ai-light.svg" class="dark:hidden" alt="Written by Human, Not by AI">
            <img src="/not-by-ai-dark.svg" class="hidden dark:block" alt="Written by Human, Not by AI">
          </a>
        </div>
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
