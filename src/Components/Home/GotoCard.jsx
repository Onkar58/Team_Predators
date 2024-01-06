import React from 'react'
import classes from './Card.module.css'
import img from '../../Assets/imp.jpg'
import { useNavigate } from 'react-router-dom'

const GotoCard = () => {
    const navigate = useNavigate();
    return (
        <div className={classes.body}>
            <div className={classes.main}>
                <div className={classes.perm}>
                    <img src={img} className={classes.img} alt='' />
                    <h1 className={classes.head}>BAJA</h1>
                    <p className={classes.p}>
                        BAJA SAE is an inter collegiate off-road competition run by the Society of Automotive Engineers. It challenges engineering students to design, build and race an off-road vehicle that can withstand the toughest elements of rough terrain.
                    </p>
                    <button
                        className={classes.btn}
                        onClick={() => navigate('./achievements')}>
                        Learn More
                    </button>
                </div>
            </div>
            <div className={classes.main}>
                <div className={classes.perm}>
                    <img src={img} className={classes.img1} alt='' />
                    <h1 className={classes.head1}>WE</h1>
                    <p className={classes.p1}>We are a family of engineers where each member work towards the realization of a single dream, which is to emerge victorious. We participate in BAJA SAEINDIA and BAJA SAE International to fuel our passion for creating an All-Terrain Vehicle which has the capability to Win.</p>
                    <button className={classes.btn1} onClick={() => navigate('./moments')}>Learn More</button>
                </div>
            </div>
            <div className={classes.main}>
                <div className={classes.perm}>
                    <img src={img} className={classes.img} alt='' />
                    <h1 className={classes.head}>PARTNER</h1>
                    <p className={classes.p}>We would like to express sincere gratitude towards all our partners. With them, we have experienced industrial life, a strong exchange of technology and paved our way towards success. Their continuous support makes it possible for us to bring home glory.</p>
                    <button className={classes.btn} onClick={() => navigate('./partners')}>Learn More</button>
                </div>
            </div>
            <div className={classes.main}>
                <div className={classes.perm}>
                    <img src={img} className={classes.img1} alt='' />
                    <h1 className={classes.head1}>SUPPORT US</h1>
                    <p className={classes.p1}>Dreams aspirations are not easily obtained but one of the hardest things to do is to keep going is to keep chasing.Being a Predator we will definitely strive for success but we want you to be our support while carrying this responsibility.</p>
                    <button className={classes.btn1} onClick={() => navigate('/contact')}>Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default GotoCard