import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import addClasses from 'rehype-add-classes'

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'http://puntoLedgal.com',
  integrations: [sitemap(), react(), tailwind()],
  markdown: {
    extendDefaultPlugin: true,
    rehypePlugins: [
      [
        addClasses,
        {
          h1: 'text-4xl font-blod font-mplus',
          h2: 'text-2xl font-blod font-mplus',
          h3: 'text-xl font-blod font-mplus',
          h4: 'text-lg font-blod font-mplus',
          h5: 'font-blod font-mplus',
          h6: 'font-blod font-mplus',
          img: 'border border-slate-300 dark:border-zinc-700 rounded-xl mb-6',
          p: 'mb-6',
          a: 'underline underline-offset-2 hover:text-orange-500 decoration-orange-500'
        }
      ]
    ]
  }
});