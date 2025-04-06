'use client'
import Image from 'next/image';
import Link from 'next/link';
import { MdInsertInvitation } from 'react-icons/md';
import { useTranslation } from 'react-i18next';


export default function Page_acceuil() {
     const { t } = useTranslation('acceuil');
 return (
  <div className="relative h-96 flex items-center justify-center">
   {/* Utilisation de next/image pour charger l’image de manière optimisée */}
   <Image
    src="/image/image1_acceuil.webp"
    alt="School Events"
    layout="fill"
    objectFit="cover"
    priority // Charge cette image en priorité pour améliorer le LCP
    quality={80} // Réduction de la taille du fichier sans perte visible de qualité
    className="absolute"
   />

   <div className="relative flex flex-col p-5 bg-Griclair text-white rounded-xl justify-center">
    <p className="text-2xl md:text-5xl mb-10">{t('acceuil.titre')}</p>

    <Link
     href="/evenemtAvenis"
     className="text-center transform transition duration-300 hover:scale-105 bg-orange-600 text-white  pt-3 pb-3 ps-2 rounded-xl"
    >
     <div className="flex items-center space-x-3 justify-center">
      <p>{t('acceuil.inscrit')}</p>
      <MdInsertInvitation />
     </div>
    </Link>
   </div>
  </div>
 );
}
