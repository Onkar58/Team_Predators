import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase/auth'
import { collection, doc, getDoc } from 'firebase/firestore';
import classes from './InfoBox.module.css'
import { motion } from 'framer-motion';

const InfoBox = ({ details }) => {
    const [achievementData, setAchievementData] = useState([]);

    useEffect(() => {
        const fetchAchievementData = async () => {
            if (details?.id) {
                const achievementRef = doc(db, 'achievements', details.id);
                const data = await getDoc(achievementRef)
                setAchievementData(data.data())
            }
        };

        fetchAchievementData();
    }, [details]);
    return (
        <div className={classes.main}>
            <div className={classes.img}>
                <img src={achievementData.img} alt='Raptor' />
                <button className={classes.btn} onClick={() => window.open("https://google.com", "_blank")}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill='' width="48" height="48" id="play">
                        <path fill="none" d="M0 0h48v48H0z"></path>
                        <path d="m20 33 12-9-12-9v18zm4-29C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"></path>
                    </svg>
                </button>
            </div>
            <div className={classes.details}>
                <h1>{achievementData.name}</h1>
                <div className={classes.overview}>
                    {achievementData.rank &&
                        <div className={classes.box}>
                            <h2>{achievementData.rank}</h2>
                            <h3>Rank</h3>
                        </div>
                    }
                    {
                        achievementData.points &&
                        <div className={classes.box}>
                            <h2>{achievementData.points}</h2>
                            <h3>Points</h3>
                        </div>
                    }
                    {achievementData.awards &&
                        <div className={classes.box}>
                            <h2>{achievementData.awards}</h2>
                            <h3>Awards</h3>
                        </div>

                    }
                    {
                        achievementData.year &&
                        <div className={classes.box}>
                            <h2>{achievementData.year}</h2>
                            <h3>Year</h3>
                        </div>
                    }
                </div>
                <div className={classes.achievements}>
                    {
                        (achievementData.competitions) ? achievementData.competitions.map((current, idx) => {
                            return <div className={classes.out}>
                                <p className={classes.see}>{current.name}</p>
                                {
                                    current.value.map((e, idx) => {
                                        return <motion.div
                                            initial={{ opacity: 0, }}
                                            animate={{ opacity: 1, }}
                                            transition={{ delay: idx / 5 }}
                                            key={idx} className={classes.achievement}>
                                            <p>{e.name} <i> {e.rank}</i></p>
                                        </motion.div>

                                    })
                                }
                            </div>
                        }

                        )

                            : <div></div>
                    }
                    {/* {achievementData.achievements.map((current, idx) =>
                        <motion.div
                            initial={{opacity: 0,}}
                            animate={{opacity: 1,}}
                            transition={{delay: idx/5}}
                            key={idx} className={classes.achievement}>
                            <p>{current.name} <i> {current.value}</i></p>
                        </motion.div>
                    )} */}
                </div>
            </div>
        </div>
    )
}

export default InfoBox