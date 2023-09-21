import { motion } from 'framer-motion'
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';


export default function GameCard({game, featured}) {
  // console.log(game)

  let cardSizing
  let pointerEvent
  featured 
    ? cardSizing = 'min-w-[20rem] max-h-[11.33rem] md:min-w-[30rem] md:max-h-[17rem] lg:min-w-[40rem] lg:max-h-[22.64rem]'
    : cardSizing = ' w-full md:w-[20rem] md:h-[11.33rem]'
  
  switch (featured) {
    case true:
      cardSizing = 'min-w-[20rem] max-h-[11.33rem] md:min-w-[30rem] md:max-h-[17rem] lg:min-w-[40rem] lg:max-h-[22.64rem]'
      pointerEvent = 'pointer-events-none'
      break;
    case false:
      cardSizing = ' w-full md:w-[20rem] md:h-[11.33rem]'
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
            <motion.div className='p-4 relative'>
              <img src={game.background_image} className={`rounded-md ${pointerEvent} self-end ${cardSizing}`}/>
              <h3 className='text-neutral-50 font-semibold absolute bottom-4 bg-black py-0.5 px-1 rounded-bl-md rounded-tr-md '>
                {game.name}
              </h3>
            </motion.div>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                Edit profile
              </Dialog.Title>
              <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                Make changes to your profile here. Click save when you're done.
              </Dialog.Description>
              <fieldset className="mb-[15px] flex items-center gap-5">
                <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="name">
                  Name
                </label>
                <input
                  className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                  id="name"
                  defaultValue="Pedro Duarte"
                />
              </fieldset>
              <fieldset className="mb-[15px] flex items-center gap-5">
                <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="username">
                  Username
                </label>
                <input
                  className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                  id="username"
                  defaultValue="@peduarte"
                />
              </fieldset>
              <div className="mt-[25px] flex justify-end">
                <Dialog.Close asChild>
                  <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                    Save changes
                  </button>
                </Dialog.Close>
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