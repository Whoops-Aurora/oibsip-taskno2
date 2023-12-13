//next image
import Image from 'next/image';

//web analytics

//components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

//framer motion
import { motion } from 'framer-motion';

//variants
import { fadeIn} from '../variants';

const Home = () => {
  return (<div className='bg primary/60 h-full '>
    {/* text */}
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
      <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
        {/* title */}
        <motion.h1 variants={fadeIn('down', 0.2)}
                  initial="hidden" 
                  animate="show"
                  exit="hidden"
                  className='h1'> 
        Forging Concepts <br/>into <span className='text-accent'>Digital Reality</span>
        </motion.h1>
        {/* subtitle */}
        <motion.p variants={fadeIn('down', 0.3)}
                    initial="hidden" 
                    animate="show"
                    exit="hidden"
                    className='max-m-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
          As a Computer Science student equipped with strong web development
          skills and an array of technical expertise, I am passionate about shaping the digital world.
          Proficient in various programming languages and tools, I thrive on translating ideas into functional,
          user-centric solutions. With a keen eye for detail and a commitment to innovation, I strive to create seamless,
          impactful experiences that push the boundaries of technology. Join me in exploring the limitless possibilities
          of the digital landscape
        </motion.p>
        {/* button */}
        <div className='flex justify-center xl:hidden relative '>
          <ProjectsBtn />
        </div>
        <motion.div variants={fadeIn('down', 0.4)}
                    initial="hidden" 
                    animate="show"
                    exit="hidden"
                    className='hidden xl:flex'>
          <ProjectsBtn />
        </motion.div>
      </div>
    </div>
    {/* image */}
    <div className='w-[1200px] h-full absolute right-10 bottom-0'>
      {/* bg img */}
      <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-10'>
      </div>
      {/* particles */}
      <ParticlesContainer />
      {/* avatar img */}
      <motion.div variants={fadeIn('up', 0.3)}
                  initial="hidden" 
                  animate="show"
                  exit="hidden"
                  transition={{duration: 1, ease: 'easeInOut'}}
                  className='w-full h-full max-w-[737px] max-h-[600px] absolute -bottom-32 lg:bottom-0 lg:right-[-8%]'>
        <Avatar />
      </motion.div>
    </div>
  </div>
  );
};

export default Home;
