import React from 'react'
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

const Gallery = () => {
    return (
        <div>
            <div className={classes.slider}>
                <div className={classes.innerSlider}>
                    <div className={classes.divContainer}>
                        <div className={classes.slide}>
                            <img src={img2} alt='Slider' />
                            <h2>
                                Tenetur repudiandae, quaerat corrupti delectus eum vitae dignissimos quidem voluptatum dolorem porro molestiae nobis architecto fugit autem, cum consequuntur alias maiores dicta!
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.component}>
                    <h1>Moments</h1>
                    <GalleryComponent imgArray={image_links} />
                </div>
                <div className={classes.component}>
                    <h1>Women in BAJA</h1>
                    <GalleryComponent imgArray={image_links} />
                </div>
            </div>
        </div>
    )
}

export default Gallery