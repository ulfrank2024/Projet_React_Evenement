import Link from "next/link"
import { useTranslation } from 'react-i18next';
export default function Bloc3() {
     const { t } = useTranslation('centre_aide');
    return (
     <div className="flex flex-col items-center mb-20 p-10  ">
      <hr className="border-t w-full mb-5" />
      <p className="text-2xl font-bold text-center">{t('aide.question')}</p>
      <button className="bg-orange-600 text-white  py-4 px-6 rounded-md transform transition duration-300 hover:scale-105 hover:shadow-xl mt-5">
       <Link href="/contact">{t('aide.contact')}</Link>
      </button>
     </div>
    );
}