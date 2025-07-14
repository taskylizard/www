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
  ogTitle: 'taskylizard',
  ogDescription: appConfig.app.description,
  ogUrl: 'https://tasky.nuxt.dev',
  ogImage: 'https://tasky.nuxt.dev/og-image.png',
  ogImageAlt: 'tasky\'s personal website',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: 'summary_large_image',
  twitterSite: '@taskylizard',
  twitterTitle: 'taskylizard',
  twitterDescription: appConfig.app.description,
  twitterImage: 'https://tasky.nuxt.dev/og-image.png',
  twitterImageAlt: 'tasky\'s personal website'
})
</script>

<template>
  <NuxtLoadingIndicator :color="false" class="bg-[#ff91af]" />
  <NuxtRouteAnnouncer />
  <Navigation />
  <main
    class="content mx-auto max-w-[700px] bg-neutral-1 px-6 py-12 text-neutral-11 font-sans prose prose-pre:my-0 prose-table:block prose-table:overflow-x-auto prose-table:whitespace-nowrap prose-pre:rounded-lg md:px-6 md:pb-20 md:pt-10 focus:outline-none dark:prose-invert">
    <NuxtPage />
    <footer class="mt-16 pt-8 border-t border-neutral-4" aria-label="footer">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <!-- Brand Section -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-neutral-12 tracking-tight">taskylizard</h3>
          <p class="text-sm text-neutral-10 leading-relaxed">
            Personal space for thoughts, code, and digital experiments.
          </p>
        </div>
        
        <!-- Quick Links -->
        <div class="space-y-4">
          <h4 class="text-sm font-medium text-neutral-11 uppercase tracking-wider">Connect</h4>
          <div class="flex flex-col space-y-2">
            <NuxtLink 
              to="https://bsky.app/profile/tasky.nuxt.dev" 
              class="text-sm text-neutral-10 hover:text-neutral-12 transition-colors inline-flex items-center gap-2 group"
              external
            >
              <Icon name="simple-icons:bluesky" size="16" class="group-hover:text-blue-400 transition-colors" />
              Bluesky
            </NuxtLink>
            <NuxtLink 
              to="https://github.com/taskylizard" 
              class="text-sm text-neutral-10 hover:text-neutral-12 transition-colors inline-flex items-center gap-2 group"
              external
            >
              <Icon name="carbon:logo-github" size="16" class="group-hover:text-neutral-12 transition-colors" />
              GitHub
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="pt-6 border-t border-neutral-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p class="text-sm text-neutral-10">
          &copy; 2025 taskylizard
        </p>
        <div class="flex items-center space-x-4 text-sm text-neutral-10">
          <span>CC BY-NC-SA 4.0</span>
          <span class="hidden md:inline">•</span>
          <span class="inline-flex items-center gap-1">
            Made with 
            <Icon name="mdi:heart" size="14" class="text-pink-400" />
            and caffeine
          </span>
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
