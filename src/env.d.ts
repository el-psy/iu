/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.md' {
  import { ComponentOptions } from 'vue';
  const Component: ComponentOptions;
  export default Component;
}

declare module 'prismjs'
declare module 'prismjs/components/index'
declare module 'escape-html'

// interface ImportMeta {
//   env: {
//     MODE: string
//     BASE_URL: string
//     PROD: boolean
//     DEV: boolean
//     SSR: boolean
//   }
// }
