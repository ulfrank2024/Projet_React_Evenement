import Connexion from "@/components/Connexion"
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
export const metadata = {
 title: 'School Events | Se connecter',
 description: 'Accédez à votre compte pour gérer vos événements et activités.',
 openGraph: {
  title: 'School Events | Se connecter',
  description: 'Accédez à votre compte pour gérer vos événements et activités.',
  images: ['./react.webp'],
 },
};

export default function Page() {
    return <Connexion/>
}