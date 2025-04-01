import doctList from "@/public/json/ActiviteScolaire.json";
import DisplayActiviteScolaire from "./DisplayActiviteScolaire";

export default function ActiviteScolaire() {
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <a
        href="#"
        className="text-xl text-blue-800 p-6 hover:text-blue-500 font-bold"
      >
        Explorez les Activités Scolaires
      </a>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 p-4">
        {doctList.map((event) => (
          <DisplayActiviteScolaire key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
