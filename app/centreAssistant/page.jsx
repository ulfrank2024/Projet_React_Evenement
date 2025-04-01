import CentreAssistance from "@/components/CentreAssistance"
export const metadata = {
 title: 'School Events | Centre d’Assistance',
 description: 'Besoin d’aide ? Trouvez toutes les réponses ici.',
 openGraph: {
  title: 'School Events | Centre d’Assistance',
  description: 'Besoin d’aide ? Trouvez toutes les réponses ici.',
  images: ['./react.webp'],
 },
};

export default function Page() {
    return <CentreAssistance/>
}