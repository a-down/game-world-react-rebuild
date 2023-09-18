import * as Menubar from '@radix-ui/react-menubar';
import { GiHamburgerMenu } from 'react-icons/gi'
import HeaderLink from './HeaderComponents/HeaderLink';


export default function Header() {


  return (
    <div className="w-full flex justify-end bg-violet-800">
      <Menubar.Root>
        <Menubar.Menu>
          <Menubar.Trigger className=' m-4 p-2 bg-white rounded-full shadow-sm hover:bg-violet-400'>
            <GiHamburgerMenu className='text-violet-800'/>
          </Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content className='mx-4 my-2 text-right bg-white py-2 px-4 rounded-md border-neutral-50 shadow-md flex flex-col gap-1'>
              <HeaderLink text={'Search Database'} link={'/search'}/>
              <HeaderLink text={'Favorite Games'} link={'/favorites'}/>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>
      </Menubar.Root>
    </div>
  )
}