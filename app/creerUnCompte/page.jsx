import CreerUnCompte from "@/components/CreerUnCompte"
export const metadata = {
 title: 'School Events | Créer un compte',
 description: 'Inscrivez-vous pour participer aux événements scolaires.',
 openGraph: {
  title: 'School Events | Créer un compte',
  description: 'Inscrivez-vous pour participer aux événements scolaires.',
  images: ['./react.webp'],
 },
};

export default function Page() {
    return <CreerUnCompte/>
}