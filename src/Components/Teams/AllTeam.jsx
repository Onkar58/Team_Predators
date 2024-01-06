import React,{useState, useEffect} from 'react'
import classes from './Team.module.css'
import Brakes from '../SVGs/Brakes'
import SalesMarketing from '../SVGs/SalesMarketing'
import Electronics from '../SVGs/Electronics'
import Steering from '../SVGs/Steering'
import Transmission from '../SVGs/Transmission'
import chassisS from '../../Assets/chassisS.png'
import chassisU from '../../Assets/chassisU.png'
import suspensionS from '../../Assets/suspensionS.png'
import suspensionU from '../../Assets/suspensionU.png'
import meter from '../../Assets/meter.png'
import arrow from '../../Assets/triangle.png'
import { GetTeamsData } from '../getdata/GetTeamsData'
import TeamCard from './TeamCard'


const AllTeam = () => {

  var date = new Date();
  const [selected, setSelected] = useState('transmission')
  const [Degree, setDegree] = useState(-90)
  const [scalei,setScale] = useState(1)
  const [yearStr, setYear] = useState(date.getFullYear())
  const [TeamsData, setTeamsData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      var Data = []
        try {
            Data = await GetTeamsData(yearStr.toString());
            if(Data.length === 0){
              setYear(yearStr - 1);
              Data = await GetTeamsData(yearStr.toString());
            }

        } catch (error) {
            setYear(yearStr - 1);
            Data = await GetTeamsData(yearStr.toString());
            
        }
        finally{
          setTeamsData(Data[0]);
        }
    }
    fetchData();
}, [yearStr]);

useEffect(() => {
  (window.innerWidth < 850)?(window.innerWidth < 450)?setScale(0.35)
  :setScale(0.6)
  :setScale(1)
},[])


  const HandleClick = (e) => {
    setSelected(e);
    (e === 'electronics')?setDegree(0)
    :(e === 'chassis')?setDegree(-30)
    :(e === 'suspension')?setDegree(-60)
    :(e === 'transmission')?setDegree(-90)
    :(e === 'steering')?setDegree(-120)
    :(e === 'sales')?setDegree(-150)
    :setDegree(-180)

    setTimeout(() => {(window.innerWidth < 450)? window.scroll({top:2200,behavior:"smooth"}) : window.scroll({top:1400,behavior:"smooth"})},1600)
  }

  const changeYear = (e) => {
    if(e === "next"){
      if(yearStr === (date.getFullYear())){
        return;
      }
      else{
        setYear(yearStr + 1);
      }
    }else{
      if(yearStr <= 2018){
        return;
      }
      else{
        setYear(yearStr - 1);
      }
    }
  }

  return (
    <div className={classes.body}>
      <h1 className={classes.head}>Our Team</h1>

      <div className={classes.div}>

        <button className={classes.a1} onClick={() => HandleClick('brakes')}><Brakes bgColor={`${(selected !== 'brakes')?"white" : "#137210"}`} frColor={`${(selected !== 'brakes')?"black" : "white"}`}/>
        <p className={classes.p} style={{color:`${(selected !== 'brakes')?"white":"#17E31F"}`}}>Brakes</p></button>

        <button className={classes.a2} onClick={() => HandleClick('sales')}><SalesMarketing bgColor={`${(selected !== 'sales')?"white" : "#137210"}`} frColor={`${(selected !== 'sales')?"black" : "white"}`}/>
        <p className={classes.p} style={{color:`${(selected !== 'sales')?"white":"#17E31F"}`}}>Marketing</p></button>

        <button className={classes.a3} onClick={() => HandleClick('steering')}><Steering bgColor={`${(selected !== 'steering')?"white" : "#137210"}`} frColor={`${(selected !== 'steering')?"black" : "white"}`}/>
        <p className={classes.p} style={{color:`${(selected !== 'steering')?"white":"#17E31F"}`}}>Steering</p></button>

        <button className={classes.a4} onClick={() => HandleClick('transmission')}><Transmission bgColor={`${(selected !== 'transmission')?"white" : "#137210"}`} frColor={`${(selected !== 'transmission')?"black" : "white"}`}/>
        <p className={classes.p} style={{color:`${(selected !== 'd')?"white":"#17E31F"}`}}>Transmission</p></button>

        <button className={classes.a6} onClick={() => HandleClick('suspension')}><img src={(selected !== 'suspension')?suspensionU : suspensionS} alt='' className={classes.img1}/>
        <p className={classes.p} style={{color:`${(selected !== 'suspension')?"white":"#17E31F"}`}}>Suspension</p></button>

        <button className={classes.a7} onClick={() => HandleClick('chassis')}><img src={(selected !== 'chassis')?chassisU : chassisS} alt='' className={classes.img2}/>
        <p className={classes.p} style={{color:`${(selected !== 'chassis')?"white":"#17E31F"}`}}>Chassis</p></button>

        <button className={classes.a5} onClick={() => HandleClick('electronics')}><Electronics bgColor={`${(selected !== 'electronics')?"white" : "#137210"}`} frColor={`${(selected !== 'electronics')?"black" : "white"}`}/>
        <p className={classes.p} style={{color:`${(selected !== 'a')?"white":"#17E31F"}`}}>Electronics</p></button>

        <img src={meter} alt='' className={classes.meter} style={{transform:`rotate(${Degree}deg) scale(${scalei})`}}/>

      </div>

      <div clas2sName={classes.year}>
        <h3 className={classes.s}>YEAR</h3>
        <div className={classes.choose}>
          <button className={classes.c}><img src={arrow} alt='' className={classes.lArrow} onClick={() => changeYear("prev")}/></button>
          {
            yearStr.toString().split("").map((e) => {
              return <p className={classes.yearp}>{e}</p>
            })
          }
          <button className={classes.c}><img src={arrow} alt='' className={classes.rArrow} onClick={() => changeYear("next")}/></button>
        </div>
      </div>

          <h1 className={classes.teamName}>{(TeamsData !== null)? TeamsData?.id : ""}</h1>
      
        {
          (TeamsData !== null)?<div className={classes.teams}>

            <div className={classes.static}>
            {
              (TeamsData?.captain !== undefined)?<TeamCard name={TeamsData?.captain.name} classN={TeamsData?.captain.class} linkedin={TeamsData?.captain.linkedin} img={TeamsData?.captain.image} position="captain"/>
              :<></>
            }
            {
              (TeamsData?.vice_captain !== undefined)?<TeamCard name={TeamsData?.vice_captain.name} classN={TeamsData?.vice_captain.class} linkedin={TeamsData?.vice_captain.linkedin} img={TeamsData?.vice_captain.image} position="vice captain"/>
              :<></>
            }
            {
              (TeamsData?.manager !== undefined)?<TeamCard name={TeamsData?.manager.name} classN={TeamsData?.manager.class} linkedin={TeamsData?.manager.linkedin} img={TeamsData?.manager.image} position="manager"/>
              :<></>
            }
            {
              (TeamsData?.Technical_Head !== undefined)?<TeamCard name={TeamsData?.Technical_Head.name} classN={TeamsData?.Technical_Head.class} linkedin={TeamsData?.Technical_Head.linkedin} img={TeamsData?.Technical_Head.image} position="technical head"/>
              :<></>
            }
            </div>
            <div className={classes.mainTeam} id='teams'>
            {
              TeamsData?.subteams[selected]?.map((e) => {
                console.log(e)
                return <TeamCard name={e.name} classN={e.class} linkedin={e.linkedin} img={e.image} position={selected}/>
              })
            }
            </div>
          </div>
          :<></>
        }
          
    </div>
  )
}

export default AllTeam