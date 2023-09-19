import Carousel from './Carousel'
import CarouselButton from './CarouselButton'
import { useState, useEffect } from 'react'


export default function CarouselWrapper() {
  const [ displayParam, setDisplayParam ] = useState('')
  const [ weeksGames, setWeeksGames ] = useState([])
  const [ monthsGames, setMonthsGames ] = useState([])
  const [ yearsGames, setYearsGames ] = useState([])
  const [ displayedGames, setDisplayedGames ] = useState([])

  const apiKey = import.meta.env.VITE_API_KEY
  let todayDate = new Date().toISOString().split('T')[0]
  let oneWeekAgo = new Date(new Date() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  let oneMonthAgo = new Date(new Date() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  let oneYearAgo = new Date(new Date() - 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

  function fetchGames(arg) {
    let url
    switch (arg) {
      case 'year':
        url = `https://api.rawg.io/api/games?&page=1&page_size=6&dates=${oneYearAgo},${todayDate}&ordering=-rating&key=${apiKey}`
        break;
      case 'month':
        url = `https://api.rawg.io/api/games?&page=1&page_size=6&dates=${oneMonthAgo},${todayDate}&ordering=-rating&key=${apiKey}`
        break;
      case 'week':
        url = `https://api.rawg.io/api/games?&page=1&page_size=6&dates=${oneWeekAgo},${todayDate}&ordering=-rating&key=${apiKey}`
        break;
    }

    fetch(url)
    .then((resp) => {
      return resp.json()
    })
    .then((data) => {
      switch (arg) {
        case 'year':
          setYearsGames(data.results)
          break;
        case 'month':
          setMonthsGames(data.results)
          break;
        case 'week':
          setWeeksGames(data.results)
          break;
      }
    })
  }

  useEffect(() => {
    fetchGames('year')
    fetchGames('month')
    fetchGames('week')
  }, [apiKey])

  useEffect(() => {
    displayGames('year')
  }, [yearsGames])

  function displayGames(arg) {
    switch(arg) {
      case 'week':
        setDisplayedGames(weeksGames)
        setDisplayParam('week')
        break;
      case 'month':
        setDisplayedGames(monthsGames)
        setDisplayParam('month')
        break;
      case 'year':
        setDisplayedGames(yearsGames)
        setDisplayParam('year')
        break;
    }
  }
  
  return (
    <div 
      // style={{backgroundColor: 'rgb(46, 16, 101, 0.2)'}}
      className='flex flex-col gap-4 rounded-lg px-8 md:px-14 lg:px-28 xl:px-52'>
      <h2 className='text-2xl text-violet-400 font-bold text-center pt-4'>Most popular games released in the past {displayParam}:</h2>

      <Carousel games={displayedGames}/>

      <div className='flex justify-between'>
        <CarouselButton text={'Year'} action={() => displayGames('year')}/>
        <CarouselButton text={'Month'} action={() => displayGames('month')}/>
        <CarouselButton text={'Week'} action={() => displayGames('week')}/>
      </div>
      
    </div>
  )
}