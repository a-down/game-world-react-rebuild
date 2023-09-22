import { SearchHistoryLink } from '../index'
import { useState, useEffect } from 'react'

export default function SearchHistoryWrapper({searchHistory, searchForGames, setInputData}) {
  const [ componentsArr, setComponentsArr ] = useState([])

  useEffect(() => {
    if (searchHistory.length > 4) {
      let arr = []
      for (let i = 0; i < 5; i++) {
        arr.push(<SearchHistoryLink search={searchHistory[i]} searchForGames={searchForGames} setInputData={setInputData} key={i}/>)
      }
      setComponentsArr(arr)
    } else {
      let arr = []
      searchHistory.map((search) => {
        arr.push(<SearchHistoryLink search={search} searchForGames={searchForGames} setInputData={setInputData}/>)
      })
      setComponentsArr(arr)
    }
  }, [searchHistory])

  

  

  return (
    <div className='flex flex-wrap justify-start'>
      {componentsArr}
    </div>
  )
}