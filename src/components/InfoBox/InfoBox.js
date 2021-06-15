import React from 'react';
import CountUp from "react-countup";
import { Card,Statistic } from 'semantic-ui-react'
import styles from './InfoBox.module.css';

export default function InfoBox({ title, total, color }) {

  return (

    <Card color={color} fluid>
      <Card.Content className={styles[`infoBox_${color}`]}>

      <Statistic size="mini" color={color} style={{width:"100%"}} >
        <Statistic.Label>{title}</Statistic.Label>
        <Statistic.Value>
        {isFinite(total) ? <CountUp
            end={Number(total)}
            duration={1}
            separator={","}
          ></CountUp> : 0}
        </Statistic.Value>
      </Statistic>
      </Card.Content>
    </Card>

  )
}
