import React, { useState } from 'react'
import classes from './Navbar.module.css'
import logoImg from '../../Assets/logoImg.png'
import { NavLink } from 'react-router-dom'
import details from './NavDetails'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <>
        <nav className={classes.nav}>
            <NavLink to={"/"} className={classes.logoDiv}>
                <img src={logoImg} alt='Logo' />
            </NavLink>
            <div className={classes.menu}>
                <ul className={`${menuOpen ? classes.open : ""}`}>
                    {details.map((current, idx) =>
                        <li onClick={closeMenu} key={idx}>
                            <NavLink to={current.route} className={({ isActive }) =>
                                isActive ? classes.active : ""
                            }>
                                {current.name}
                            </NavLink>
                        </li>
                    )}
                    <button className={classes.contactBtn} onClick={closeMenu}>
                        <NavLink to='/contact'>Contact</NavLink>
                    </button>
                </ul>
                <div className={classes.menuBtn} onClick={handleMenu}>
                    {
                        !menuOpen && <svg viewBox='0 0 24 24'>
                            <path className={classes.stripes} d="M5 7h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zm0 6h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zm0 6h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1z"></path>
                        </svg>
                    }
                    {
                        menuOpen &&
                        <svg viewBox="0 0 96 96">
                            <path d="M53.657 48L78.828 22.828C79.2101 22.459 79.5148 22.0176 79.7244 21.5296C79.9341 21.0416 80.0444 20.5167 80.049 19.9856C80.0536 19.4545 79.9524 18.9278 79.7513 18.4362C79.5502 17.9446 79.2532 17.498 78.8776 17.1224C78.502 16.7468 78.0554 16.4498 77.5638 16.2487C77.0722 16.0476 76.5455 15.9464 76.0144 15.951C75.4833 15.9556 74.9584 16.0659 74.4704 16.2756C73.9824 16.4852 73.541 16.7899 73.172 17.172L48 42.343L22.829 17.172C22.0761 16.4356 21.0632 16.0259 20.0101 16.0317C18.957 16.0375 17.9487 16.4584 17.204 17.203C16.4593 17.9476 16.0382 18.9558 16.0322 20.0089C16.0263 21.062 16.4358 22.075 17.172 22.828L42.344 48L17.172 73.172C16.7938 73.5419 16.4927 73.9832 16.2862 74.4703C16.0797 74.9574 15.9718 75.4806 15.9689 76.0096C15.966 76.5387 16.0681 77.063 16.2692 77.5524C16.4704 78.0417 16.7666 78.4863 17.1407 78.8603C17.5148 79.2344 17.9594 79.5305 18.4488 79.7316C18.9382 79.9326 19.4626 80.0346 19.9916 80.0316C20.5207 80.0286 21.0438 79.9206 21.5309 79.714C22.0179 79.5074 22.4592 79.2063 22.829 78.828L48 53.657L73.172 78.828C73.953 79.609 74.977 80 76 80C77.023 80 78.048 79.609 78.828 78.828C79.5779 78.0779 79.9992 77.0606 79.9992 76C79.9992 74.9393 79.5779 73.9221 78.828 73.172L53.657 48Z"/>
                        </svg>
                    }
                </div>
            </div>
        </nav >
        <div className={classes.overlay}></div>
        </>
    )
}

export default Navbar