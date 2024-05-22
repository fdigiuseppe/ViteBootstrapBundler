import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  define: {
    __VALUE__: `"${process.env.VALUE}"`
  },
  build: {
    outDir: '../dist',
    rollupOptions: {
      output: {
          assetFileNames: "assets/[name].[ext]",
          chunkFileNames: "assets/[name].[ext]",
          entryFileNames: "assets/[name].js",
          },
      },
      write: true,
  },
  server: {
    port: 9999
  }
}
