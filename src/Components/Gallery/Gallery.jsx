import React, {useState, useEffect} from 'react'
import { GetMoments } from '../getdata/GetMoments'
import GalleryComponent from '../common/GalleryComponent/GalleryComponent'
import img1 from '../../Assets/TrialImages/1.jpg'
import img2 from '../../Assets/TrialImages/2.jpeg'
import img3 from '../../Assets/TrialImages/3.jpg'
import img4 from '../../Assets/TrialImages/4.jpeg'
import img5 from '../../Assets/TrialImages/5.jpg'
import img6 from '../../Assets/TrialImages/6.jpg'
import img7 from '../../Assets/TrialImages/7.jpg'
import img8 from '../../Assets/TrialImages/8.jpeg'
import img9 from '../../Assets/TrialImages/9.jpg'
import img10 from '../../Assets/TrialImages/10.jpeg'
import img11 from '../../Assets/TrialImages/11.jpeg'
import img12 from '../../Assets/TrialImages/12.jpeg'
import img13 from '../../Assets/TrialImages/13.jpg'
import img14 from '../../Assets/TrialImages/14.jpg'
import img15 from '../../Assets/TrialImages/15.jpeg'
import img16 from '../../Assets/TrialImages/16.jpg'
import classes from './Gallery.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const image_links = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img10,
    img15,
    img11,
    img9,
    img12,
    img13,
    img16,
    img14,
]

const video_items = [
    {
        link: 'https://firebasestorage.googleapis.com/v0/b/team-predators-racing.appspot.com/o/moments%2Fbuild.mp4?alt=media&token=e8847907-73e8-4cd0-95f7-569505fed847',
        heading: "Build",
        para: "In the manufacturing phase, we ensure that the assemblies of systems are manufactured to meet the high standards under the supervision of respective mentors. The Fixturing, Grinding, Welding, Machining and Marketing are carried out throughout the phase. The build quality of our vehicle is assured at its best.",
    },
    {
        link: 'https://firebasestorage.googleapis.com/v0/b/team-predators-racing.appspot.com/o/moments%2Fdesign.mp4?alt=media&token=84ef1510-147b-43db-a3c5-f895fb605dfc',
        heading: "Design",
        para: "The design-to-build and design-to-assemble approach are kept at the forefront right from the beginning phase of designing. We are always on the lookout for introducing new ideas to our vehicle. We do intensive research and brainstorming in this phase to figure out the pros and cons of ideas before we actually implement it. We use various design tools viz Calculations, CAD Model, CAE, Simulations, DFMEA, etc.",
    },
    {
        link: 'https://firebasestorage.googleapis.com/v0/b/team-predators-racing.appspot.com/o/moments%2Ftest.mp4?alt=media&token=03d613f5-c8ef-4891-ae36-e4441009e11f',
        heading: "Testing",
        para: "Manufacturing is followed by the Testing & Validation phase, where the buggy is tested ruggedly on the rough terrain to ensure the performance, longevity and safety of the vehicle. The testing phase teaches us a lot about vehicle behavior and handling. This helps us to tune the vehicle considering different events at the Baja site as well as to boost driver confidence. Validation is done according to DVP, to ensure that our requirements have been satisfied.",

    }
]

const Gallery = () => {
    const [data,setData] = useState(null)
    async function fetchData() {
        try {
            const Data = await GetMoments();
            setData(Data)

        } catch (error) {
            console.log("error occured while fetching data",error);
            
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className={classes.slider}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    loop={true}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {video_items.map((item, key) => {
                        return (
                            <SwiperSlide key={key}>
                                <div className={classes.container}>
                                    <div className={classes.info}>
                                        <h1>{item.heading}</h1>
                                        <p>{item.para}</p>
                                    </div>
                                    <video className={classes.bgVideo} autoPlay controls={false} loop={true}>
                                        <source src={item.link} type="video/mp4" />
                                    </video>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            <div className={classes.container}>
                <div className={classes.component}>
                    <h1>Moments</h1>
                    {(data != null)?<GalleryComponent imgArray={data[0].moments} />:<></>}
                </div>
                <div className={classes.component}>
                    <h1>Women in BAJA</h1>
                    {(data != null)?<GalleryComponent imgArray={data[1].women_in_baja} />:<></>}
                </div>
            </div>
        </div>
    )
}

export default Gallery