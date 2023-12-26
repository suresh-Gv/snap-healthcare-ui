// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './translations';

i18n
  .use(initReactI18next)
  .init({
    resources:translations,// Define your translation resources here
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;