'use client';
import { createContext, useState, useContext, useEffect } from 'react';

// Création du contexte
const MyContext = createContext();

// Hook personnalisé pour utiliser le contexte
export const useMyContext = () => useContext(MyContext);

export default function MyContextProvider({ children }) {
 const [theme, setTheme] = useState('light');

 // Charger le thème depuis localStorage au premier rendu
 useEffect(() => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
   setTheme(storedTheme);
  }
 }, []); // Exécuté uniquement au premier rendu

 // Fonction pour changer le thème
 const toggleTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme); // Stocker le thème mis à jour
 };

 return (
  <MyContext.Provider value={{ theme, toggleTheme }}>
   {children}
  </MyContext.Provider>
 );
}
