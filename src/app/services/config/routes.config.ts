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
  | 'mentionsLegales';

export const impactivRoutes: Record<ImpactivRoutesEnum, string> = {
  home: '',
  contact: 'contact',
  webAppSolution: 'solution/application-collaborateurs',
  screenSolution: 'solution/affichage-dynamique',
  affluenceSolution: 'solution/affluence',
  dsmSolution: 'solution/developpement-sur-mesure',
  company: 'entreprise',
  mentionsLegales: 'mentions-legales',
  useCase: 'cas-client',
};

export const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 120],
};
