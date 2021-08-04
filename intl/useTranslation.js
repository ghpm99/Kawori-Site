import { useSelector } from 'react-redux';
import { LangStrings } from "./Strings";

const defaultLocale = "ptbr";

export default function useTranslation() {
  
  const {language} = useSelector((state) => state.settings);

  function t(key) {
    if (!LangStrings[language][key]) {
      console.warn(`No string '${key}' for locale '${language}'`)
    }

    return LangStrings[language][key] || LangStrings[defaultLocale][key] || ""
  }

  return { t, language }
}