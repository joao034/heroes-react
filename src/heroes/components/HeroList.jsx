import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher(publisher), [ publisher ])

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {heroes.map(heroe => (
                    <HeroCard key={heroe.id} { ...heroe }/>
                ))}
            </div>
        </div>
    );

}

