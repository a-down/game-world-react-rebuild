import Carousel from './Carousel'
import CarouselButton from './CarouselButton'


export default function CarouselWrapper() {

  return (
    <div 
      style={{backgroundColor: 'rgb(46, 16, 101, 0.2)'}}
      className='flex flex-col gap-4 rounded-lg mx-4 md:mx-10 lg:mx-24 xl:mx-48'>
      <h2 className='text-2xl text-violet-400 font-bold text-center pt-4'>Most Popular Games as of...</h2>

      <div className='flex justify-between'>
        <CarouselButton text={'Today'} />
        <CarouselButton text={'This Week'} />
        <CarouselButton text={'This Month'} />
        <CarouselButton text={'This Year'} />
      </div>
      
      <Carousel/>
    </div>
  )
}