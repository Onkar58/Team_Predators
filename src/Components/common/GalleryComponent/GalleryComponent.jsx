import React from 'react'
import classes from './GalleryComponent.module.css'

const GalleryComponent = ({imgArray}) => {
    console.log(imgArray);
    return (
        <div className={classes.main}>
            {
                imgArray?.map((item, index) =>
                <div className={classes.post}>
                    <img src={item} key={index} alt='posts'/>
                    <p className={classes.captions}>This part will contain the captions of the above image</p>
                </div>
                )
            }
        </div>
    )
}

export default GalleryComponent