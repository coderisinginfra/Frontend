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
        <meta name="keywords" content="Our teams, RisingInfra team, property management team, real estate experts, RisingInfra professionals, team members, real estate team, property management professionals, marketing team, sales team, HR team, RisingInfra staff, company team, real estate industry experts, property management specialists, team of professionals, RisingInfra employees, property sales team, HR professionals, marketing experts, business team, RisingInfra leadership, real estate consultants, team overview, RisingInfra workforce, company professionals,Rising Infra, Rising Infra Noida, Rising Infra Private Limited, Property In Noida, Property On Noida Expressway, Commercial Property On Noida Expressway, Noida Commercial Projects, Noida Expressway Commercial Projects, Residential Property On Noida Expressway, Noida Expressway Property, Residential Projects On Noida Expressway, Noida Expressway Residential Projects, Noida Property Prices, Noida Properties, Commercial Property In Noida, Property In Noida For Sale, Best Property In Noida, Buy Property In Noida, Property In Noida Ready To Move,Residential Property In Noida, Luxury Property In Noida, Commercial Property In Noida For Sale, best real estate company in noida,best real estate company in noida for job, top 10 real estate companies in noida, famous companies in noida, real estate companies in noida, no 1 real estate company in the world, which real estate company is best for new agents, best real estate company in nyc, top real estate company in noida, top 10 real estate company in noida, best real estate in noida, best real estate companies in greater noida, best real estate consultant in noida, best property dealer in noida, noida real estate company, best real estate brokers in noida, top real estate companies in noida, fortune 500 companies in noida, best real estate developers in noida, best real estate agents in noida,best properties noida, real estate company in noida, no 1 real estate company in india, best real estate projects in noida, best property dealers in noida extension, noida best property dealers, noida best property, top 5 real estate companies in noida, top 10 real estate brokers in noida, real estate company in noida sector 94" />
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
