import { ScullyConfig } from '@scullyio/scully';
// import { getRegexPlugin } from '@gammastream/scully-plugin-regex';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer';

// const RegexPlugin = getRegexPlugin();
// setPluginConfig(RegexPlugin, {
//   replacements: [],
// });

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
