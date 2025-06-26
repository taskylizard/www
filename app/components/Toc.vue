<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useAsyncData, queryContent, useRoute } from '#imports'
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb
} from 'radix-vue'
import {
  CollapsibleRoot,
  CollapsibleTrigger,
  CollapsibleContent
} from 'radix-vue'
import { Icon } from '#components' // Auto-imported by Nuxt Icon

const route = useRoute()
const { data: page } = await useAsyncData(`toc-${route.path}`, () =>
  queryContent(route.path).findOne()
)

interface TocLink {
  id: string
  text: string
  depth: number
}

const links = computed<TocLink[]>(() => {
  if (!page.value || !page.value.body || !page.value.body.children) {
    return []
  }
  return page.value.body.children
    .filter(node => node.tag && ['h2', 'h3', 'h4'].includes(node.tag) && node.props?.id)
    .map(node => ({
      id: node.props!.id,
      text: node.children?.filter(child => child.type === 'text').map(child => child.value).join('') || 'Missing heading text',
      depth: parseInt(node.tag!.substring(1), 10)
    }))
})

const activeId = ref<string | null>(null)
const observer = ref<IntersectionObserver | null>(null)
const observedElements = ref<Map<Element, string>>(new Map())
const isMobileTocOpen = ref(false)

const commonIntersectionLogic = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    const id = observedElements.value.get(entry.target)
    if (id) {
      if (entry.isIntersecting) {
        if (entry.boundingClientRect.top <= 120) {
          activeId.value = id
        }
      }
    }
  })

  const intersectingEntries = entries.filter(e => e.isIntersecting)
  if (intersectingEntries.length > 0) {
    intersectingEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
    const topEntry = intersectingEntries[0]
    const topEntryId = observedElements.value.get(topEntry.target)

    if (topEntryId && topEntry.boundingClientRect.top <= 120) {
      activeId.value = topEntryId
    } else if (intersectingEntries.length === 1 && topEntryId) {
      activeId.value = topEntryId
    }
  }
}

onMounted(async () => {
  await nextTick()
  if (links.value.length === 0) return

  if (route.hash) {
    const initialActiveId = route.hash.substring(1)
    if (links.value.some(link => link.id === initialActiveId)) {
      activeId.value = initialActiveId
      // If on mobile and there's a hash, open the TOC
      if (window.innerWidth < 1280) { // 1280px is the xl breakpoint from Tailwind/UnoCSS default
        isMobileTocOpen.value = true
      }
    }
  } else if (links.value.length > 0) {
    activeId.value = links.value[0].id
  }

  observer.value = new IntersectionObserver(commonIntersectionLogic, {
    rootMargin: '-100px 0px -75% 0px',
    threshold: 0.1
  })

  links.value.forEach((link) => {
    const element = document.getElementById(link.id)
    if (element) {
      observedElements.value.set(element, link.id)
      observer.value?.observe(element)
    }
  })
})

onUnmounted(() => {
  if (observer.value) {
    observedElements.value.forEach(elementId => {
      const el = document.getElementById(elementId)
      if (el) observer.value?.unobserve(el)
    })
    observer.value.disconnect()
    observedElements.value.clear()
  }
})

const scrollToHeading = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    // Consider closing mobile TOC after navigation
    if (isMobileTocOpen.value) {
       // isMobileTocOpen.value = false // If we want to auto-close
    }
  }
}

const depthClasses = (depth: number) => {
  switch (depth) {
    case 2: return 'text-sm'
    case 3: return 'pl-4 text-sm'
    case 4: return 'pl-8 text-sm'
    default: return 'text-sm'
  }
}

const tocListClasses = 'list-none p-0 space-y-1' // Added list-none and p-0
const tocLinkItemClasses = (linkDepth: number, currentActiveId: string | null, linkId: string) => [
  'toc-link',
  depthClasses(linkDepth),
  {
    'text-pink-11 dark:text-pink-dark-11 font-medium': currentActiveId === linkId,
    'text-neutral-11 dark:text-neutral-dark-11 hover:text-neutral-12 dark:hover:text-neutral-dark-12': currentActiveId !== linkId
  }
]
const tocLinkClasses = 'block py-1 transition-colors duration-150'

