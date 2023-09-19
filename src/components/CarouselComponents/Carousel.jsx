import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { GameCard } from '../../components'


export default function Carousel({ games }) {
  const [width, setWidth] = useState(0)
  let carousel = useRef()
  // console.log(games)

  // window.addEventListener("resize", displayWindowSize);

  // let windowWidth
  // function displayWindowSize(){
  //   windowWidth = document.documentElement.clientWidth;
  //   console.log(windowWidth)
  // }

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [games])

  return (
    <motion.div
    className='overflow-hidden cursor-grab'
    ref={carousel}
    whileTap={{cursor: 'grabbing'}}
    style={{backgroundColor: 'rgb(46, 16, 101, 0.4)'}}>

      <motion.div
        drag='x'
        dragConstraints={{right: 0, left: -width}}
        className='flex'>

        {games.map((game) => (
          <GameCard game={game}/>
        ))}

      </motion.div>

    </motion.div>
  )
}