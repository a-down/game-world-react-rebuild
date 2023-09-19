import * as Menubar from '@radix-ui/react-menubar';
import { GiHamburgerMenu } from 'react-icons/gi'
import HeaderLink from './HeaderComponents/HeaderLink';


export default function Header() {


  return (
    <div className="w-full h-[69px] flex justify-end bg-violet-950">
      <Menubar.Root>
        <Menubar.Menu>
          <Menubar.Trigger className=' m-4 p-2 rounded-full shadow-sm '>
            <GiHamburgerMenu className='text-neutral-50 text-xl hover:text-violet-300'/>
          </Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content className='mx-4 my-2 text-right bg-violet-950 text-neutral-50 p-2 rounded-md border-neutral-50 shadow-md flex flex-col gap-1'>
              <HeaderLink text={'Search Database'} link={'/search'}/>
              <HeaderLink text={'Favorite Games'} link={'/favorites'}/>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>
      </Menubar.Root>
    </div>
  )
}