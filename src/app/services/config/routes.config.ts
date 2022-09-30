export type ImpactivRoutesEnum =
  | 'home'
  | 'contact'
  | 'mobileSolution'
  | 'screenSolution'
  | 'affluenceSolution'
  | 'integrationSolution'
  | 'company';

export const impactivRoutes: Record<ImpactivRoutesEnum, string> = {
  home: '',
  contact: 'contact',
  mobileSolution: 'solutions/mobile',
  screenSolution: 'solutions/affichage-dynamique',
  affluenceSolution: 'solutions/affluence',
  integrationSolution: 'solutions/integration',
  company: 'entreprise',
};
