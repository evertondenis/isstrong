export const imports = {
  'src/components/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-index" */ 'src/components/index.mdx'),
  'src/components/Button/doc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-button-doc" */ 'src/components/Button/doc.mdx'),
  'src/components/Input/doc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-input-doc" */ 'src/components/Input/doc.mdx'),
  'src/components/Logo/doc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-logo-doc" */ 'src/components/Logo/doc.mdx'),
  'src/components/Password/doc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-password-doc" */ 'src/components/Password/doc.mdx'),
}
