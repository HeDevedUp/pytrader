'use client';

import {Card } from "@nextui-org/react";
import React from 'react'

import styles from '@/styles'

export default function TransationCard() {
  return (
    <div className={`${styles.topPaddings} ${styles.flexCenter} justify-around mt-28 `}>
  <Card css={{ w: "230px", h: "310px"}}>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://i.ibb.co/4Wzp6mp/Group.jpg"
        width="56.01px"
        height="52.37"
        objectFit="cover"
        alt="Card example background"
      />
      <p className={`  text-center w-[150px] ml-8 mt-8 text-xl`}> secure and {'\n'} safe trading system {'\n'} system </p>
    </Card.Body>

  </Card>

  <Card css={{ w: "230px", h: "310px" }}>
    <Card.Body css={{ p: 0 , }}>
      <Card.Image
        src="https://i.ibb.co/4Wzp6mp/Group.jpg"
        width="56.01px"
        height="52.37"
        objectFit="cover"
        alt="Card example background"
      />
      <p className={`  text-center w-[200px] ml-2 mt-10 text-xl`}> Access weekly/ {'\n'} monthly report{'\n'} performance on your trades </p>
    </Card.Body>
  </Card>

  <Card css={{ w: "230px", h: "310px" }}>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://i.ibb.co/4Wzp6mp/Group.jpg"
        width="56.01px"
        height="52.37"
        objectFit="cover"
        alt="Card example background"
      />
      <p className={`  text-center w-[0px] ml-2 mt-10 text-xl`}> Advance and {'\n'} improved {'\n'} trading journal </p>
    </Card.Body>
  </Card>
    </div>
  )}
