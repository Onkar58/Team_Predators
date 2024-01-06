import React from 'react'
import classes from './Partner.module.css'
import imga from '../../Assets/raptor1.png'
import p1 from '../../Assets/Partnership.png'
import p2 from '../../Assets/donate.png'
import p3 from '../../Assets/brochure.png'
import MyInfo from './PertnerInfo'
import { Link, useNavigate } from 'react-router-dom'

const PartnerPage = () => {
    const navigate = useNavigate();
    const goto = () => {
        navigate("/partners/criteria")
    }
  return (
    <div className={classes.main}>
        <div className={classes.top}>
            <h1 className={classes.head}>Partners</h1>
            <div className={classes.mar}>
                <div className={classes.lmar}>
                    <img src={imga} alt='' className={classes.img}/>
                </div>
                <div className={classes.mmar}></div>
                <div className={classes.lmara}>
                    <h2 className={classes.c1}>Be a Part of Our Journey!</h2>
                    <p className={classes.p}>'<span style={{color:"#0c7808"}}>Team Predators Racing</span>’ is a non-profit student organization where the growing engineers learn soft skills along with technical skills. With Baja as a platform for industrial exposure, we have established various acquaintances along the way. Be it technical guidance, production help, financial aid or logistics, our sponsors have always had our backs and we are really grateful for the same. Their contributions made it possible for us to operate, build and thus win. To connect with us, approach our sales team</p>
                    <button className={classes.bt}>Sales Team</button>
                </div>
            </div>

            <div className={classes.btn_sec}>
                <button className={classes.btn1} onClick={goto}>
                    <img src={p1} alt='' className={classes.p1}/>
                    <h3 className={classes.btn_info}>Become a Partner</h3>
                </button>
                <button className={classes.btn1}>
                <img src={p2} alt='' className={classes.p1}/>
                <h3 className={classes.btn_info}>Donate</h3>
                </button>
                <button className={classes.btn1}>
                <img src={p3} alt='' className={classes.p1}/>
                <h3 className={classes.btn_info}>Brochure</h3>
                </button>
            </div>

            <div className={classes.next}>
            <h1 className={classes.head}>Our Partners</h1>
            <div className={classes.imp}>
                {
                    MyInfo.map((item, index) => {
                        return <Link to={`../partners/${item.link}`} className={classes.abs} style={{border:`3px solid ${item.color} `}} ><img src={item.ima} alt='' className={classes.ii}/></Link>
                    })
                }
            </div>
            </div>
        </div>
    </div>
  )
}

export default PartnerPage