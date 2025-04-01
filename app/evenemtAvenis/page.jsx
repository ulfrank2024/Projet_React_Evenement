import EvenementsAvenir from "@/components/EvenementsAvenir"
export const metadata = {
 title: 'School Events | Événements à venir',
 description: 'Consultez les événements à venir et inscrivez-vous.',
 openGraph: {
  title: 'School Events | Événements à venir',
  description: 'Consultez les événements à venir et inscrivez-vous.'
 },
};

export default function Page() {
    return <EvenementsAvenir/>
}