import Home from "@/components/Home";
export const metadata = {
 title: 'School Events | Accueil',
 description: 'Découvrez les événements et activités scolaires à venir.',
 openGraph: {
  title: 'School Events | Accueil',
  description: 'Découvrez les événements et activités scolaires à venir.',
  images: ['./react.webp'],
 },
};


export default function Page() {
  return (
    <main className="flex-1 flex-col justify-center items-center">
      <Home/> 
    </main>
  );
}
