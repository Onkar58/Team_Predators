import React from 'react'
import classes from './Footer.module.css'
import { NavLink } from 'react-router-dom'
import img1 from '../../Assets/likedin.png'
import img2 from '../../Assets/Facebook.png'
import img3 from '../../Assets/instagram.png'
import img4 from '../../Assets/youtube.png'
import img5 from '../../Assets/twitter.png'

const Footer = () => {
  return (
    <div className={classes.main}>
      <div className={classes.c1}>
        <div className={classes.div1}>
          <p className={classes.h1}>Navigation</p>
          <NavLink to={"/"} className={classes.h2}>Home</NavLink>
          <NavLink to={"/teams"} className={classes.h2}>Team</NavLink>
          <NavLink to={"/achievements"} className={classes.h2}>Achievements</NavLink>
          <NavLink to={"/partners"} className={classes.h2}>Partners</NavLink>
          <NavLink to='/contact' className={classes.h2}>Contact</NavLink>
        </div>

        <div className={classes.div2}>
          <p className={classes.h3}>Team <span className={classes.h}>Predators</span>  Racing</p>
          <p className={classes.h4}><span className="material-symbols-outlined">
            location_on
          </span><span>Dr. D.Y. Patil Educational Complex,<br />
            Akurdi, Pune - 411044<br />
            Maharashtra, India</span></p>
          <p className={classes.h4}><span className="material-symbols-outlined">stacked_email</span>captain@teampredatorsracing.com</p>
        </div>
        <div className={classes.div1}>
          <p className={classes.h1}>Social</p>
          <div className={classes.div1a}>
          <NavLink to={"/"} className={classes.h2a}><img src={img1} alt='' className={classes.img1}/></NavLink>
          <NavLink to={"/teams"} className={classes.h2a}><img src={img2} alt='' className={classes.img1}/></NavLink>
          <NavLink to={"/achievements"} className={classes.h2a}><img src={img3} alt='' className={classes.img1}/></NavLink>
          <NavLink to={"/partners"} className={classes.h2a}><img src={img4} alt='' className={classes.img1}/></NavLink>
          <NavLink to='/contact' className={classes.h2a}><img src={img5} alt='' className={classes.img1}/></NavLink>
          </div>
        </div>
      </div>
      <div className={classes.c2}></div>
      <div className={classes.c3}>Copyright@teampredatorsracing</div>
    </div>
  )
}

export default Footer