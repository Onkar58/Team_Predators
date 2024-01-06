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