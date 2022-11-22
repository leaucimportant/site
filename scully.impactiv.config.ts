import { getSitemapPlugin } from '@gammastream/scully-plugin-sitemap';
import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
// import { getRegexPlugin } from '@gammastream/scully-plugin-regex';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer';

// const RegexPlugin = getRegexPlugin();
// setPluginConfig(RegexPlugin, {
//   replacements: [],
// });

const SitemapPlugin = getSitemapPlugin();
setPluginConfig(SitemapPlugin, {
  urlPrefix: 'https://impactiv.fr',
  sitemapFilename: 'sitemap.xml',
  changeFreq: 'monthly',
  priority: [
    '1.0',
    '0.9',
    '0.8',
    '0.7',
    '0.6',
    '0.5',
    '0.4',
    '0.3',
    '0.2',
    '0.1',
    '0.0',
  ],
  ignoredRoutes: ['/non-trouvee'],
  routes: {
    '/mentions-legales': {
      changeFreq: 'monthly',
      priority: '0.5',
    },
    '/contact': {
      changeFreq: 'monthly',
      priority: '0.7',
    },
    '/entreprise': {
      changeFreq: 'monthly',
      priority: '0.7',
    },
  },
});

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'impactiv',
  outDir: './public',
  routes: {
    '/cas-clients/:slug': {
      type: 'json',
      slug: {
        url: 'https://impactiv.s3.fr-par.scw.cloud/siteweb/casclients.json',
        property: 'slug',
      },
    },
  },
  // defaultPostRenderers: [RegexPlugin],
  puppeteerLaunchOptions: {
    args: [
      '--no-sandbox',
      '--disable-setuid--sandbox',
      //Config WSL
      '--disable-gpu',
      '--renderer',
      '--no-service-autorun',
      '--no-experiments',
      '--no-default-browser-check',
      '--disable-dev-shm-usage',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-extensions',
    ],
  },
};
