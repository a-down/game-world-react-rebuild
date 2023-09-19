


export default function HeaderLink({link, text}){

  return (
    <a 
    href={link} 
    className='hover:bg-violet-400 rounded-lg border border-transparent py-1 px-2 w-fit ml-auto'>
      {text}
    </a>
  )
}