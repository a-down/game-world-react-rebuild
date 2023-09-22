


export default function SearchHistoryLink({search, searchForGames, setInputData}) {

function searchFromHistory() {
    setInputData({search: search.query, filter: search.filter})
    searchForGames(search.query, search.filter)
  }

  return (
    <button 
      className='text-neutral-50 underline text-sm text-left pr-4 ml-0' 
      key={search.query}
      onClick={searchFromHistory}>
        {search.query}
    </button>
  )
}