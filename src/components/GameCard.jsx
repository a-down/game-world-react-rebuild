import { motion } from 'framer-motion'
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { useState, useEffect, useRef } from 'react'
import { Carousel } from './CarouselComponents'


export default function GameCard({game, featured}) {
  const [ gameDetails, setGameDetails ] = useState({})
  const [ gameScreenshots, setGameScreenshots ] = useState([])
  // console.log(game)
  // console.log(gameDetails)
  console.log(gameScreenshots)

  useEffect(() => {
    let arr = []
    game.short_screenshots.map((screenshot) => {
      arr.push(<img src={screenshot.image} className='rounded-md my-1 w-full md:w-[48%]'/>)
    })
    setGameScreenshots(arr)
  }, [])

  useEffect(() => {
    getGameDetails()
  }, [])

  function getGameDetails() {
    const apiKey = import.meta.env.VITE_API_KEY
    const url = `https://api.rawg.io/api/games/${game.id}?key=${apiKey}`

    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setGameDetails(data)
      })
  }

  let cardSizing
  let pointerEvent
  // featured 
  //   ? cardSizing = 'min-w-[20rem] max-h-[11.33rem] md:min-w-[30rem] md:max-h-[17rem] lg:min-w-[40rem] lg:max-h-[22.64rem]'
  //   : cardSizing = ' w-full md:w-[49%]'
  
  switch (featured) {
    case true:
      cardSizing = 'min-w-[20rem] max-h-[11.33rem] md:min-w-[30rem] md:max-h-[17rem] lg:min-w-[40rem] lg:max-h-[22.64rem]'
      pointerEvent = 'pointer-events-none'
      break;
    case false:
      cardSizing = ' w-full'
      pointerEvent = 'cursor-pointer'
      break;
  }

  return (
    <>
        
      {featured 
      ? // if featured on main page, don't render as modal
        <motion.div className='p-4 relative'>
          <img src={game.background_image} className={`rounded-md ${pointerEvent} self-end ${cardSizing}`}/>
          <h3 className='text-neutral-50 font-semibold absolute bottom-4 bg-black py-0.5 px-1 rounded-bl-md rounded-tr-md '>
            {game.name}
          </h3>
        </motion.div>


      : // if not featured on main page, render as modal trigger
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <motion.div className='m-4 relative w-full md:w-[45%] lg:w-[29%] bg-neutral-950 rounded-b-md'>
              <img src={game.background_image} className={`rounded-md ${pointerEvent} self-end ${cardSizing}`}/>
              <h3 className='text-neutral-50 font-semibold absolute bottom-0 bg-black py-0.5 px-1 rounded-bl-md rounded-tr-md '>
                {game.name}
              </h3>
            </motion.div>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />

            <Dialog.Content className=" fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-neutral-200 p-[25px] shadow-xl focus:outline-none overflow-scroll">
              <Dialog.Title className="text-mauve12 m-0 mb-2 text-lg font-bold">
                {game.name}
              </Dialog.Title>

              <Dialog.Description className="text-violet-950 my-2 text-sm leading-normal">
                {`Rating: ${gameDetails.rating}/5`}
              </Dialog.Description>
              
              <Dialog.Description className="text-gray-700 my-2 text-sm leading-normal">
                {gameDetails.description_raw}
              </Dialog.Description>

              <div className='flex flex-wrap justify-evenly'>
                {gameScreenshots}
              </div>

              <Dialog.Close asChild>
                <button
                  className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                  aria-label="Close"
                >
                  <Cross2Icon />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>}
    
    
    </>
    
    
  )
}