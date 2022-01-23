import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const locale = localStorage.getItem('locale') ?? 'tr';

i18n.use(initReactI18next).init({
  fallbackLng: locale,
  lng: locale,
  resources: {
    tr: {
      translations: require('./locales/tr.json')
    },
    en: {
      translations: require('./locales/en.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['tr', 'en'];

export default i18n;