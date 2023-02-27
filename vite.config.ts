import { defineConfig } from 'vite'
import { SearchPlugin } from 'vitepress-plugin-search'
import { Segment } from 'segment'

const segment = new Segment()
segment.useDefault()

export default defineConfig({
  plugins: [
    SearchPlugin({
      // https://github.com/emersonbottero/vitepress-plugin-search/issues/11#issuecomment-1328150584
      encode: (str: string) => segment.doSegment(str, { simple: true }),
      tokenize: 'forward',
    } as any),
  ],
})
