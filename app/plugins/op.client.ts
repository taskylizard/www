import { defineNuxtPlugin } from '#app'
import { OpenPanel } from '@openpanel/web'

export default defineNuxtPlugin(
  {
    name: 'op',
    enforce: 'pre',
    async setup() {
      const op = new OpenPanel({
        apiUrl: 'https://op.fmhy.net/api',
        clientId: '5dec537c-f98f-4465-aef3-6f4a1c583ebc',
        trackScreenViews: true,
        trackOutgoingLinks: true,
        trackAttributes: true
      })

      op.init()
      // expose on window for debugging
      // @ts-expect-error uhhh
      window.op = op

      return {
        provide: {
          op
        }
      }
    }
  }
)
