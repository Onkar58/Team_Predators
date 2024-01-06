import React from 'react'
import classes from './Social.module.css'
import logo from '../../Assets/PredatorsFavicon.png'
import ins from '../../Assets/insta-white.png'
const Component = ({img, link, time, desc}) => {
  return (
    <div className={classes.body}>
        <img src={img} alt='' className={classes.img}/>
        <p className={classes.p}>{desc.substring(0,100)}...</p>
        <div className={classes.inner}>
            <img src={logo} alt='' className={classes.logo}/>
            <div className={classes.info}>
                <p className={classes.a1}>@teampredatorsracing</p>
                <p className={classes.a11}>{time}</p>
            </div>
            <a href={link} className={classes.link}><img src={ins} alt='' className={classes.a}/></a>
        </div>

    </div>
  )
}

export default Component