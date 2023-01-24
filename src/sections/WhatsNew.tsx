'use client';

import { motion } from 'framer-motion';

import {
  MyStyledButton,
  NewFeatures,
  TitleText,
  TypingText,
} from '@/components';

import { newFeatures } from '@/constant';
import styles from '@/styles';
import { fadeIn, planetVariants, staggerContainer } from '@/utils/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8 lg:flex-row`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='flex flex-[0.95] flex-col justify-center'
      >
        <TypingText title='| Whats new?' />
        <TitleText title={<>Auto trading journal for all your trades?</>} />
        <div className='mt-[35px] flex flex-wrap justify-between gap-[24px]'>
          {newFeatures.map((feature) => (
            <NewFeatures key={feature} {...feature} />
          ))}
        </div>
        <MyStyledButton className=' mt-3 bg-[#B89F1B]' auto size='mysize'>
          Read More
        </MyStyledButton>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src='https://i.ibb.co/YfXHQFW/cryptocurrency-certificate-1.png'
          alt='get-started'
          className='h-[90%] w-[90%] object-contain'
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
