import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import roryPic from '../../assets/rory.jpeg'


export default function Carousel() {
  const [width, setWidth] = useState(0)
  let carousel = useRef()

  // window.addEventListener("resize", displayWindowSize);

  // let windowWidth
  // function displayWindowSize(){
  //   windowWidth = document.documentElement.clientWidth;
  //   console.log(windowWidth)
  // }

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <motion.div
    className='overflow-hidden cursor-grab '
    ref={carousel}
    whileTap={{cursor: 'grabbing'}}>

      <motion.div
        drag='x'
        dragConstraints={{right: 0, left: -width}}
        className='flex'>

        <motion.div className='min-w-[20rem] p-4'>
          <img src={roryPic} className='rounded-md pointer-events-none self-end'/>
        </motion.div>
        <motion.div className='min-w-[20rem] p-4'>
          <img src={roryPic} className='rounded-md pointer-events-none'/>
        </motion.div>
        <motion.div className='min-w-[20rem] p-4'>
          <img src={roryPic} className='rounded-md pointer-events-none'/>
        </motion.div>
        <motion.div className='min-w-[20rem] p-4'>
          <img src={roryPic} className='rounded-md pointer-events-none'/>
        </motion.div>
        <motion.div className='min-w-[20rem] p-4'>
          <img src={roryPic} className='rounded-md pointer-events-none'/>
        </motion.div>
        <motion.div className='min-w-[20rem] p-4'>
          <img src={roryPic} className='rounded-md pointer-events-none'/>
        </motion.div>
        

      </motion.div>

    </motion.div>
  )
}