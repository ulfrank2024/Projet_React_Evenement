'use client';

import { MdOutlineInstallDesktop } from 'react-icons/md';

import { useEffect, useState } from 'react';

export default function InstallPrompt() {
 const [installPrompt, setInstallPrompt] = useState(null);

 useEffect(() => {
  const getInstallPrompt = (event) => {
   event.preventDefault();
   setInstallPrompt(event);
  };

  window.addEventListener('beforeinstallprompt', getInstallPrompt);

  // Cleanup
  return () => {
   window.removeEventListener('beforeinstallprompt', getInstallPrompt);
  };
 }, [setInstallPrompt]);

 const handleClose = () => setInstallPrompt(null);

 const handleInstall = async () => {
  installPrompt.prompt();
  const { outcome } = await installPrompt.userChoice;
  console.log(outcome);
  if (outcome === 'accepted') {
   setInstallPrompt(null);
  }
 };

 return (
  installPrompt && (
   <div className=''>
    <div className="flex w-full justify-between p-2 bg-orangeclaire">
     <div className="flex items-center gap-2">
      <MdOutlineInstallDesktop />
      <button onClick={handleInstall}>Cliquer ici pour installer!</button>
     </div>
     <button onClick={handleClose}>&times;</button>
    </div>
   </div>
  )
 );
}
