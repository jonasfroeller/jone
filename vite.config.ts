import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import mdx from 'fumadocs-mdx/vite';
import Icons from 'unplugin-icons/vite';
import * as MdxConfig from './source.config';

export default defineConfig({
  plugins: [
    mdx(MdxConfig),
    tailwindcss(),
    Icons({ compiler: 'jsx', jsx: 'react' }),
    reactRouter(),
    tsconfigPaths({
      projects: ['./tsconfig.json'],
    }),
  ],
  ssr: {
    external: ['@takumi-rs/image-response'],
  },
});
