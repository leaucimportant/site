import { ExtraOptions } from '@angular/router';

export type ImpactivRoutesEnum =
  | 'home'
  | 'contact'
  | 'mobileSolution'
  | 'screenSolution'
  | 'affluenceSolution'
  | 'integrationSolution'
  | 'company'
  | 'cookies'
  | 'usecaseSodexo'
  | 'usecaseLaMira'
  | 'usecaseAspp'
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
  usecaseSodexo: 'usecase/sodexo',
  usecaseLaMira: 'usecase/lamira',
  usecaseAspp: 'usecase/aspp',
};

export const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 120],
};