</script>

<template>
  <div v-if="links.length">
    <!-- Mobile Collapsible View -->
    <div class="xl:hidden mb-6 border border-neutral-4 dark:border-neutral-dark-4 rounded-lg">
      <CollapsibleRoot v-model:open="isMobileTocOpen" class="w-full">
        <CollapsibleTrigger
          class="flex items-center justify-between w-full px-4 py-3 text-md font-medium text-neutral-12 dark:text-neutral-dark-12 hover:bg-neutral-2 dark:hover:bg-neutral-dark-2 rounded-t-lg focus-visible:ring-2 focus-visible:ring-pink-500 dark:focus-visible:ring-pink-dark-500"
          :aria-label="isMobileTocOpen ? 'Close table of contents' : 'Open table of contents'"
        >
          On this page
          <Icon
            name="lucide:chevrons-up-down"
            class="size-4 transition-transform duration-200"
            :class="{ 'rotate-180': isMobileTocOpen }"
          />
        </CollapsibleTrigger>
        <CollapsibleContent class="border-t border-neutral-4 dark:border-neutral-dark-4">
          <ScrollAreaRoot class="w-full max-h-[50vh] p-4">
            <ScrollAreaViewport class="h-full w-full">
              <ul :class="tocListClasses">
                <li
                  v-for="link in links"
                  :key="`mobile-${link.id}`"
                  :class="tocLinkItemClasses(link.depth, activeId, link.id)"
                >
                  <a
                    :href="`#${link.id}`"
                    :class="tocLinkClasses"
                    :aria-current="activeId === link.id ? 'true' : undefined"
                    @click.prevent="scrollToHeading(link.id)"
                  >
                    {{ link.text }}
                  </a>
                </li>
              </ul>
            </ScrollAreaViewport>
            <ScrollAreaScrollbar
              class="flex select-none touch-none p-0.5 bg-neutral-3 dark:bg-neutral-dark-3 transition-colors duration-[160ms] ease-out hover:bg-neutral-4 dark:hover:bg-neutral-dark-4 data-[orientation=vertical]:w-2.5"
              orientation="vertical"
            >
              <ScrollAreaThumb class="flex-1 bg-neutral-7 dark:bg-neutral-dark-7 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
            </ScrollAreaScrollbar>
          </ScrollAreaRoot>
        </CollapsibleContent>
      </CollapsibleRoot>
    </div>

    <!-- Desktop Floating View -->
    <nav
      class="fixed top-24 right-8 hidden xl:block w-64 p-4 space-y-2 bg-neutral-1 dark:bg-neutral-dark-1 border border-neutral-4 dark:border-neutral-dark-4 rounded-lg shadow-md max-h-[calc(100vh-7rem)]"
    >
      <h3 class="font-semibold mb-2 text-sm tracking-tight text-neutral-12 dark:text-neutral-dark-12">
        On this page
      </h3>
      <ScrollAreaRoot class="h-full w-full">
        <ScrollAreaViewport class="h-full w-full">
          <ul :class="tocListClasses">
            <li
              v-for="link in links"
              :key="`desktop-${link.id}`"
              :class="tocLinkItemClasses(link.depth, activeId, link.id)"
            >
              <a
                :href="`#${link.id}`"
                :class="tocLinkClasses"
                :aria-current="activeId === link.id ? 'true' : undefined"
                @click.prevent="scrollToHeading(link.id)"
              >
                {{ link.text }}
              </a>
            </li>
          </ul>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar
          class="flex select-none touch-none p-0.5 bg-neutral-3 dark:bg-neutral-dark-3 transition-colors duration-[160ms] ease-out hover:bg-neutral-4 dark:hover:bg-neutral-dark-4 data-[orientation=vertical]:w-2.5"
          orientation="vertical"
        >
          <ScrollAreaThumb class="flex-1 bg-neutral-7 dark:bg-neutral-dark-7 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
        </ScrollAreaScrollbar>
      </ScrollAreaRoot>
    </nav>
  </div>
</template>

<style scoped lang="scss">
// Minimal scoped styles as UnoCSS handles most things.
// Potentially useful for complex selectors or states not easily handled by UnoCSS.
</style>
