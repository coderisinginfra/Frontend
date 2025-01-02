import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import { Link } from 'react-router-dom';
import logo from '../assets/adminimage/logo.png'
import '../CSS/Footer.css'
import { Button } from '@mui/material';
import instagram from '../assets/imges/instagram.png'
import facebook from '../assets/imges/facebook.jpg'
import youtube from '../assets/imges/youtube.jpg'
import Linkedin from '../assets/imges/Linkedin.png'

const Footer = () => {

    const quicklinks = [{
        title:"Home",
        link:"/"
    },{
        title:"About us",
        link:"/aboutus"
    },
    {
        title:"Our Team",
        link:"/our-team"
    },{
        title:"Blogs",
        link:"/blogs"
    },{
        title:"Contact us",
        link:"/contactus"
    },{
        title:"Careers",
        link:"/careers"
    }]

    const support = [{
        title:"Properties",
        link:"/properties"
    },{
        title:"Events",
        link:"/events"
    },{
        title:"Privacy Policy",
        link:"/privacy-policy"
    }]
  return (
    <div className='footer-concept'>
        <div className='container-footer-links'>
            <div className='logocontainer'>
                <a href="https://www.risinginfra.in"><img src={logo} alt="Rising Infra Logo" className='logoimage'/></a>
            </div>
            <p className='paragraph-datasets-footer'>Rising Infra, your trusted partner in property management in Noida, ensures seamless and efficient solutions tailored to your real estate needs. Experience excellence with our dedicated team.</p>
            <div className='contact-footer'>
                <div className='conatnets-footer'>
                    <EmailIcon color='primary' className='secondary-contact'/>
                    <Link to="mailto://info@risinginfra.in" className='linkes-flield'>info@risinginfra.in</Link>
                </div>
                <div className='conatnets-footer'>
                    <CallIcon color='primary' className='secondary-contact'/>
                    <Link to="tel://+919990633353" className='linkes-flield'>+91 9990633353</Link>
                </div>
                <div className='conatnets-footer'>
                    <PlaceIcon color='primary' className='secondary-contact'/>
                    <p className='linkes-flield'>1715-1715A, 17th Floor, Astralis Supernova, Sector 94, Noida, Uttar Pradesh 201301</p>
                </div>
            </div>
            <div className='logo-footer'>
                <Link to="https://www.instagram.com/rising_infra/" target='_main'><img src={instagram} alt="instagram" className='images-footer-logo'/></Link>
                <Link to="https://www.facebook.com/risinginfranoida" target='_main'><img src={facebook} alt="facebook" className='images-footer-logo'/></Link>
                <Link to="https://www.linkedin.com/company/risinginfra/" target='_main'><img src={Linkedin} alt="linkedin" className='images-footer-logo'/></Link>
                <Link to="https://www.youtube.com/@rising-Infra" target='_main'><img src={youtube} alt="youtube" className='images-footer-logo'/></Link>
            </div>
        <div>

        </div>
        </div>
        <div className='container-footer-links'>
            <h1 className='support-data'>Company</h1>
           <div className='container-data-footer'>
           {
             quicklinks.map((item,index)=>(
               <>
                <Link to={item.link} key={index} className='footer-links'>{item.title}</Link> <br /> <br />
                </>
             ))
           }
           </div>
        </div>
           <div className='container-footer-links'>
            <h1 className='support-data'>Support</h1>
         <div className='container-data-footer'>
         {
            support.map((item,index)=>(
               <>
                <Link to={item.link} key={index}  className='footer-links'>{item.title}</Link><br /> <br />
                </>
            ))
          }
         </div>
        </div>
           <div className='container-footer-links'>
           <h1 className='support-data'>News Letter</h1>
           <div className='container-data-footer'>
                <form action="" className='system-form'>
                    <input type="email" placeholder='example@gmail.com' className='input-box-subscibe'/>
                    <Button variant='contained' color='primary'>Subscribe</Button>
                </form>
            </div>
           </div>
    </div>
  )
}

export default Footer
