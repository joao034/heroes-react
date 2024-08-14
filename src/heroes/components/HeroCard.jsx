import { Link } from "react-router-dom"

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    publisher,
    first_appearance,
    characters }) => {

    const imageUrl = `/assets/heroes/${id}.jpg`
    const charactersArray = characters.split(',')

    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={imageUrl}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{superhero}</h2>
                <p>{alter_ego}</p>

            <Link className="text-primary" to={`/hero/${id}`}>More info...</Link>

                <div className="flex flex-wrap justify-end">
                    {charactersArray.map(character => (
                        <div key={character} className="card-actions justify-end">
                            <button className="btn btn-primary m-1">{character}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}


