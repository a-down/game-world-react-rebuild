import { SearchHistoryLink } from './index'


export default function SearchHistoryWrapper({searchHistory, searchForGames, setInputData}) {
  
let componentsArr = []
  for (let i = 0; i < 5; i++) {
    componentsArr.push(<SearchHistoryLink search={searchHistory[i]} searchForGames={searchForGames} setInputData={setInputData}/>)
  }

  return (
    <div>
      {componentsArr}
    </div>
  )
}