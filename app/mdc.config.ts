import { defineConfig } from '@nuxtjs/mdc/config'
import {
  transformerMetaHighlight,
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
} from '@shikijs/transformers'
import { transformerColorHighlight } from 'shiki-transformer-color-highlight'

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
      transformerColorHighlight()
    ]
  }
})
