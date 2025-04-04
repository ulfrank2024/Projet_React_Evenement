'use client';
import HeaderLogin from './HearderLogin';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { IoSunnySharp } from 'react-icons/io5';
import { FaMoon } from 'react-icons/fa';
import { useMyContext } from '@/provider/MyContextProvider.jsx';
import { useLanguage } from '@/provider/LanguageContextProvider.jsx';

export default function NavBar() {
 const { t, i18n } = useTranslation('header');
 const [isOpen, setIsOpen] = useState(false);
 const [ready, setReady] = useState(false);
 const { theme, toggleTheme } = useMyContext();
 const { language, changeLanguage } = useLanguage();

 // Attendre que la langue soit chargée pour éviter le décalage SSR/Client
 useEffect(() => {
  setReady(true);
 }, []);

 if (!ready) return null; // Empêche le rendu côté serveur avec des valeurs incorrectes

 const handleMobileLinkClick = () => {
  setIsOpen(false);
 };

 return (
  <div className="flex flex-col items-center space-y-4 mt-5 mb-5">
   <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? <FiX /> : <FiMenu />}
   </button>
   <ul className="hidden md:flex space-x-4 text-sm items-center">
    <li>
     <Link href="/" className="hover:text-blue-300">
      {t('header.acceuil')}
     </Link>
    </li>
    <li>
     <Link href="/evenemtAvenis" className="hover:text-blue-300">
      {t('header.event')}
     </Link>
    </li>
    <li>
     <Link href="/centreAssistant" className="hover:text-blue-300">
      {t('header.assist')}
     </Link>
    </li>
    <li>
     <Link href="/contact" className="hover:text-blue-300">
      {t('header.contact')}
     </Link>
    </li>
    <li>
     <HeaderLogin />
    </li>
    <li>
     {ready && (
      <div className="flex space-x-3">
       <button
        aria-label="mode_couleur"
        className="text-2xl"
        onClick={toggleTheme}
       >
        {theme === 'light' ? <FaMoon /> : <IoSunnySharp />}
       </button>
       <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="text-black"
        aria-label="Langue"
       >
        <option value="en">EN</option>
        <option value="fr">FR</option>
       </select>
      </div>
     )}
    </li>
   </ul>
   {isOpen && (
    <ul className="md:hidden flex flex-col space-y-2 p-10 text-start border-t bg-Griclair rounded-3xl">
     <li>
      <Link href="/" className="block py-2" onClick={handleMobileLinkClick}>
       {t('header.acceuil')}
      </Link>
     </li>
     <li>
      <Link
       href="/evenemtAvenis"
       className="block py-2"
       onClick={handleMobileLinkClick}
      >
       {t('header.event')}
      </Link>
     </li>
     <li>
      <Link
       href="/centreAssistant"
       className="block py-2"
       onClick={handleMobileLinkClick}
      >
       {t('header.assist')}
      </Link>
     </li>
     <li>
      <Link
       href="/contact"
       className="block py-2"
       onClick={handleMobileLinkClick}
      >
       {t('header.contact')}
      </Link>
     </li>
     <li className="">
      <HeaderLogin />
     </li>
     <li>
      {ready && (
       <div className="flex justify-between">
        <button
         aria-label="mode_couleur"
         className="text-2xl"
         onClick={toggleTheme}
        >
         {theme === 'light' ? <FaMoon /> : <IoSunnySharp />}
        </button>
        <select
         value={language}
         onChange={(e) => changeLanguage(e.target.value)}
         className="text-black"
         aria-label="Langue"
        >
         <option value="en">EN</option>
         <option value="fr">FR</option>
        </select>
       </div>
      )}
     </li>
    </ul>
   )}
  </div>
 );
}
