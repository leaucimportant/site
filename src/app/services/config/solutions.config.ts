export type ImpactivSolutionsEnum =
  | 'webApp'
  | 'dsm'
  | 'affluence'
  | 'screen'
  | 'all';

export const impactivSolutions: Record<ImpactivSolutionsEnum, string> = {
  webApp: 'applicationCollaborateur',
  dsm: 'developpementSurMesure',
  affluence: 'affluence',
  screen: 'affichageDynamique',
  all: '*',
};
