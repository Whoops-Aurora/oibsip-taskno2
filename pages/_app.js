import '../styles/globals.css';

// analytics by versel
import { Analytics } from '@vercel/analytics/react';

// speed insights by versel
import { SpeedInsights } from "@vercel/speed-insights/next"

//components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

//router
import {useRouter} from 'next/router';

//framer motion
import {AnimatePresence, motion} from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
  <Layout>
    <AnimatePresence mode='wait'>
      <motion.div key={router.route} className='h-full'>
        <Transition />
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  </Layout>
<Analytics />
<SpeedInsights />
</>
  );
}

export default MyApp;
