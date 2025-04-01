'use client';
import { useState, useEffect } from 'react';
import { RxDividerVertical } from 'react-icons/rx';
import { IoSearchCircleSharp } from 'react-icons/io5';
import { FiMapPin } from 'react-icons/fi';
import { WiDirectionLeft } from 'react-icons/wi';
import { useTranslation } from 'react-i18next';

export default function HeaderParti1() {
 const { t, i18n } = useTranslation('header');
 const [ready, setReady] = useState(false);

 // Attendre que la langue soit chargée pour éviter l'hydratation incorrecte
 useEffect(() => {
  setReady(true);
 }, []);

 if (!ready) return null; // Empêche le rendu tant que les traductions ne sont pas prêtes

 return (
  <div className="flex flex-col md:flex-row items-center justify-center h-auto md:h-10 md:p-0 space-y-3 md:space-y-0">
   <div className="flex items-center md:w-40 bg-white rounded-3xl ps-4 pe-4">
    <button aria-label="Revenir en arrière" className="flex-shrink-0">
     <WiDirectionLeft className="text-black text-2xl" />
    </button>
    <input
     type="text"
     placeholder={t('header.search') || 'Search...'}
     className="w-full px-2 py-2 outline-none text-black rounded-md text-center"
    />
   </div>
   <RxDividerVertical className="hidden md:block text-2xl" />
   <div className="flex items-center md:w-40 bg-white rounded-3xl ps-4 pe-4">
    <FiMapPin className="text-black text-2xl flex-shrink-0" />
    <input
     type="text"
     placeholder="Ottawa..."
     className="w-full py-2 outline-none text-black rounded-md text-center"
    />
    <button aria-label="Rechercher" className="flex-shrink-0">
     <IoSearchCircleSharp className="text-black text-2xl" />
    </button>
   </div>
  </div>
 );
}
