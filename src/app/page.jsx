import Image from "next/image";
import AssignmentCard  from "@/component/assignment-card";

export default function Home() {
  const assignments = [
    {url : "https://wotv-calc.com/assets/units/f07aclud_full.webp", name : "Cloud" , text : "A young man who appears in the story of a distant world, seeking to rebuild after the calamity known as Meteorfall. When yet another crisis threatens the planet, Cloud finds the will to face a new fight—and an old nemesis—together with his former comrades." },
    {url : "https://wotv-calc.com/assets/units/f07asprt_full.webp", name : "Sephiroth" , text : "An elite Shinra-created SOLDIER from a distant world who became an enemy to all humanity after learning the true nature of his birth. Though he was defeated once before, Sephiroth has returned thanks to the Reunion of Kadaj—his Remnant. Now reborn, he faces his nemesis Cloud anew."},
    {url : "https://wotv-calc.com/assets/units/f07akdaj_full.webp", name : "Kadaj" , text : "The leader of the Remnants bent on exacting revenge against the planet. Subject to Jenova's will, he is determined to make the Reunion a reality. Kadaj confronts Rufus, aware that Shinra is in possession of Jenova's remains, but is fooled by the former company president into hunting down Cloud."},
    {url : "https://wotv-calc.com/assets/units/f07atifa_full.webp", name : "Tifa" , text : "A young woman who appears in the story of a distant world, seeking to rebuild after the calamity known as Meteor struck. After saving the planet from destruction, she lived a peaceful life until a new crisis reared its head. Fighting alongside her comrades and giving Cloud the push that he needed, Tifa watches vigilantly as he takes on his revived nemesis."},
  ];
  
  return (
    <div className="">
      <div>
          {
            assignments.map((assignment) => (
              <AssignmentCard key={assignment.id}
               imgURL={assignment.url} 
               imgName={assignment.name}
               imgText={assignment.text}
              />
            ))
          }
      </div>
    </div>
  );
}
