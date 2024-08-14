import { useNavigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers"
import { useMemo } from "react"

export const HeroPage = () => {

    const { heroeId } = useParams()
    const navigate = useNavigate()

    const heroe = useMemo( () => getHeroeById(heroeId), [ heroeId ])

    const onReturn = () => {
        navigate(-1)
    }

    return (

        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={`/assets/heroes/${heroe.id}.jpg`}
                    alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{heroe.superhero}</h2>
                <p> <b>Alterego:</b> {heroe.alter_ego}</p>

                <p> <b>Publishier:</b> {heroe.publisher}</p>

                <p> <b>First appearance:</b> {heroe.first_appearance}</p>


                <p><b>Characteres:</b></p>
                <p>{heroe.characters}</p>


                <div className="card-actions justify-end">
                    <button onClick={ onReturn } className="btn btn-primary">Back</button>
                </div>

            </div>
        </div>

    )
}

