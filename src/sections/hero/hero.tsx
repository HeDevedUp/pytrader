'use client';
import { motion } from 'framer-motion';

import './index.module.css';

import styles from '@/styles/index';
import { textVariant } from '@/utils/motion';

const Hero = () => (
  <section
    className={`${styles.yPaddings} bg-gradient-to-b from-[#B89F1B] to-[#020308] pl-6 sm:pl-16  `}
  >
    <motion.div
      // variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} gradient mx-auto flex flex-row`}
    >
      <div className='relative z-10 flex flex-col items-center justify-center'>
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Stop loss and/or take {'\n'}
          profit calculator {'\n'}
          margin
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className='flex flex-row items-center justify-center'
        >
          {/* <h1 className={styles.heroHeading}>Ma</h1> */}
          {/* <div className={styles.heroDText} /> */}
          {/* <h1 className={styles.heroHeading}>Ness</h1> */}
        </motion.div>
      </div>

      <motion.div
        // variants={slideIn('right', 'tween', 0.2, 1)}
        className='relative -mt-[12px] w-full md:-mt-[20px]'
      >
        <div className='hero-gradient absolute -top-[30px] z-[0] h-[300px] w-full rounded-tl-[140px]' />

        <img
          src='https://i.ibb.co/ygtss2f/Looper-3.png'
          alt='hero_cover'
          className='relative z-10 h-[194px]  w-full rounded-tl-[140px] sm:h-[500px]'
        />

        {/* <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="https://i.ibb.co/ygtss2f/Looper-3.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a> */}
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
