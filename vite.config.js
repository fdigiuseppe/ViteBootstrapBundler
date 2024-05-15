import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  define: {
    __VALUE__: `"${process.env.VALUE}"`
  },
  build: {
    outDir: '../dist'
  },
  server: {
    port: 9999
  }
}
