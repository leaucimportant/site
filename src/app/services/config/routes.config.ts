import { ExtraOptions } from '@angular/router';

export type ImpactivRoutesEnum =
  | 'home'
  | 'contact'
  | 'mobileSolution'
  | 'screenSolution'
  | 'affluenceSolution'
  | 'integrationSolution'
  | 'company'
  | 'collectiveExpertise'
  | 'commercialeExpertise'
  | 'propertyExpertise'
  | 'surmesureExpertise'
  | 'cookies'
  | 'confidentialites';

export const impactivRoutes: Record<ImpactivRoutesEnum, string> = {
  home: '',
  contact: 'contact',
  mobileSolution: 'solutions/mobile',
  screenSolution: 'solutions/affichage-dynamique',
  affluenceSolution: 'solutions/affluence',
  integrationSolution: 'solutions/integration',
  company: 'entreprise',
  cookies: 'cookies',
  confidentialites: 'confidentialites',
  collectiveExpertise: 'expertises/collective',
  commercialeExpertise: 'expertises/commerciale',
  propertyExpertise: 'expertises/property',
  surmesureExpertise: 'expertises/surmesure',
};

export const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 120],
};