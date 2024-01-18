import React from 'react'
import classes from './GalleryComponent.module.css'

const GalleryComponent = ({imgArray}) => {
    return (
        <div className={classes.main}>
            {
                imgArray?.map((item, index) =>
                <div className={classes.post}>
                    <img src={item.image} key={index} alt='posts'/>
                    <p className={classes.captions}>{(item.caption === "")?"This part will contain the captions of the above image" : item.caption}</p>
                </div>
                )
            }
        </div>
    )
}

export default GalleryComponent