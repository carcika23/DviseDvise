import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Crafting Your Digital World",
      welcomeDescription: "Let’s create the best digital world for your business together. Website and app development, modern design, social media management, and more — all in one place.",
      learnMore: "Learn More",
      navHome: "Home",
      navAbout: "About us",
      navServices: "Services",
      navPortfolio: "Portfolio",
      navPack: "Packages",
      navContact: "Contact"
    },
  },
  ge: {
    translation: {
      welcome: "შექმენით თქვენი ციფრული სამყარო",
      welcomeDescription: "ერთად შევქმნათ საუკეთესო ციფრული სამყარო თქვენი ბიზნესისთვის. საიტის და აპლიკაციის დეველოპმენტი, თანამედროვე დიზაინი, სოციალური მედიის მენეჯმენტი და ა.შ, ყველაფერი ერთ სივრცეში.",
      learnMore: "გაიგეთ მეტი",
      navHome: "მთავარი",
      navAbout: "ჩვენს შესახებ",
      navServices: "სერვისები",
      navPortfolio: "პორტფოლიო",
      navPack: "პაკეტები",
      navContact: "კონტაქტი"
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
