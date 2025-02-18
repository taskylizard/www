export function useOpenpanel() {
  const nuxtApp = useNuxtApp()
  const op = nuxtApp.$op

  return {
    track: (...params: Parameters<typeof op.track>) => {
      if (import.meta.client)
        op.track(...params)
    },
    screenView: (...params: Parameters<typeof op.screenView>) => {
      if (import.meta.client)
        op.screenView(...params)
    },
    increment: (...params: Parameters<typeof op.increment>) => {
      if (import.meta.client)
        op.increment(...params)
    },
    decrement: (...params: Parameters<typeof op.decrement>) => {
      if (import.meta.client)
        op.decrement(...params)
    },
    clear: (...params: Parameters<typeof op.clear>) => {
      if (import.meta.client)
        op.clear(...params)
    }
  }
}
