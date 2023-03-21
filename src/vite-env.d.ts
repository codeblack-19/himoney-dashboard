/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent, DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare module 'vue-typed-js'