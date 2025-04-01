import Connexion from "@/components/Connexion"
export const metadata = {
 title: 'School Events | Se connecter',
 description: 'Accédez à votre compte pour gérer vos événements et activités.',
 openGraph: {
  title: 'School Events | Se connecter',
  description: 'Accédez à votre compte pour gérer vos événements et activités.'
 },
};

export default function Page() {
    return <Connexion/>
}