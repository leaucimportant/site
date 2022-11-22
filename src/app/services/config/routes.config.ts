import { ExtraOptions } from '@angular/router';

export type ImpactivRoutesEnum =
  | 'home'
  | 'contact'
  | 'webAppSolution'
  | 'screenSolution'
  | 'affluenceSolution'
  | 'dsmSolution'
  | 'company'
  | 'useCase'
  | 'notFound'
  | 'mentionsLegales';

export const impactivRoutes: Record<ImpactivRoutesEnum, string> = {
  home: '',
  contact: 'contact',
  webAppSolution: 'solutions/application-collaborateurs',
  screenSolution: 'solutions/affichage-dynamique',
  affluenceSolution: 'solutions/affluence',
  dsmSolution: 'solutions/developpement-sur-mesure',
  company: 'entreprise',
  notFound: 'non-trouvee',
  mentionsLegales: 'mentions-legales',
  useCase: 'cas-clients',
};

export const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 120],
};
