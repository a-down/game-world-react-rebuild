


export default function CarouselButton({text, action}) {
 
  return (
    <button
      className='bg-violet-900 text-neutral-50 font-semibold m-2 py-2 px-4 rounded-md shadow-md hover:opacity-80 hover:shadow-lg w-full'
      onClick={action}>
      {text}
    </button>
  )
}