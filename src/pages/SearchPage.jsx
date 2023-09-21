import { useState, useEffect } from 'react'
import { GameCard } from '../components'


export default function SearchPage() {
  const storage = JSON.parse(localStorage.getItem('Search History'))
  let previousSearches
  storage ? previousSearches = storage : previousSearches = []

  const [ inputData, setInputData ] = useState({search: '', filter: 'Sort By Highest Rating'})
  const [ displayedGames, setDisplayedGames ] = useState([])
  const [ searchHistory, setSearchHistory ] = useState(previousSearches)
  console.log(searchHistory)
  
  const apiKey = import.meta.env.VITE_API_KEY

  function handleInputChange(){
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
    // console.log(inputData)
  }

  function searchForGames(e) {
    e.preventDefault()
    let filter
    
    localStorage.setItem('Search History', JSON.stringify([...searchHistory, {query: inputData.search, filter: inputData.filter}]))
    setSearchHistory(JSON.parse(localStorage.getItem('Search History')))

    switch(inputData.filter) {
      case 'Sort By Highest Rating':
        filter = '-rating'
        break;
      case 'Sort By Lowest Rating':
        filter = 'rating'
        break;
    }

    let url = `https://api.rawg.io/api/games?search_precise=true&search=${inputData.search}&ordering=${filter}&key=${apiKey}`
    
    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        // console.log(data.results)
        setDisplayedGames(data.results)
        // console.log(searchHistory)
        // searchHistory 
        //   ? setSearchHistory([...searchHistory, {query: inputData.search, filter: inputData.filter}])
        //   : setSearchHistory([{query: inputData.search, filter: inputData.filter}])
        // console.log(searchHistory)
        // localStorage.setItem('Search History', JSON.stringify(searchHistory))
      })
    }
  
    // useEffect(() => {
    //   localStorage.setItem('Search History', JSON.stringify(searchHistory))
    // }, [setSearchHistory])

  return (
    <div className=' min-h-[calc(100vh-69px)] flex flex-col py-10 gap-10'>
      <div 
        className='flex flex-col gap-4 justify-start py-6 rounded-lg items-center mx-4 md:mx-10 lg:mx-24 xl:mx-48'
        style={{backgroundColor: 'rgb(46, 16, 101, 0.6)'}}>
        <h1 className='text-5xl text-violet-400 font-bold'>Search Game World</h1>

        <div className='flex flex-col gap-4 text-gray-900'>
          <input className="py-1 px-2 rounded-md w-80 bg-neutral-50" placeholder='game title' name='search' value={inputData.search} onChange={handleInputChange}/>
          <select className="py-1.5 px-2 rounded-md w-80 bg-neutral-50 text-gray-500" name='filter' value={inputData.filter} onChange={handleInputChange}>
            <option>Sort By Highest Rating</option>
            <option>Sort By Lowest Rating</option>
          </select>
        </div>

        <button
          className='bg-violet-600 border-1 text-neutral-50 font-semibold m-2 py-2 px-4 rounded-md shadow-md hover:opacity-80 hover:shadow-lg'
          onClick={searchForGames}
          type='submit' >
          Search Our World
        </button>
      </div>

      <div className="flex flex-wrap justify-around mx-4 md:mx-10 lg:mx-24 xl:mx-48">
        {displayedGames && (
          displayedGames.map((game) => (
            <GameCard game={game} featured={false} key={game.slug}/>
          ))
        )}
      </div>

    </div>
  )
}