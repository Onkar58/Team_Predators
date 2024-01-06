import React, { useState, useEffect } from 'react'
import classes from './Achievements.module.css'
import InfoBox from './InfoBox/InfoBox'
import { GetSliderData } from '../getdata/GetSliderData';
import { useLocation } from 'react-router-dom';

const Achievements = () => {
    const location = useLocation()
    const { activeIndex } = location.state || { activeIndex: 0 }
    const [index, setIndex] = useState(activeIndex || 0)
    const [sliderdata, setSlider] = useState([])


    useEffect(() => {
        async function fetchData() {
            try {
                const Data = await GetSliderData();
                console.log(Data);
                setSlider(Data.reverse());

            } catch (error) {
                console.log("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        document.getElementById(index)?.scrollIntoView({ behavior: "smooth", block: "center" })
    }, [index])

    const slide = (e) => {
        if (e === "plus") {
            if (index === sliderdata.length - 1) {
                setIndex(0)
            }
            else {
                setIndex(index + 1)
            }
        }
        else if (e === "minus") {
            if (index === 0) {
                setIndex(sliderdata.length - 1)
            }
            else {
                setIndex(index - 1)
            }
        }
    }

    return (
        <div className={classes.main}>
            <div className={classes.dummy}>
                <button className={`${classes.btn} ${classes.btn1}`} onClick={() => slide("minus")} >  
                    <svg width="41" height="75" viewBox="0 0 41 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.9485 3.258L4 37.2065" stroke="#17E31F" stroke-width="10" stroke-linecap="round" />
                        <path d="M37.242 71.9485L3.29352 38" stroke="#17E31F" stroke-width="10" stroke-linecap="round" />
                    </svg>
                </button>
                <button className={`${classes.btn} ${classes.btn2}`} onClick={() => slide("plus")} >
                    <svg width="41" height="75" viewBox="0 0 41 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.29353 3.258L37.242 37.2065" stroke="#17E31F" stroke-width="10" stroke-linecap="round" />
                        <path d="M4 71.9485L37.9485 38" stroke="#17E31F" stroke-width="10" stroke-linecap="round" />
                    </svg>
                </button>
                <div className={classes.slider} >
                    {
                        sliderdata.map((current, idx) => (
                            <div key={idx} id={idx} className={`${idx === index ? classes.active : ""} ${classes.element}`}
                            
                            >
                                <img
                                    onClick={() => setIndex(idx)}
                                    className={`${idx === index ? classes.active : ""}`}
                                    src={current.image}
                                    alt={current.name}
                                />
                                <p className={classes.name}>
                                    {current.name}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={classes.details} >
                <InfoBox details={sliderdata[index]?.achievements} />
            </div>
        </div>
    )
}

export default Achievements