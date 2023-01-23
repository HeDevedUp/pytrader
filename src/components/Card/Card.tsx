import {Card } from "@nextui-org/react";
import React from 'react'

import styles from '@/styles'

export default function TransationCard() {
  return (
    <div className={styles.topPaddings}>
  <Card css={{ w: "230px", h: "310px" }}>
    <Card.Body css={{ p: 0 ,position: "absolute", bottom:155 }}>
      <Card.Image
        src="https://i.ibb.co/w0Dk8LW/Security-trading-paybito.jpg"
        width="230px"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
      <p className={`  text-center`}> hello  </p>
    </Card.Body>


  </Card>

    </div>
  )}
