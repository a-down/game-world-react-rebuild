import { CarouselWrapper } from '../components/CarouselComponents'
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
      <div className=' min-h-[calc(100vh-69px)] flex flex-col py-10 gap-10'>
        <div className='flex flex-col gap-4 justify-start py-6 rounded-lg items-center mx-4 md:mx-10 lg:mx-24 xl:mx-48'>
          <h1 className='text-5xl text-violet-100 font-bold'>Game World</h1>

          <div className='flex text-3xl gap-4 text-violet-900'>
            <SiPlaystation />
            <SiXbox />
            <SiNintendoswitch />
            <SiSteam />
          </div>

          <button
            className='bg-violet-600 border-1 text-neutral-50 font-semibold m-2 py-2 px-4 rounded-md shadow-md hover:opacity-80 hover:shadow-lg' 
            onClick={searchButton}>
            Search Our World
          </button>
        </div>

      <CarouselWrapper />

      </div>
    </>
  )
}