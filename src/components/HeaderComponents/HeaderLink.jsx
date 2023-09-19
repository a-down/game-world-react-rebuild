


export default function HeaderLink({link, text}){

  return (
    <a 
    href={link} 
    className='hover:bg-violet-800 rounded-lg border border-transparent hover:border-violet-700 py-1 px-2'>
      {text}
    </a>
  )
}