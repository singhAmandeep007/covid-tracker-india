import React from 'react';
import CountUp from "react-countup";
import './InfoBox.css';

export default function InfoBox({ title, total, color }) {
  const getBorder = (color) => {
    if (color === 'red') {
      return 'danger'
    } else if (color === 'green') {
      return 'success'
    } else if (color === 'grey') {
      return 'dark'
    } else {
      return 'primary'
    }
  }
  return (
    <div className={`card border-${getBorder(color)}`}>

      <div className={`card-body ${color} `}>
        <h6 className={`card-title `} style={{ minHeight: '50px' }}>{title}</h6>
        <p className="card-text" > {isFinite(total) ? <CountUp
          end={Number(total)}
          duration={1}
          separator={","}
        ></CountUp> : 0}</p>
      </div>
    </div>
  )
}
