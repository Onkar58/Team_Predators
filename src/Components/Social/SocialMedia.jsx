import React, {useEffect, useState} from 'react'
import Instafeed from 'instafeed.js';
import Component from './Component';
import classes from './Social.module.css'
// import "dotenv/config"

const SocialMedia = () => {
  const [dataA, setdataA] = useState([])
  const [dataB, setdataB] = useState([])
  const [dataC, setdataC] = useState([])
  const date = new Date();
  var i = 1;

  const token_id = process.env.REACT_APP_InstagramID

    useEffect(() => {
        const userFeed = new Instafeed({
          get: 'user',
          target: 'instafeed-container',
          resolution: 'standard_resolution',
          accessToken: token_id,
          limit: 6,
          template:
          '<></>',
          filter: function(image) {
            // to filter by tags
            // if(image.caption.includes("#fun")){
              const time = new Date(image.timestamp)
              const diff = Math.floor((date - time)/(1000 * 60 * 60))
              var a = ""
              if(diff <= 24){
                if(diff === 1){
                  a = diff + " hour ago"
                }else{
                  a = diff + " hours ago"
                } 
              }else {
                const days = Math.floor(diff/24)
                if(days <= 365){
                  if(days === 1){
                    a = days + " day ago"
                  }
                  else{
                    a = days + " days ago"
                  }
                }else{
                  const year = Math.floor(days/365)
                  if(year === 1){
                    a = year + " year ago"
                  }
                  else{
                    a = year + " years ago"
                  }
                }
              }
              const newData = [image.image, image.caption, image.link, a]
              if(i%3 === 1){
                if(dataA.includes(newData)){
                  
                }
                else{
                  setdataA((prevData) => [...prevData,newData])
                }
              }else if(i%3 === 2){
                if(dataA.includes(newData) === false){
                  setdataB((prevData) => [...prevData,newData])
                }
              }else{
                if(dataA.includes(newData) === false){
                  setdataC((prevData) => [...prevData,newData])
                }
              }
              i ++;
            // }
            return (image)
    // return (image.caption.includes("#fun"));
  }
        });
        console.log("DataA", dataA);
        console.log("DataB", dataB);
        console.log("DataC", dataC);
        userFeed.run();
      }, []);

  return (
    <>
    <div id="instafeed-container" className={classes.abc}>      
    </div>
    <div className={classes.main}>
    <div className={classes.first}>
    {
      dataA.map((e, i) => {
        return <Component img={e[0]} link={e[2]} desc={e[1]} time={e[3]} key={i}/>
        
      })
    }
    </div>
    <div className={classes.second}>
    {
      dataB.map((e) => {
        return <Component img={e[0]} link={e[2]} desc={e[1]} time={e[3]}/>
      })
    }
    </div>
    <div className={classes.third}>
    {
      
      dataC.map((e) => {
        return <Component img={e[0]} link={e[2]} desc={e[1]} time={e[3]}/>
      })
    }
    </div>
    </div>
    </>
  )
}

export default SocialMedia