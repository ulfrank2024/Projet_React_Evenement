'use client';
import doctList from '@/public/json/tendance.json';
import DisplayTendance from './DisplayTendance';
import { useTranslation } from 'react-i18next';
export default function TendancePopulaire() {
  const { t } = useTranslation('acceuil');
 return (
  <div className="flex flex-col  items-center   justify-center space-y-2 border-b border-gray-300">
   <p className="text-2xl p-6 text-center ">{t('acceuil.description')}</p>
   <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  p-1">
    {doctList.map((event) => (
     <DisplayTendance key={event.id} event={event} />
    ))}
   </div>
  </div>
 );
}
