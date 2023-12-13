//components 
import Circles from '/components/Circles';

//import reference to form
import { useRef } from 'react';

//icons
import { BsArrowRight } from 'react-icons/bs';

//framer
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '../../variants';

//emailjs plugins
import emailjs from '@emailjs/browser';

// popup alerts for email sent/error
import swal from 'sweetalert2';


const Contact = () => {
  const form = useRef();
  // alert popup calling
  const swal = require('sweetalert2');

//plugin emailjs usage
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_185b3jp', 'template_2610skt', form.current, 'u_ocmiqFbrQb6-Pd4')
      .then((result) => {
          swal.fire('Success', "Your Mail is sent! reloading site in 3..2..1", 'success');
      }, (error) => {
          swal.fire('Oops...', "Your Mail wasn't sent! reloading site in 3..2..1", 'error');
      });
      setTimeout(() => {
        e.target.reset();
      }, 3000);
      
  };

  return ( <div className='h-full bg-primary/30 '>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full' >
        {/* text n form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          { /* text */ }
          <motion.h2 
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit="hidden"
          className='h2 text-center mb-12'>
          Drop Your  <span className='text-accent'>Lines!</span>
          </motion.h2>
          { /* form */}
          <motion.form  ref={form} onSubmit={sendEmail}
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit="hidden"
          className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            { /* input group */}
            <div className='flex gap-x-6 w-full'>
            <input type='text' placeholder='name' name="user_name" className='input' />
            <input type='text' placeholder='email' name="user_email" className='input' />
            </div>
            <input type='text' placeholder='subject' name="subject" className='input' />
            <textarea placeholder='message' name='message' className='textarea'></textarea>
            <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duraiton-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Send Away!</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
