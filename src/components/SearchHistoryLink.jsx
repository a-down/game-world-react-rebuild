import { useEffect } from "react"



export default function SearchHistoryLink({search, searchForGames, setInputData}) {

  function searchFromHistory() {
    setInputData({search: search.query, filter: search.filter})
    searchForGames()
  }

  return (
    <button 
      className='text-neutral-50 underline text-sm pr-4' 
      key={search.query}
      onClick={searchFromHistory}>{search.query}</button>
  )
}