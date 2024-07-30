import React from 'react'
import { Link } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import '../CSS/Footer.css'

const FooterBottom = () => {
    const location = [{
        name:'Property in Noida',
        link:"noidaproperty"
    },{
        name:'Property in Gurgaon',
        link:"gurgaonproperty"
    },
    {
        name:'Property in Ghaziabad',
        link:"ghaziabadproperties"
    },
    {
        name:'Property in Goa',
        link:"goaproperty"
    },{
        name:"Property in Ayodhya",
        link:"ayodhyaproperty"
    }]

    const topics = [{
        name:"Residential Property",
        link:"https://nayaashiyana.com/"
    },{
        name:"Commercial Property",
        link:"/commericalproperty"
    },{
    name:"Plots",
    link:"/plotsproperty"
    }]

    const realesattedevlopers = [{
        name:"Paras Buildtech",
        link:"/"
    },{
        name:"M3M Group",
        link:"/"
    },{
        name:"Supertech",
        link:"/"
    },{
        name:"Godrej Properties",
        link:"/"
    },{
        name:"Omaxe",
        link:"/"
    },{
        name:"Gaurs Group",
        link:"/"
    },{
        name:"Bhutani Group",
        link:"/"
    },{
        name:"ACE Group",
        link:"/"
    },{
        name:"Lodha Group",
        link:"/"
    },{
        name:"DLF Group",
        link:"/"
    },{
        name:"GyGy Group",
        link:"/"
    },{
        name:"Migsun",
        link:"/"
    }]

  return (
   <>
   <div className='properties-system'>
        <div>
            <h1 className='support-data font-support'>Property in India</h1> <hr style={{marginTop:"1em",width:"30%"}}/>
            <div className='container-data-footer'>
            {
                location.map((item,index)=>(
                   <>
                    <Link to={item.link} key={index} className='linkes-flield'>{item.name}</Link> <br /> <br />
                   </>
                ))
            }
            </div>
        </div>
        <div>
            <h1 className='support-data font-support'>Category Properties</h1> <hr style={{marginTop:"1em",width:"30%"}}/>
            <div className='container-data-footer'>
            {
                topics.map((item,index)=>(
                    <>
                    <Link to={item.link} key={index} className='linkes-flield'>{item.name}</Link> <br /> <br />
                   </>
                ))
            }
            </div>
        </div>
        <div>
            <h1 className='support-data font-support'>Top Builders</h1> <hr style={{marginTop:"1em",width:"30%"}}/>
            <div className='container-data-footer'>
            {
                realesattedevlopers.map((item,index)=>(
                    <>
                    <Link to={item.link} key={index} className='linkes-flield'>{item.name}</Link> <br /> <br />
                   </>
                ))
            }
            </div>
        </div>
            <div>
            <h1 className='support-data font-support'>Consult With Us</h1> <hr style={{marginTop:"1em",width:"30%"}}/>
            <div className='contact-footer'>
                <div className='conatnets-footer'>
                    <EmailIcon color='primary' className='secondary-contact'/>
                    <Link to="mailto://info@risinginfra.in" className='linkes-flield'>info@risinginfra.in</Link>
                </div>
                <div className='conatnets-footer'>
                    <CallIcon color='primary' className='secondary-contact'/>
                    <Link to="tel://+919990633353" className='linkes-flield'>+91 9990633353</Link>
                </div>
            </div>
            </div>
   </div>
   </>
  )
}

export default FooterBottom
