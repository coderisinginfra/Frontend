import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../CSS/OurTeam.css'
import { Link } from 'react-router-dom'
import Linkedin from '../assets/imges/Linkedin.png'
import images from '../assets/teamphoto.png'
import { Helmet } from 'react-helmet'

const AllTeamMembershow = (props) => {
    const [data,setdata] = useState([])
    useEffect(()=>{
        const fetch = async()=>{
            const response = await axios.get("https://backendrisinginfra.risinginfra.in/api/v1/fetchteammember")
            setdata(response.data)
        }
        fetch()
    },[])
    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
      };
  return (
    <div>
     <Helmet>
       <title>{props.title}</title>
       <link rel="canonical" href="https://www.risinginfra.in/our-team" />
       <meta name="description" content="Learn about our professionals who drive our success in property management, real estate, marketing, and more. contact us +91 9990633353 now" />
        <meta name="keywords" content="Our teams" />
        <meta name="robots" content="INDEX,FOLLOW"/>
        <meta name="Robots" content="INDEX, FOLLOW" />
        <meta name="robots"  content="noydir" />
        <meta name="Content-Language" content="en-us" />
        <meta name="Publisher" content="Rising infra" />
        <meta name="distribution" content="LOCAL" />
        <meta name="page-topic" content="Rising infra"/>
        <meta name="YahooSeeker" content="INDEX, FOLLOW"/>
        <meta name="googlebot" content="index,follow"/>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rising infra"/>
        <meta property="og:url" content="https://www.risinginfra.in/our-team" />
        <meta property="og:image" content="https://www.risinginfra.in/assets/teamphoto-BRDjlWv7.png" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content="Join the RisingInfra team and build your career in the real estate industry. Explore current job openings and career opportunities with us." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content="Join the RisingInfra team and build your career in the real estate industry. Explore current job openings and career opportunities with us."/>
        <meta name="twitter:image" content="https://www.risinginfra.in/assets/teamphoto-BRDjlWv7.png" />
     </Helmet>

        <h1 className='proven'>We are a team of seasoned professionals with extensive experience and proven track record in our area of expertise.</h1>
    <div className='teams-flex'>
      {
        data.map((item, index) => (
          <div key={index} className='index'>
            <div className='our-teams-div'>
              <img src={item.coverimage} alt="images" className='images-teams' /> <br />
            </div>
            <div>
              <div className='container-items'>
                <h1 className='itemname'>{item.name}</h1>
                <Link to={item.linkedin} target="_main">
                  <img src={Linkedin} alt="linkedin" className='linkedin-fa' />
                </Link>
              </div>
              <h1 className='itemdesignation'>{item.designation}</h1> <br />
              <p title={item.description} className='paragraph-description'>{truncateText(item.description, 30)}</p>
            </div>
          </div>
        ))
      }
  </div>
</div>
  )
}

export default AllTeamMembershow
