import zeldaBg from '../assets/zelda-bg.jpg'
import { Button } from '../components/ui'
import { Carousel } from '../components'
import {
  SiPlaystation,
  SiXbox,
  SiNintendoswitch,
  SiSteam
} from 'react-icons/si'


export default function Homepage() {

  function searchButton(){
    window.location.href = '/search'
  }

  return (
    <>
      <div 
        // style={{
        // backgroundImage: `url(${zeldaBg})`, 
        // backgroundRepeat: 'no-repeat', 
        // backgroundSize: 'cover', 
        // backgroundPosition: 'center',
        // filter: 'grayscale(80%)'
        // }}
        className='bg-neutral-50'
        >
        <div className='flex flex-col gap-4 justify-start py-16 items-center'>
          <h1 className='text-5xl text-violet-900 font-bold'>Game World</h1>

          <div className='flex text-3xl gap-4 text-violet-400'>
            <SiPlaystation />
            <SiXbox />
            <SiNintendoswitch />
            <SiSteam />
          </div>

          <button
            className='bg-violet-900 border-1 text-neutral-50 font-semibold m-2 py-2 px-4 rounded-md shadow-md hover:opacity-80 hover:shadow-lg' 
            onClick={searchButton}>
            Search Our World
          </button>
        </div>

        <Carousel />

      </div>
    </>
  )
}