import { HeroList } from "../components/HeroList"

export const MarvelPage = () => {
  return (
    <>
        <h1 className="p-2 text-gray-600"><b>Marvel Heroes</b></h1>
        <hr />
        
        <HeroList publisher={'Marvel Comics'} />

    </>
  )
}

