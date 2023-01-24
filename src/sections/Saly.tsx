'use client';

import { motion } from 'framer-motion';

import { MyStyledButton, StartSteps } from '@/components';

import { startingFeatures } from '@/constant/index';
import styles from '@/styles/index';
import { staggerContainer } from '@/utils/motion';

const SalySection = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8 lg:flex-col`}
    >
      <motion.div
        // variants={zoomIn}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src='https://i.ibb.co/K2Mb1bm/Saly-26.png'
          alt='get-started'
          className='h-[25%] w-[25%] object-contain'
        />
      </motion.div>

      <motion.div
        // variants={fadeIn('left', 'tween', 0.2, 1)}
        className='flex flex-1 flex-col justify-center '
      >
        <div className='w-[600px relative mt-[1px] ml-80 flex flex-row justify-center gap-[0px]'>
          {startingFeatures.map((feature, index) => (
            <StartSteps key={feature} text={feature} />
          ))}
        </div>

        <MyStyledButton
          className=' align-center ml-[45%]  mt-3 flex justify-center bg-[#B89F1B]'
          auto
          size='mysize'
        >
          Read More
        </MyStyledButton>
      </motion.div>
    </motion.div>
  </section>
);

export default SalySection;
