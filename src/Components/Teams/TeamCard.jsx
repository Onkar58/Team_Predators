import React from 'react'
import classes from './Team.module.css'
import avtar from '../../Assets/upload.png'
import linkedini from '../../Assets/likedin.png'
import { Link } from 'react-router-dom'

const TeamCard = ({name, classN, linkedin, img, position}) => {
  console.log(linkedin)
  return (
    <div className={classes.team_body}>
        <img src={`${(img === "")?avtar : img}`} alt='' className={classes.avatar}/>
        <Link to = {`${linkedin}`} target="_blank"><img src={linkedini} alt='' className={classes.linkedini}/></Link>
        <p className={classes.p1}>{name}</p>
        <p className={classes.p11}>{position}</p>
        <p className={classes.p12}>{classN}</p>
        

    </div>
  )
}

export default TeamCard