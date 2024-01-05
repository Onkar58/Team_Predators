import React, {useState, useEffect} from 'react'
import classes from './Partner.module.css'
import imga from '../../Assets/raptor3d.jpg'
import p1 from '../../Assets/Partnership.png'
import p2 from '../../Assets/donate.png'
import p3 from '../../Assets/brochure.png'
import doc from '../../Assets/Docs/Team Predators Racing.pdf'
import { Link, useNavigate } from 'react-router-dom'
import { GetAllSponsors } from '../getdata/GetAllSponsors'

const PartnerPage = () => {
    const [data, setData] = useState(null)
    const navigate = useNavigate();
    const goto = () => {
        navigate("/partners/criteria")
    }

    async function fetchData() {
        try {
            const Data = await GetAllSponsors();
            console.log(Data)
            setData(Data[0].all)

        } catch (error) {
            console.log("error occured while fetching data",error);
            
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleLoadMore = () => {
    // Fetch the next set of sponsors
    fetchData();
  };

  const handleButtonClick = () => {
    window.open('https://payu.in/web/571A1E990A26D3E250365EFC3B15B923', '_blank');
  };

  return (
    <div className={classes.main}>
        <div className={classes.top}>
            <h1 className={classes.head}>Partners</h1>
            <div className={classes.mar}>
                <div className={classes.lmar}>
                    <img src={imga} alt='' className={classes.img}/>
                </div>
                <div className={classes.mmar}></div>
                <div className={classes.lmara}>
                    <h2 className={classes.c1}>Be a Part of Our Journey!</h2>
                    <p className={classes.p}>'<span style={{color:"#0c7808"}}>Team Predators Racing</span>’ is a non-profit student organization where the growing engineers learn soft skills along with technical skills. With Baja as a platform for industrial exposure, we have established various acquaintances along the way. Be it technical guidance, production help, financial aid or logistics, our sponsors have always had our backs and we are really grateful for the same. Their contributions made it possible for us to operate, build and thus win. To connect with us, approach our sales team</p>
                    <button className={classes.bt}>Sales Team</button>
                </div>
            </div>

            <div className={classes.btn_sec}>
                <button className={classes.btn1} onClick={goto}>
                    <img src={p1} alt='' className={classes.p1}/>
                    <h3 className={classes.btn_info}>Become a Partner</h3>
                </button>
                <button className={classes.btn1} onClick={handleButtonClick}>
                <img src={p2} alt='' className={classes.p1}/>
                <h3 className={classes.btn_info}>Donate</h3>
                </button>
                <a href={doc} className={classes.download} download="brochure.pdf" target='_blank' rel='noopener'><button className={classes.btn1}>
                <img src={p3} alt='' className={classes.p1}/>
                <h3 className={classes.btn_info}>Brochure</h3>
                </button></a>
            </div>

            <div className={classes.next}>
            <h1 className={classes.head}>Our Partners</h1>
            <div className={classes.imp}>
                {
                    (data === null)?<></>
                    :data.map((item, index) => {
                        return <Link to={`${item.link}`} className={classes.abs} style={{border:`3px solid ${item.color} `}} ><img src={item.logo} alt='' className={classes.ii}/></Link>
                    })
                }
            </div>
            {/* {lastVisible && <button onClick={handleLoadMore}>Load More</button>} */}
            </div>
        </div>
    </div>
  )
}

export default PartnerPage