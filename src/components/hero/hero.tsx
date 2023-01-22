'use client';
import { motion } from 'framer-motion';

import './index.module.css'

import styles from '@/styles/index';
import { textVariant } from '@/utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6 bg-gradient-to-b from-[#B89F1B] to-[#020308]  `}>
    <motion.div
      // variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-row gradient`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
         Stop loss and/or take {'\n'}
         profit calculator {'\n'}
         margin
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          {/* <h1 className={styles.heroHeading}>Ma</h1> */}
          {/* <div className={styles.heroDText} /> */}
          {/* <h1 className={styles.heroHeading}>Ness</h1> */}
        </motion.div>

      </div>

      <motion.div
        // variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        <img
          src="https://i.ibb.co/ygtss2f/Looper-3.png"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[194px]  rounded-tl-[140px] z-10 relative"
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
