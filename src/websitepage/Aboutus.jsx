import React, { useEffect } from 'react'
import '../CSS/Aboutus.css'
import gifabout from '../assets/adminimage/civil-construction.jpg'
import teammember from '../assets/adminimage/teammember.avif'
import vision from '../assets/adminimage/vision and mission.gif'
import { SocialIcon } from 'react-social-icons'
import mission from '../assets/adminimage/mission.png'
import {Helmet} from 'react-helmet'

const Aboutus = (props) => {

  const aboutdata = [
    {
    title:"10+ Years",
    description:"of experience in the industry",
  },{
    title:"100+ Projects",
    description:"Successfull delivered with excellence",
  },{
    title:"20+ Awards",
    description:"Won Underscring our dedication to innovative",
  },
  {
    title:"100% Success",
    description:"reflects our client and centric approach",
  },
]


  return (
    <>
    <Helmet>
      <title>{props.title}</title>
      <link rel="canonical" href="https://www.risinginfra.in/aboutus" />
      <meta name="description" content="Learn more about RisingInfra, our mission, vision, and the team behind our success in the real estate industry." />
      <meta name="keywords" content="RisingInfra, about us, real estate, team, mission, vision,Rising Infra, Rising Infra Noida, Rising Infra Private Limited, Property In Noida, Property On Noida Expressway, Commercial Property On Noida Expressway, Noida Commercial Projects, Noida Expressway Commercial Projects, Residential Property On Noida Expressway, Noida Expressway Property, Residential Projects On Noida Expressway, Noida Expressway Residential Projects, Noida Property Prices, Noida Properties, Commercial Property In Noida, Property In Noida For Sale, Best Property In Noida, Buy Property In Noida, Property In Noida Ready To Move,Residential Property In Noida, Luxury Property In Noida, Commercial Property In Noida For Sale, best real estate company in noida,best real estate company in noida for job, top 10 real estate companies in noida, famous companies in noida, real estate companies in noida, no 1 real estate company in the world, which real estate company is best for new agents, best real estate company in nyc, top real estate company in noida, top 10 real estate company in noida, best real estate in noida, best real estate companies in greater noida, best real estate consultant in noida, best property dealer in noida, noida real estate company, best real estate brokers in noida, top real estate companies in noida, fortune 500 companies in noida, best real estate developers in noida, best real estate agents in noida,best properties noida, real estate company in noida, no 1 real estate company in india, best real estate projects in noida, best property dealers in noida extension, noida best property dealers, noida best property, top 5 real estate companies in noida, top 10 real estate brokers in noida, real estate company in noida sector 94" />
    </Helmet>
   <div className='container-abouts'>
   <div className='about-tags'>
       <h1 className='heading-image'>About Us</h1>
       <h1 className='aboutus-heading'>Our Architectural <br />Journey</h1>
       <h1 className='heading-paragraph' style={{justifyContent:"center"}}>Real estate development is booming, driven by urbanization and population growth. Developers are focusing on sustainable projects, integrating green spaces, and smart technologies to meet the increasing demand for modern, efficient living spaces.</h1>
    <div>
      
      <div className='container-abouts-data'>
        {
          aboutdata.map((item,index)=>(
           <div className='clear-data-found'>
              <h1 className='heading-container'>{item.title}</h1>
              <h1 className='heading-paragraph cont'>{item.description}</h1>
            </div>
          ))
        }
      </div>
       </div>
    </div>
    <div className='about-images'>
      <img src={gifabout} alt="vision and mission" className='container-image-abouts'/>
    </div>
   </div>

   <div className='writingcontent-about manage'>
   <h1 className='heading-container'>Why Rising Infra</h1>
   <p className='test'>From concept to completion, we uphold the highest standards of quality in every aspect of our work. Customer-Centric Approach: Your satisfaction is our top priority. We listen to your needs, understand your vision, and tailor our services to exceed your expectations. Innovation: We embrace innovation and technology to deliver cutting-edge solutions that enhance the way we live, work, and play. Established in the year 2023 with a lofty ideal of Krafting the World, today, Rising Infra is one of India's leading real estate and other conglomerates with a vision to fulfill the valuable expectations of customers by providing lifestyle spaces for their secured future and to be a benchmark for all the players in the Real estate industry.</p>
   </div>

   <div className='writingcontent-about'>
      <h1 className='heading-container iamges-con'>Our Values</h1>
   <div>
   <img src={vision} alt="vision and mission"  className='images-about-avif'/>
   </div>
   </div>

   <div className='writingcontent-about vision'>
   <h1 className='heading-container'>Vision and Mission</h1>
   <div className='content-abouts-data'>
    <div className='ul-li'>
      <ul>
          <li>To revolutionize the entire real estate sector by creating a new market standard with new benchmark projects for transforming lifestyle of the society which will contribute in India’s pride at global platform.</li>
          <li>To add positive and memorable experiences to the people we serve through innovation in product design and processes with integrity and transparency in order to bring everlasting continual positive transformation in their lifestyle.</li>
          <li>To be a company that is committed to trustworthy customer relationship with timely delivery of lifestyle spaces by way of thoughtful designs and innovative construction practices for touching heights.</li>
        </ul>
    </div>
    <div>
      <img src={mission} alt="mission" className='mission'/>
    </div>
   </div>
   </div>
   
    </>
  )
}

export default Aboutus
