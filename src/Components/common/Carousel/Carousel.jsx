import React, { useEffect, useState } from 'react'
import classes from './Carousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSwiper, useSwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { GetCarouselData } from '../../getdata/GetCarouselData';
import { useNavigate } from 'react-router-dom';
import "swiper/css/navigation"
import "swiper/css"


const Carousel = () => {
    const navigate = useNavigate()
    const [vehicleData, setVehicleData] = useState()
    const [slidsNumber, setSlideNumber] = useState(3)
    const [activeSlide, setActiveSlide] = useState("isNext")
    const swiperSlide = useSwiperSlide();
    const swiper = useSwiper();

    useEffect(() => {
        
        async function getData(){
            const returnedData = await GetCarouselData()
            console.log(returnedData);
            setVehicleData(returnedData)
            console.log(vehicleData);
        }

        getData()

        if (window.innerWidth < 992) {
            setSlideNumber(1)
            setActiveSlide("isActive")
        }
        else {
            setSlideNumber(3)
            setActiveSlide("isNext")
        }
    }, [])
    return (
        <div className={classes.main}>
            <Swiper
                className={classes.carousel}
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={slidsNumber}
                navigation
                loop={true}
                style={{"--swiper-navigation-color": "#fff"}}
            >
                {
                    vehicleData?.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className={`${classes.outer} ${swiperSlide ? classes.active : ""}`}>
                                {({ isActive, isNext }) => (
                                    <div className={`${classes.item}`}>
                                        <div className={`${classes.innerItem} 
                                                         ${activeSlide === "isNext" && isNext ? classes.active : ""}
                                                         ${activeSlide === "isActive" && isActive ? classes.active : ""}
                                                         `}
                                        >
                                            <div className={classes.overlay}></div>
                                            <div className={classes.content}>
                                                <h1>{item.name}</h1>
                                                <button onClick={() => navigate("/achievements", {state: {activeIndex: index}})}>Know More</button>
                                            </div>
                                            <img src={item.image} alt="" />
                                        </div>
                                        {/* }} */}
                                    </div>
                                )}
                            </SwiperSlide>
                        )
                    })
                }
                <div className={classes.buttons}>
                    <div className={classes.prev}>
                        <button onClick={() => swiper.slidePrev()}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div className={classes.next}>
                        <button onClick={() => swiper.slideNext()}>
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </Swiper>
        </div >
    )
}

export default Carousel