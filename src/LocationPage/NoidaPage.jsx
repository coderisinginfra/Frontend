import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../CSS/PropertyListings.css';
import { datasets } from '../App';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import BlogsSection from '../components/BlogsSection';
import { Helmet } from 'react-helmet';

const NoidaPage = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://backendrisinginfra.risinginfra.in/api/v1/noidaproperty")
                // console.log(res.data)
                setData(res.data.reverse())
            } catch (error) {
                // console.log(error)
            }
        }
        fetchData()
    }, []) 


    return (
        <>
        <Helmet>
          <title>{props.title}</title>
          <link rel="canonical" href="https://www.risinginfra.in/property-in-noida" />
          <meta name="description" content="luxurious apartments to commercial spaces, explore the best real estate opportunities in Noida. contact us +91 9990633353 now." />
          <meta name="keywords" content="property in Noida, buy apartment in Noida, buy  properties in Noida, buy plots in Noida, villas in Noida, property for rent in Noida,  property for sale in Noida, property for sale in Noida" />
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
          <meta property="og:url" content="https://www.risinginfra.in/property-in-noida" />
          <meta property="og:image" content="https://www.risinginfra.in/assets/Noida-CREHoSf8.jpg" />
          <meta property="og:title" content={props.title} />
          <meta property="og:description" content="luxurious apartments to commercial spaces, explore the best real estate opportunities in Noida. contact us +91 9990633353 now." />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={props.title} />
          <meta name="twitter:description" content="luxurious apartments to commercial spaces, explore the best real estate opportunities in Noida. contact us +91 9990633353 now."/>
          <meta name="twitter:image" content="https://www.risinginfra.in/assets/Noida-CREHoSf8.jpg" />
        </Helmet>
        <div className='projectcity'>
            <h1 className='headingwhoweare hedas'>Our Exclusive OnGoing Projects</h1>
            <h1 className='heading-image props-name'>Discover Property With Rising Infra in Noida</h1>
        </div>
        <div className='tags-data-home-filter'>
      {
        data.map((item,index)=>(
          <div key={index} className='data-front-home'>
              <Link to={`/projects/${item.propertyTitle.replace(/ /g, '-').toLowerCase()}`} className='links-data-home'>
                <div>
                  <img src={item.images} alt="images" className='images-listing' />
                  <h1 className='title-home'>{item.propertyTitle}</h1>
                  <div className='icons-image-home'>
                <LocationOnIcon style={{color:"#25D366"}}/>
                <p style={{ color: '#3C3D37', marginLeft: '10px' }}><b>{item.location}</b></p>
              </div>
              <div className="prices-demad">
                <div className="left"><h6 style={{ marginTop: '-5px' }}>Size {item.size}.<sup>*</sup></h6></div>
                <div className="right"><h6 style={{ marginLeft: '2em', marginTop: '-5px' }}>Rs {item.price}<sup>*</sup></h6></div>
              </div>
            </div>
          </Link>
          </div>
    ))
      }
</div>

            <div className='investment-topics'>
                <h1 className='whoweare'>Buy Property In Noida</h1>
                <p className='para-topics'>Noida, short for New Okhla Industrial Development Authority, is a city located in Gautam Buddha Nagar district of the Indian state of Uttar Pradesh. Noida is a satellite city of Delhi and is a part of the National Capital Region. According to the 2021 Delhi Master Plan, Noida is a part of CNCR (Central National Capital Region) or DMA (Delhi Metropolitan Area). As per provisional reports of Census of India, the population of Noida in 2011 was 642,381. The city is managed by New Okhla Industrial Development Authority (NOIDA). The district's administrative headquarters are in the nearby city of Greater Noida.</p>
                <ul className='list-ul'>
                    <li className='list-li'>Excellent Connectivity and Infrastructure</li>
                    <li className='list-li'>Booming Commercial Hub</li>
                    <li className='list-li'>commercial real estate buildings</li>
                    <li className='list-li'>World-Class Educational Institutions</li>
                    <li className='list-li'>Modern Amenities and Lifestyle</li>
                    <li className='list-li'>Green and Sustainable Living</li>
                    <li className='list-li'>Affordable Housing Options</li>
                    <li className='list-li'>Planned Urban Development</li>
                </ul>
            </div>

        <BlogsSection /> 
        </>
    )
}

export default NoidaPage
