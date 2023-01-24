'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { textContainer, textVariant2 } from '@/utils/motion';


interface TypingTextProps {
  title?: string | number | [] | undefined;
  textStyles?: string;
}
export const TypingText: React.FC<TypingTextProps> = ({
  title,
  textStyles,
}) => (
  <motion.p
    variants={textContainer}
    className={`text-secondary-white text-[14px] font-normal ${textStyles}`}
  >
    {/* //@ts-ignore */}
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText: React.FC<TypingTextProps> = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial='hidden'
    whileInView='show'
    className={`mt-[8px] text-[40px] font-bold leading-tight text-white md:text-[64px] ${textStyles}`}
  >
    {title}
  </motion.h2>
);
