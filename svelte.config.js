import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';


const config = {
  preprocess: sveltePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: true,
      strict: true
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/https://github.com/Abazarfard/CP.git/.svelte-kit' : ''
    }
};

export default config;
