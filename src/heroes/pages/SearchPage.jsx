import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from '../components/HeroCard'
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)//npm i query-string

  const heroes = getHeroesByName(q)

  const { searchHero, onInputChange } = useForm({ searchHero: q });

  const onSearchSubmit = (e) => {
    e.preventDefault()

    if (searchHero.trim().length <= 1) return;

    //send query parameters
    navigate(`?q=${searchHero}`)

  }

  return (
    <>
      <h1 className="p-2 text-gray-600"><b>Search a Hero</b></h1>
      <hr />

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-5 text-white p-4">
          
          <form onSubmit={onSearchSubmit} aria-label="form">
            <input type="text"
              name="searchHero"
              className="border border-purple-500 p-2 m-2 rounded w-full focus:outline-none focus:ring-1 text-gray-500"
              onChange={onInputChange}
              value={searchHero}
              placeholder="For instance: Batman"
            />
            <div>
              <button
                className="btn btn-primary mt-1 ml-2 text-white">Search
              </button>
            </div>
          </form>

        </div>
        <div className="col-span-7 p-4">

          <h4 className="text-gray-500"><b>Results</b></h4>
          <hr />

          {heroes.length > 0 && <div className="alert m-2">
            <span>There are {heroes.length} results </span>
          </div>}

          {
            q.length !== 0 && heroes.length === 0 && <div aria-label="alert-danger" className="alert alert-error m-2">
              <span className="text-white">Hero <b>{q}</b> not found! </span>
            </div>
          }


          {heroes.map(hero => (
            <HeroCard key={hero.id} {...hero} />
          ))}

        </div>
      </div>


    </>
  )
}

