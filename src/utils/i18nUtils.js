// utils/i18nUtils.js
// import i18n from 'i18next';
import i18n from '../i18n/config'; // Assuming you have an i18n configuration file
import { useTranslation } from 'react-i18next';


// REACT LOCALIZATION i18n
export const _t = (val) => {
  const { t } = useTranslation();
  return t(val);
};

// Function to change the language dynamically
export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};

// Function to get the current language
export const getCurrentLanguage = () => {
  return i18n.language;
};

// Function to translate a key
export const translateKey = (key) => {
  return i18n.t(key);
};