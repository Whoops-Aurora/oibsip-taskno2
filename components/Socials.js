// links 
import Link from 'next/link';

// icons 
import { RiYoutubeLine, 
        RiInstagramLine,
        RiGithubLine,
        RiLinkedinLine,
        RiTwitterXLine,
        RiTelegramLine,
       } from 'react-icons/ri';

const Socials = () => {
  return (
  <div className='flex items-center gap-x-5 text-lg'>
   <Link href={'https://instagram.com/adwait.api?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'} className='hover:text-accent transition-all duration-300'>
   <RiInstagramLine/>
   </Link>
   <Link href={'https://github.com/Whoops-Aurora'} className='hover:text-accent transition-all duration-300'>
   <RiGithubLine/>
   </Link>
   <Link href={'https://twitter.com/_ForstY_'} className='hover:text-accent transition-all duration-300'>
   <RiTwitterXLine/>
   </Link>
   <Link href={'https://www.linkedin.com/in/adwait-s-a1362a1a0/'} className='hover:text-accent transition-all duration-300'>
   <RiLinkedinLine/>
   </Link>
   <Link href={'https://t.me/TheNameNotTakenAdwait'} className='hover:text-accent transition-all duration-300'>
   <RiTelegramLine/>
   </Link>
  </div>
  );
};

export default Socials;
