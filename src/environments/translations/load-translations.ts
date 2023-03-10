import { loadTranslations } from '@angular/localize';
import '@angular/localize/init';

import { impactivEn } from './impactiv.en';
import { impactivEs } from './impactiv.es';
import { impactivFr } from './impactiv.fr';

export const loadLocalTranslations = () => {
  const lang = getLanguage();

  if (lang === 'en') {
    loadTranslations(impactivEn);
  } else if (lang === 'es') {
    loadTranslations(impactivEs);
  } else {
    loadTranslations(impactivFr);
  }
};

export const getLanguage: () => string | null = () => {
  const lang = localStorage.getItem('lng');
  if (lang) {
    return lang;
  }
  return null;
};

export const setLanguage = (lang: string | null) => {
  if (lang == null) {
    localStorage.removeItem('lng');
  } else {
    localStorage.setItem('lng', lang);
  }
};
