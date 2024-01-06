import React, { useState, useRef , useEffect} from 'react';
import classes from './Contact.module.css';
import phone from '../../Assets/phone.svg';
import email from '../../Assets/gmail.svg';
import map from '../../Assets/location.svg';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const ContactPage = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  },[]);

  // form handling
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('serviceID', 'templateID', form.current, 'public key')
    emailjs.sendForm('service_ghwni1l', 'template_tr2u8mv', form.current, 'Y7r3LmqvV8zGiiJ8J')
      .then((result) => {
        alert("Email sent Successfully!!");
        setuserdata({ name: "", email: "", subject: "", message: "" })
      }, (error) => {
        console.log(error.text);
      });
  };

  const [userdata, setuserdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });


  // set animation for labels

  const [small, makeSmall] = useState([false, false, false, false])

  const changeMe = (index, val) => {
    const data = [...small]
    data[index] = val;
    makeSmall(data);
  }

  const check = (name, num) => {
    if (userdata[name] === "") {
      changeMe(num, false)
    }
  }

  return (
    <div className={classes.main}>

      {/* main contact page */}
      <form name="myContact" className={classes.contactform} ref={form} onSubmit={sendEmail} data-aos="fade-right">
        <h1 className={classes.main_head}>Contact Us</h1>
        <div className={classes.out}>
          <label className={`${classes.label} ${(small[0] === true) ? classes.yes : classes.no}`}>Name</label>
          <input type='text' className={classes.input} required value={userdata
            .name} onChange={(e) => { setuserdata({ ...userdata, name: e.target.value }) }} onFocus={() => changeMe(0, true)} onBlur={() => { check("name", 0) }} name="from_name"></input>
        </div>
        <div className={classes.out}>
          <label className={`${classes.label} ${(small[1] === true) ? classes.yes : classes.no}`} >Email Address</label>
          <input type='email' className={classes.input} required value={userdata
            .email} onChange={(e) => setuserdata({ ...userdata, email: e.target.value })} onFocus={() => changeMe(1, true)} onBlur={() => { check("email", 1) }} name="from_email"></input>
        </div>
        <div className={classes.out}>
          <label className={`${classes.label} ${(small[2] === true) ? classes.yes : classes.no}`}>Subject</label>
          <input type='text' className={classes.input} required value={userdata
            .subject} onChange={(e) => setuserdata({ ...userdata, subject: e.target.value })} onFocus={() => changeMe(2, true)} onBlur={() => { check("subject", 2) }} name="from_subject"></input>
        </div>
        <div className={classes.out}>
          <label className={`${classes.label} ${(small[3] === true) ? classes.yes : classes.no}`}>Message</label>
          <textarea className={classes.doit} required value={userdata
            .message} onChange={(e) => setuserdata({ ...userdata, message: e.target.value })} onFocus={() => changeMe(3, true)} onBlur={() => { check("message", 3) }} name="message" />
        </div>
        <input type='submit' className={classes.submit} data-aos="flip-up"/>
      </form>
      {/* info */}
      <div className={classes.contact_page} data-aos="fade-left">
        <div className={classes.box}></div>
        <h1 className={classes.info_head}>Info</h1>
        <div className={classes.info}>
          <img className={classes.icon} src={phone} alt='' />
            <p className={classes.info_p}>+91 8788628267</p>
        </div>

        <div className={classes.info}>
          <img className={classes.icon} src={email} alt='' />
            <p className={classes.info_p}>shwetamandalbm@gmail.com</p>
        </div>

        <div className={classes.info}>
          <img className={classes.icon} src={map} alt='' />
            <p className={classes.info_p}>Dr. D. Y. Patil College Of Engineering, Akurdi</p>
        </div>
      </div>

      
    </div>
  )
}

export default ContactPage