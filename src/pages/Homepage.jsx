import zeldaBg from '../assets/zelda-bg.jpg'
import {
  SiPlaystation,
  SiXbox,
  SiNintendoswitch,
  SiSteam
} from 'react-icons/si'


export default function Homepage() {

  return (
    <div 
      style={{
      backgroundImage: `url(${zeldaBg})`, 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      filter: 'grayscale(80%)'
      }}
      className='h-[800px] flex flex-col justify-start py-48 items-center'
      >
      <h1 className='text-5xl text-violet-900 font-bold p-2'>Game World</h1>

      <div className='flex text-3xl gap-4 text-violet-200'>
        <SiPlaystation />
        <SiXbox />
        <SiNintendoswitch />
        <SiSteam />

      </div>


    </div>
  )
}