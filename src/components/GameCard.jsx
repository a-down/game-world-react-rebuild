import { motion } from 'framer-motion'


export default function GameCard({game, featured}) {
  console.log(game)

  let cardSizing
  featured 
    ? cardSizing = 'min-w-[20rem] max-h-[11.33rem] md:min-w-[30rem] md:max-h-[17rem] lg:min-w-[40rem] lg:max-h-[22.64rem]'
    : cardSizing = ' w-full md:w-[20rem] md:h-[11.33rem]'

  return (
    <motion.div className='p-4 relative' key={game.slug}>
      <img src={game.background_image} className={`rounded-md pointer-events-none self-end ${cardSizing}`}/>
      <h3 className='text-neutral-50 font-semibold absolute bottom-4 bg-black py-0.5 px-1 rounded-bl-md rounded-tr-md '>
        {game.name}
      </h3>
    </motion.div>
  )
}