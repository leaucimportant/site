import { loadTranslations } from '@angular/localize';
import '@angular/localize/init';

import { impactivEn } from './translations-en/impactiv.en';
import { impactivFr } from './translations-fr/impactiv.fr';

export const loadLocalTranslations = () => {
  const lang = getLanguage();
  if (lang === 'en') {
    loadTranslations(impactivEn);
  } else {
    loadTranslations(impactivFr);
  }
};

export const getLanguage: () => 'en' | 'fr' | null = () => {
  const lang = localStorage.getItem('lng');
  if (lang === 'en' || lang === 'fr') {
    return lang;
  }
  return null;
};

export const setLanguage = (lang: 'en' | 'fr' | null) => {
  if (lang == null) {
    localStorage.removeItem('lng');
  } else {
    localStorage.setItem('lng', lang);
  }
};
