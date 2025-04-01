'use client';
import { createContext, useState, useContext, useEffect } from 'react';
import i18next from '@/i18next.js';

// Création du contexte
const LanguageContext = createContext();

// Hook personnalisé pour accéder au contexte
export const useLanguage = () => useContext(LanguageContext);

export default function LanguageProvider({ children }) {
 const [language, setLanguage] = useState('fr');

 // Charger la langue depuis localStorage au premier rendu
 useEffect(() => {
  const storedLang = localStorage.getItem('lang');
  if (storedLang) {
   setLanguage(storedLang);
   i18next.changeLanguage(storedLang);
  }
 }, []);

 // Fonction pour changer la langue
 const changeLanguage = (lang) => {
  setLanguage(lang);
  localStorage.setItem('lang', lang);
  i18next.changeLanguage(lang);
 };

 return (
  <LanguageContext.Provider value={{ language, changeLanguage }}>
   {children}
  </LanguageContext.Provider>
 );
}
