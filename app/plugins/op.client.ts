import { OpenPanel } from '@openpanel/web';

const op = new OpenPanel({
  apiUrl: "https://op.fmhy.net/api",
  clientId: '5dec537c-f98f-4465-aef3-6f4a1c583ebc',
  trackScreenViews: true,
  trackOutgoingLinks: true,
  trackAttributes: true,
});


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('op', op);
});
