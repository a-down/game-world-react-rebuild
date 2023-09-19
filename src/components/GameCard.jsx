import { motion } from 'framer-motion'


export default function GameCard({game}) {
  console.log(game)

  return (
    <motion.div className='p-4 relative' key={game.slug}>
      <img src={game.background_image} className='rounded-md pointer-events-none self-end min-w-[20rem] max-h-[11.33rem] md:min-w-[30rem] md:max-h-[17rem] lg:min-w-[40rem] lg:max-h-[22.64rem]'/>
      <h3 className='text-neutral-50 font-semibold absolute bottom-4 bg-black py-0.5 px-1 rounded-bl-md rounded-tr-md'>
        {game.name}
      </h3>
    </motion.div>
  )
}