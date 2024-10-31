import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  server: {
    port: 24700
  },
  build: {
    outDir: '../dist',
    sourcemap: true,
  }
}
