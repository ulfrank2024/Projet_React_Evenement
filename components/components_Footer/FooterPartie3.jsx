'use client'
import Image from "next/image";
import { useLanguage } from "@/provider/LanguageContextProvider";
import { useTranslation } from 'react-i18next';
import logo_tiktok from "@/public/image/logo_tik.webp";
import logo_insta from "@/public/image/logo_instagram.webp";
export default function FooterPartie3() {
  const { t } = useTranslation('footer');
  const {language} = useLanguage()
    return (
     <div className="flex flex-col md:flex-row justify-between md:mt-20 md:mb-20 space-y-8 md:space-y-0">
      <div>
       <h2 className="mb-3 mt-2 text-red-200">{t('footer.language')}</h2>

       <select
        value={language}
        disabled
        className="text-black mt-0 md:mt-4"
        aria-label="Langue"
       >
        <option value="en">EN</option>
        <option value="fr">FR</option>
       </select>
      </div>
      <div className="flex flex-col items-center">
       <p className="text-sm">{t('footer.socials')}</p>
       <div className="flex space-x-4 mt-3">
        <Image
         src={logo_tiktok}
         alt="Logo TikTok"
         width={40}
         height={40} // Ajout de la hauteur
         className="rounded-md object-cover"
        />
        <Image
         src={logo_insta}
         alt="Logo Instagram"
         width={40}
         height={40} // Ajout de la hauteur
         className="rounded-md object-cover"
        />
       </div>
      </div>
     </div>
    );
  }
  