


export default function HeaderLink({link, text}){

  return (
    <a href={link} className='hover:bg-violet-100 rounded-lg border border-transparent hover:border-violet-200 py-1 px-2'>{text}</a>
  )
}