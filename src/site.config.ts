import type { ImageMetadata } from 'astro'

interface Project {
  title: string
  date: Date
  link: string
  image?: {
    light: ImageMetadata
    dark: ImageMetadata
  }
}

interface Link {
  [key: string]: string
}

export type SiteConfig = {
  title: string
  description: string
  links: Link
  projects: Project[]
}

export default {
  title: 'tasky',
  description: 'Shitposter by day, programmer by night.',
  links: {
    github: 'taskylizard',
    bluesky: 'tasky.nuxt.dev',
    rss: 'https://tasky.nuxt.dev/posts/rss.xml'
  },

  projects: [
    {
      title: 'vivivi',
      link: 'https://trunk.vivivi-647.pages.dev/',
      date: new Date('2025-06-07'),
      image: {
        light: {
          format: 'webp',
          height: 1080,
          width: 1920,
          src: '/sites/vivivi.webp',
          orientation: 0
        },
        dark: {
          format: 'webp',
          height: 1080,
          width: 1920,
          src: '/sites/vivivi.webp',
          orientation: 0
        }
      }
    },
    {
      title: 'Wotaku',
      link: 'https://wotaku.wiki/',
      date: new Date('2023-08-21'),
      image: {
        light: {
          format: 'jpg',
          height: 1080,
          width: 1920,
          src: '/sites/wotaku-light.jpg',
          orientation: 0
        },
        dark: {
          format: 'jpg',
          height: 1080,
          width: 1920,
          src: '/sites/wotaku-dark.jpg',
          orientation: 0
        }
      }
    },
    {
      title: 'freemediaheckyeah',
      link: 'https://fmhy.net/',
      date: new Date('2018-04-29')
    },
    {
      title: 'vyx',
      link: 'https://github.com/taskylizard/vyx',
      description: 'Personal discord bot for funsies.',
      date: new Date('2024-07-13')
    },
    {
      title: 'privateersclub',
      link: 'https://megathread.pages.dev',
      date: new Date('2021-04-14')
    }
  ]
} as SiteConfig
