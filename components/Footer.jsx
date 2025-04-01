import FooterPartie3 from './components_Footer/FooterPartie3';
import FooterPartie2 from './components_Footer/FooterPartie2';
import FooterPartie1 from './components_Footer/FooterPartie1';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function Footer() {
 const { t } = useTranslation('footer');
 const [ready, setReady] = useState(false);

 useEffect(() => {
  setReady(true);
 }, []);

 if (!ready) return null; // Empêche le rendu tant que les traductions ne sont pas chargées

 return (
  <footer className="bg-Griclair text-white p-10">
   <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
    <FooterPartie1 />
    <FooterPartie2 />
   </div>
   <FooterPartie3 />
   <div className="text-center mt-10">
    <p>{t('footer.credits')}</p>
   </div>
  </footer>
 );
}
