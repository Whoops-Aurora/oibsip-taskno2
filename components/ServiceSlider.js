// data
 const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Video Editing',
    description: "I'm a video editor. I can edit videos.",
  },
  {
    icon: <RxPencil2 />,
    title: 'Programmer',
    description: "A good programmer is someone who always looks both ways before crossing a one-way street.",
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Developing cutting-edge solutions as a CS student - leveraging technical expertise to create functional and innovative applications.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Discover my copywriting expertise - crafting words that resonate, engage, and drive results for your brand',
  },
  {
    icon: <RxRocket />,
    title: 'Data Analysis',
    description: 'Unlocking insights through Python for data analysis - specializing in powerful preprocessing and meticulous cleaning techniques.',
  },
];

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from 'react-icons/rx';

//import required modules
import {FreeMode, Pagination} from 'swiper';


const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15
    },
  }}
  freeMode={true}
  pagination={{
    "clickable": true
  }}
  modules={[FreeMode, Pagination]}
  className='h-[120px] sm:h-[340px]'
  >
    {
      serviceData.map((item, index) => {
        return <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(90,64,168,0.15)] transition-all duration-300'>
            {/* icon */}
            <div className='text-4xl text-accent mb-4'>{item.icon}</div>
            {/* title & desc */}
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal'>{item.description}</p>
            </div>
            {/* arrow */}
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
            </div>
          </div>
        </SwiperSlide>
      })
    }
    </Swiper>;
};

export default ServiceSlider;
