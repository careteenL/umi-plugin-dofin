import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  plugins: [
    require.resolve('../dist/cjs')
  ],
  dofin: {
    key: 'smartCard'
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
