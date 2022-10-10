import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { OgMeta } from '../seo.service';
import { impactivRoutes, ImpactivRoutesEnum } from './routes.config';

export const seoMeta: Record<ImpactivRoutesEnum, Required<OgMeta> | null> = {
  home: {
    title: 'Impactiv',
    type: 'website',
    image: '',
    url: environment.siteUri,
    description: 'Test SEO Home',
  },
  contact: {
    title: 'Contacter nous',
    type: 'website',
    image: '',
    url: Location.joinWithSlash(environment.siteUri, impactivRoutes.contact),
    description: 'Test SEO Contact',
  },
  affluenceSolution: null,
  collectiveExpertise: null,
  commercialeExpertise: null,
  company: null,
  confidentialites: null,
  cookies: null,
  integrationSolution: null,
  mobileSolution: null,
  propertyExpertise: null,
  screenSolution: null,
  surmesureExpertise: null,

  // notFound: null,
  // cgv: null,
  // mentionsLegales: null,
  // cookies: null,
  // pdc: null,
};
