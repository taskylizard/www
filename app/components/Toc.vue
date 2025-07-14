<!-- eslint-disable vue/no-root-v-if -->
<script setup lang="ts">
import { queryContent, useAsyncData, useRoute } from '#imports'
import {
  CollapsibleContent,
  CollapsibleRoot,
  CollapsibleTrigger,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport
} from 'radix-vue'
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'

const route = useRoute()
const { data: page } = await useAsyncData(`toc-${route.path}`, () =>
  queryContent(route.path).findOne())

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
      depth: Number.parseInt(node.tag!.substring(1), 10)
    }))
})

const activeId = ref<string | null>(null)
const observer = ref<IntersectionObserver | null>(null)
const observedElements = ref<Map<Element, string>>(new Map())
const isMobileTocOpen = ref(false)

function commonIntersectionLogic(entries: IntersectionObserverEntry[]) {
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
    const topEntry = intersectingEntries[0]!
    const topEntryId = observedElements.value.get(topEntry.target)

    if (topEntryId && topEntry.boundingClientRect.top <= 120) {
      activeId.value = topEntryId
    }
    else if (intersectingEntries.length === 1 && topEntryId) {
      activeId.value = topEntryId
    }
  }
}

onMounted(async () => {
  await nextTick()
  if (links.value.length === 0)
    return

  if (route.hash) {
    const initialActiveId = route.hash.substring(1)
    if (links.value.some(link => link.id === initialActiveId)) {
      activeId.value = initialActiveId
      // If on mobile and there's a hash, open the TOC
      if (window.innerWidth < 1280) { // 1280px is the xl breakpoint from Tailwind/UnoCSS default
        isMobileTocOpen.value = true
      }
    }
  }
  else if (links.value.length > 0) {
    activeId.value = links.value[0]!.id
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
    observedElements.value.forEach((elementId) => {
      const el = document.getElementById(elementId)
      if (el)
        observer.value?.unobserve(el)
    })
    observer.value.disconnect()
    observedElements.value.clear()
  }
})

function scrollToHeading(id: string) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    // Consider closing mobile TOC after navigation
    if (isMobileTocOpen.value) {
      // isMobileTocOpen.value = false // If we want to auto-close
    }
  }
}

function depthClasses(depth: number) {
  switch (depth) {
    case 2: return 'text-sm'
    case 3: return 'pl-4 text-sm'
    case 4: return 'pl-8 text-sm'
    default: return 'text-sm'
  }
}

const tocListClasses = 'list-none p-0 space-y-1' // Added list-none and p-0
function tocLinkItemClasses(linkDepth: number, currentActiveId: string | null, linkId: string) {
  return [
    'toc-link prose-a:no-underline',
    depthClasses(linkDepth),
    {
      'text-pink-11! font-medium!': currentActiveId === linkId,
      'text-neutral-11! hover:text-neutral-12!': currentActiveId !== linkId
    }
  ]
}
const tocLinkClasses = 'block py-1 transition-colors duration-150'
</script>

<template>
  <div v-if="links.length">
    <!-- Mobile Collapsible View -->
    <div class="mb-6 border border-neutral-4 rounded-lg xl:hidden">
      <CollapsibleRoot v-model:open="isMobileTocOpen" class="w-full">
        <CollapsibleTrigger
          class="text-md w-full flex items-center justify-between rounded-t-lg px-4 py-3 text-neutral-12 font-medium hover:bg-neutral-2 focus-visible:ring-2 focus-visible:ring-pink-500"
          :aria-label="isMobileTocOpen ? 'Close table of contents' : 'Open table of contents'">
          On this page
          <Icon name="lucide:chevrons-up-down" class="size-4 transition-transform duration-200"
            :class="{ 'rotate-180': isMobileTocOpen }" />
        </CollapsibleTrigger>
        <CollapsibleContent class="border-t border-neutral-4">
          <ScrollAreaRoot class="max-h-[50vh] w-full p-4">
            <ScrollAreaViewport class="h-full w-full">
              <ul :class="tocListClasses">
                <li v-for="link in links" :key="`mobile-${link.id}`"
                  :class="tocLinkItemClasses(link.depth, activeId, link.id)">
                  <a :href="`#${link.id}`" :class="tocLinkClasses"
                    :aria-current="activeId === link.id ? 'true' : undefined" @click.prevent="scrollToHeading(link.id)">
                    {{ link.text }}
                  </a>
                </li>
              </ul>
            </ScrollAreaViewport>
            <ScrollAreaScrollbar
              class="flex touch-none select-none bg-neutral-3 p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=vertical]:w-2.5 hover:bg-neutral-4"
              orientation="vertical">
              <ScrollAreaThumb
                class="relative flex-1 rounded-[10px] bg-neutral-7 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:min-w-[44px] before:w-full before:content-[''] before:-translate-x-1/2 before:-translate-y-1/2" />
            </ScrollAreaScrollbar>
          </ScrollAreaRoot>
        </CollapsibleContent>
      </CollapsibleRoot>
    </div>

    <!-- Desktop Floating View -->
    <nav
      class="fixed right-8 top-24 hidden max-h-[calc(100vh-7rem)] w-64 border border-neutral-4 rounded-lg bg-neutral-1 p-4 shadow-md xl:block space-y-2">
      <h3 class="mb-2 text-sm text-neutral-12 font-semibold tracking-tight">
        On this page
      </h3>
      <ScrollAreaRoot class="h-full w-full">
        <ScrollAreaViewport class="h-full w-full">
          <ul :class="tocListClasses">
            <li v-for="link in links" :key="`desktop-${link.id}`"
              :class="tocLinkItemClasses(link.depth, activeId, link.id)">
              <a :href="`#${link.id}`" :class="tocLinkClasses" :aria-current="activeId === link.id ? 'true' : undefined"
                @click.prevent="scrollToHeading(link.id)">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar
          class="flex touch-none select-none bg-neutral-3 p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=vertical]:w-2.5 hover:bg-neutral-4"
          orientation="vertical">
          <ScrollAreaThumb
            class="relative flex-1 rounded-[10px] bg-neutral-7 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:min-w-[44px] before:w-full before:content-[''] before:-translate-x-1/2 before:-translate-y-1/2" />
        </ScrollAreaScrollbar>
      </ScrollAreaRoot>
    </nav>
  </div>
</template>
