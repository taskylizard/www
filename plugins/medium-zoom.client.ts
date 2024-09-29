import type { Zoom } from 'medium-zoom'
import mediumZoom from 'medium-zoom'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((app) => {
  const selector = ':not(a) > img'
  const zoom: Zoom = mediumZoom(selector, {})

  // (re-)init for newly rendered page, also to work in SPA mode (client-side routing)
  app.hook('page:finish', () => {
    zoom.detach(selector).attach(selector)
  })

  // make available as helper to NuxtApp
  app.provide('mediumZoom', zoom)
})
