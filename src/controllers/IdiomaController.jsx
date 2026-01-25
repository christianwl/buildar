// Import de configuração
// configuração de internacionalização (i18n)
import "../config/i18n.jsx";

// Imports de Hooks
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function IdiomaController() {
  const { i18n } = useTranslation();

  // Inicializa o idioma selecionado com o valor armazenado no localStorage ou o padrão
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const linguaArmazenada = localStorage.getItem("language");
    return linguaArmazenada && linguaArmazenada !== i18n.language
      ? linguaArmazenada
      : i18n.language;
  });

  // localStorage.getItem('language');

  useEffect(() => {
    if (i18n.language !== selectedLanguage) {
      i18n.changeLanguage(selectedLanguage);
    }
  }, [selectedLanguage, i18n]);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    localStorage.setItem("language", event.target.value);
  };

  const isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

  return (
    <div className={`languageButton ${isFirefox ? "" : "fontEmoji"}`}>
      <select
        name="language"
        id="language"
        aria-label="Idioma"
        onChange={handleLanguageChange}
        value={selectedLanguage}
      >
        <option value="pt">🇧🇷</option>
        <option value="en-US">🇺🇸</option>
        <option value="es-ES">🇧🇴</option>
      </select>
    </div>
  );
}
