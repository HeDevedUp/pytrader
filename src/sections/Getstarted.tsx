'use client';

import { motion } from 'framer-motion';

import { MyStyledButton,StartSteps, TitleText, TypingText } from '@/components';

import { startingFeatures } from '@/constant/index';
import styles from '@/styles/index';
import { fadeIn, planetVariants,staggerContainer } from '@/utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="https://i.ibb.co/GtH4MMc/analytics-presentation-1.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How PysyDTrader WWorksorks" />

        <TitleText
        title={<>Access better trading tools</>}
        textStyles=''
         />

        <div className="mt-[31px] flex flex-row max-w-[370px] gap-[0px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              text={feature}
            />
          ))}
        </div>
        <MyStyledButton
        className=' bg-[#B89F1B] ml-2 mt-1'
        auto
        size="mysize"
      >
      Read More
      </MyStyledButton>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
