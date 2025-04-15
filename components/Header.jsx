'use client';

import Image from 'next/image';
import HeaderRecherche from './components_Header/HeaderRecherche.jsx';
import NavBar from './components_Header/NavBar.jsx';
import logo from '@/public/image/logo.webp';
import Link from 'next/link.js';
import InstallPrompt from './InstallPrompt.jsx';


export default function Header() {
 

 return (
  <header>
   <nav className="bg-customBlue text-white">
    <div className="flex flex-col md:flex-row mx-auto px-4 ps-10 pe-10 flex items-center justify-between pb-5">
     <Link href="/">
      <Image
       src={logo}
       alt="Logo du site web"
       width={100}
       className="items-start cursor-pointer"
      />
     </Link>

     <div className="flex flex-col md:flex-row space-x-5 space-y-5 md:space-y-0 items-center">
      <HeaderRecherche />
      <NavBar />
     </div>
    </div>
    <InstallPrompt/>
   </nav>
  </header>
 );
}
