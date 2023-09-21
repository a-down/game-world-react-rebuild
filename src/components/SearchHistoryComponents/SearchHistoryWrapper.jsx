import { SearchHistoryLink } from '../index'


export default function SearchHistoryWrapper({searchHistory, searchForGames, setInputData}) {

  let componentsArr = []
  for (let i = 0; i < 5; i++) {
    componentsArr.push(<SearchHistoryLink search={searchHistory[0]} searchForGames={searchForGames} setInputData={setInputData} key={i}/>)
  }

  return (
    <div>
      {componentsArr}
    </div>
  )
}