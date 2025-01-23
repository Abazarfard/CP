import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'app.html',
      precompress: false,
      strict: true
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/https://abazarfard.github.io/CP/' : ''
    }
  }
};
