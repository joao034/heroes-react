import { HeroList } from "../components/HeroList"

export const DcPage = () => {
    return (
      <>
          <h1 className="p-2 text-gray-600"><b>DC Heroes</b></h1>
          <hr />
          <HeroList publisher={'DC Comics'} />
      </>
    )
  }
  