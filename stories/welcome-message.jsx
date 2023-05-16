import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

i18n.use( initReactI18next ).init({
    resources: {
        en: {
            translation: {
                "Welcome to DTO": "Welcome to Stroybook and react-i18next"
            },
        },
        fr: {
            translation: {
                "Welcome to DTO": "Bienvenue à Stroybook et react-i18next"
            },
        },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    }
});

export default function WelcomeMessage() {
  let { t } = useTranslation();
  return <>{ t( "Welcome to DTO") }</>;
}