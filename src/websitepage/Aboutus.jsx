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
      <meta name="keywords" content="Rising Infra, RISING INFRA - GUNTUR, realtors Noida, realtors gurgaon, real estate profession, top real estate, Rising infra Aboutus, Rising infra -Noida India's Largest Real Estate Company, Best Real Estate Company, Best Property Consultant, Real Estate Company, India's Best Real Estate Consultant, Best Property Dealers, Property Websites, Real Estate Website, real estate,real estate license,commercial real estate,real estate agents near me,real estate agent vs realtor,real estate agencies,real estate attorney, agency real estate, adelaide real estate, real estate broker license,Best Real Estate Consultant in Delhi/NCR, Best Real Estate Property Consultant in Delhi/NCR Real Estate, Property in Noida, Properties, Property sites India, Commercial Properties For Sale, Buy Properties, Properties To Buy, Buy Residential Properties, Buy Commercial Properties, Residential Properties For Sale, Residential Properties In Noida, Buy Residential Properties In Noida, Residential Properties For Sale In Noida,Buy Commercial Properties In Noida, Commercial Properties In Noida, Commercial Properties For Sale In Noida, Buy Residential Properties In Delhi, Residential Properties In Delhi, Residential, Properties For Sale In Delhi, Buy Commercial Properties In Delhi, Commercial Properties In Delhi,, Commercial Properties For Sale In Delhi, Buy Residential Properties In Gurgaon, Residential, Properties In Gurgaon, Residential Properties For Sale In Gurgaon, Buy Commercial Properties In, Gurgaon, Commercial Properties In Gurgaon, Commercial Properties For Sale In Gurgaon, Buy, Residential Properties In Mumbai, Residential Properties In Mumbai, Residential Properties For Sale, In Mumbai, Buy Commercial Properties In Mumbai, Commercial Properties In Mumbai, Commercial, Properties For Sale In Mumbai, Buy Residential Properties In Greater Noida, Residential Properties In, Greater Noida, Residential Properties For Sale In Greater Noida, Buy Commercial Properties In, Greater Noida, Commercial Properties In Greater Noida, Commercial Properties For Sale In Greater, Noida, Buy Residential  top 10 real estate , companies in noida, Real estate builder in Noida, real estate developers in Noida, real estate , companies, property dealers in noida, property dealers in greater noida, property dealers in , noida extension, property dealer in noida for rent, best property dealers in noida, best , property dealer in greater noida, top 10 property dealers in noida, top property dealers in , noida, property dealers in noida expressway, property dealers in surajpur greater noida, best , property dealers in greater noida noida uttar pradesh, commercial property dealers in noida, , Property Dealers in Noida, Real Estate Developers in Noida, Estate agents in Noida, Flats for , sale in Noida, Top property dealers, Property Agents in Noida,property dealers in noida for , rent, best real estate agents in noida, real estate agents in noida, property dealers in noida , extension, list of property dealers in greater noida, best property dealers in greater noida, , property dealers in noida and greater Noida, Top Real Estate Agents in Noida, Real Estate , Companies in Noida, Real Estate Brokers in Noida, Noida Real Estate Agents, Top Property , Brokers in Noida, Real Estate Consultants in Noida, List of House Brokers in Noida, , Commercial Property in Noida, Property in Noida, Commercial property for sale in noida, , best commercial property in noida, Commercial office space in noida, buy property in Noida, , Noida property prices, best property in Noida, Real-estate investment in Noida, office space , in Noida, buy commercial property in Noida, retail shops in Noida, Food court in Noida, Real , estate consultant in Noida, Real estate property consultant in Noida, Real estate Advisors in , Noida, Real estate property agents in Noida, property in noida" />
    </Helmet>
   <div className='container-abouts'>
   <div className='about-tags'>
       <h1 className='heading-image'>About Us</h1>
       <h1 className='aboutus-heading'>Our Architectural <br />Journey</h1>
       <h1 className='heading-paragraph' style={{justifyContent:"center"}}>Real estate development is booming, driven by urbanization and population growth. Developers are focusing on sustainable projects, integrating green spaces, and smart technologies to meet the increasing demand for modern, efficient Residential and Commercial.</h1>
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
   <p className='test'>From concept to completion, we uphold the highest standards of quality in every aspect of our work. Customer-Centric Approach: Your satisfaction is our top priority. We listen to your needs, understand your vision, and tailor our services to exceed your expectations. We embrace innovation and technology to deliver cutting-edge solutions that enhance the way we live, work, and play. Established in the year 2023 with a lofty ideal of Krafting the World, today, Rising Infra is one of India's leading top real estate and other conglomerates with a vision to fulfill the valuable expectations of customers by providing lifestyle spaces for their secured future and to be a benchmark for all the players in the Real estate industry.</p>
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
