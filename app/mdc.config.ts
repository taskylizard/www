import { defineConfig } from '@nuxtjs/mdc/config'
import {
  transformerNotationDiff,
  transformerMetaHighlight,
  transformerNotationFocus,
  transformerNotationErrorLevel
} from '@shikijs/transformers'
import { transformerColorHighlight } from 'shiki-transformer-color-highlight'
import type { ShikiTransformer } from '@shikijs/types'
import type { ElementContent } from 'hast'
import { isUndefined } from '@antfu/utils'

export const parseTitleString = (meta: string): string | null => {
  if (!meta) return null
  const match = meta.match(/title="([^"]+)"/)
  if (!match) return null
  if (isUndefined(match[1])) return null
  return match[1]
}

interface TransformerTitleOptions {
  classBlock?: string
  classTitle?: string
}

/**
 * Allow using `title="index.ts"` in the code snippet meta to add an extra file title.
 */
const transformerMetaTitle = (
  options: TransformerTitleOptions = {}
): ShikiTransformer => {
  const {
    classBlock = 'shiki-code-block',
    classTitle = 'shiki-code-block-title'
  } = options

  return {
    name: 'shiki:transformer:title',
    root(node) {
      if (!this.options.meta?.__raw) {
        return
      }
      const title = parseTitleString(this.options.meta.__raw)

      if (title) {
        node.children = [
          {
            type: 'element',
            tagName: 'div',
            properties: {
              class: classBlock
            },
            children: [
              {
                type: 'element',
                tagName: 'div',
                properties: {
                  class: classTitle
                },
                children: [
                  {
                    type: 'text',
                    value: title
                  }
                ]
              },
              ...node.children.map(child => child as ElementContent)
            ]
          }
        ]
      }
    }
  }
}

export default defineConfig({
  shiki: {
    transformers: [
      transformerNotationDiff(),
      transformerNotationFocus({
        classActiveLine: 'has-focus',
        classActivePre: 'has-focused-lines'
      }),
      transformerMetaHighlight(),
      transformerNotationErrorLevel(),
      transformerColorHighlight(),
      transformerMetaTitle()
    ]
  }
})
