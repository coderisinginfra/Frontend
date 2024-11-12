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
            const response = await axios.get("https://www.backend.risinginfra.in/api/v1/fetchteammember")
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
       <link rel="canonical" href="https://www.risinginfra.in/ourteam" />
       <meta name="description" content="Meet the dedicated and experienced teams behind RisingInfra. Learn about our professionals who drive our success in property management, real estate, marketing, and more." />
        <meta name="keywords" content="Our teams" />
     </Helmet>
        <div className='meet-our-team'>
            <div>
                <h1 className='meet'>Meet Our Team</h1>
                <p className='para-graphs'>Meet our dedicated team of property management experts committed to excellence and personalized service.</p>
            </div>
            <div className='images-front-teammember'>
                <img src={images} alt="images" className='images-team-member' />
            </div>
        </div>
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
