import React from 'react'
import monster from '../../Assets/monster.png'
import classes from './Partner.module.css'
import a1 from '../../Assets/a1.png'
import a2 from '../../Assets/a2.png'
import a3 from '../../Assets/a3.png'
import a4 from '../../Assets/a4.png'

const IndividualPartner = () => {
  return (
    <div className={classes.body}>
      <img src={a1} alt='' className={classes.arrow1}/>
      <img src={a2} alt='' className={classes.arrow2}/>
      <div className={classes.div1}>
        <p className={classes.lpart}>'<span style={{color:"#9231DC"}}>Team Predators Racing</span>’ is a non-profit student organization where the growing </p>
        <p className={classes.rpart}>'<span style={{color:"#9231DC"}}>Team Predators Racing</span>’ is a non-profit student organization where the growing </p>
      </div>
      <div className={classes.div2}>
        <img className={classes.main_img} alt='' src={monster}/>
      </div>
      <div className={classes.div1}>
        <p className={classes.lpart}>'<span style={{color:"#9231DC"}}>Team Predators Racing</span>’ is a non-profit student organization where the growing </p>
        <p className={classes.rpart}>'<span style={{color:"#9231DC"}}>Team Predators Racing</span>’ is a non-profit student organization where the growing </p>
      </div>
      <img src={a3} alt='' className={classes.arrow3}/>
      <img src={a4} alt='' className={classes.arrow4}/>
    </div>
  )
}

export default IndividualPartner