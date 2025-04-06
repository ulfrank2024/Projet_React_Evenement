import { FaSearch } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
export default function Bloc1() {
    const { t } = useTranslation('centre_aide');
  return (
   <div className="flex flex-col items-center space-y-10 p-10">
    <h1 className="text-customBlue font-bold md:text-5xl text-3xl text-center ">
     {' '}
     {t('aide.titre')}
    </h1>
    <div className="flex items-center justify-center space-x-3 shadow-xl border border-gray-300 rounded-full p-4 w-80 bg-white">
     <button aria-label="search">
      <FaSearch className="text-black" />
     </button>

     <input
      type="text"
      placeholder={t('aide.recherche')}
      className="w-full outline-none text-black "
     />
    </div>
   </div>
  );
}
