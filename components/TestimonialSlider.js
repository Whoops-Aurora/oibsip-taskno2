// testimonial data 
export const testimonialSlider = [
  {
    image: '/t-avt-1.png',
    name: 'Vaishnavi D',
    position: 'CTO Startup',
    message:
      'Adwait played a pivotal role in the project by skillfully managing and developing our website. His expertise in website development significantly contributed to establishing our online presence!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Oasis Infobyte',
    position: 'Web Development Internship Provider',
    message:
      'Adwait is working with us currently as a Web Development Intern. (Will be edited later) ',
  },
  {
    image: '/t-avt-3.png',
    name: 'Arfahussain Sheikh',
    position: 'Content Manager',
    message:
      "Adwait generously offered to craft a website for us 'as a sample'—free of charge, of course!",
  },
];

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};


//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

//import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//import required modules
import { Navigation, Pagination } from 'swiper';

//icons 
import { FaQuoteLeft } from 'react-icons/fa'

// next images
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper 
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[Navigation, Pagination]}
    className='h-[400px]'
    >
      {testimonialSlider.map((person, index) => {
          return ( 
          <SwiperSlide key={index}>
              <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
                {/* avatar, name, position */}
                <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                  <div className='flex flex-col justify-center text-center'>
                    {/* avatar */}
                    <div className='mb-2 mx-auto'>
                      <Image src={person.image} width={100} height={100} alt='' />
                    </div>
                    {/* name */}
                    <div className='text-lg'>{person.name}</div>
                    {/* position */}
                    <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
                  </div>
                </div>
                {/* quote and message */}
                <div className=' flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 '>
                  {/* quote icon */}
                  <div className='mb-4'>
                    <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                  </div>
                  {/* message */}
                  <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
                </div>
              </div>
            </SwiperSlide>
            );
        })
      }
      </Swiper>
  );
};

export default TestimonialSlider;
