import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './i18n/en';

const resources = {
  en,
};

i18n
  // passes i18n down to react-i18next
  .use(initReactI18next)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a
    // UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources,
    // if you're using a language detector, do not define the lng option
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      escapeValue: false,
    },
  });
