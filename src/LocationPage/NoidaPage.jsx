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
                const res = await axios.get("https://www.backend.risinginfra.in/api/v1/noidaproperty")
                console.log(res.data)
                setData(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, []) 


    return (
        <>
        <Helmet>
          <title>{props.title}</title>
          <link rel="canonical" href="https://www.risinginfra.in/noidaproperty" />
          <meta name="description" content="Discover a wide range of properties in Noida with RisingInfra. From luxurious apartments to commercial spaces, explore the best real estate opportunities in Noida." />
          <meta name="keywords" content="Noida properties, real estate in Noida, Noida apartments, commercial spaces in Noida, RisingInfra Noida, Noida real estate, Noida property listings, Noida residential properties, Noida office spaces, Noida rental properties, Noida investment properties, Noida property market, Noida real estate agents, Noida property deals, Noida real estate investments, Noida luxury apartments, Noida property for sale, Noida property for rent, Noida commercial real estate, Noida housing market, Noida property development, Noida land for sale, Noida flats, Noida villas, Noida real estate opportunities, Noida property management, Noida residential flats, Noida property services, Noida real estate company" />
        </Helmet>
        <div className='projectcity'>
            <h1 className='headingwhoweare hedas'>Our Exclusive OnGoing Projects</h1>
            <h1 className='heading-image props-name'>Discover Property With Rising Infra in Noida</h1>
        </div>
        <div className='tags-data-home-filter'>
      {
        data.map((item,index)=>(
          <div key={index} className='data-front-home'>
              <Link to={`/projects/${item.propertyTitle}`} className='links-data-home'>
                <div>
                  <img src={item.images} alt="images" className='images-listing' />
                  <h1 className='title-home'>{item.propertyTitle}</h1>
                  <div className='icons-image-home'>
                <LocationOnIcon style={{color:"#25D366"}}/>
                <p style={{ color: 'gray', marginLeft: '10px' }}><b>{item.location}</b></p>
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
                <h1 className='whoweare'>Why Noida is Top Investment For Real Esate</h1>
                <p className='para-topics'>Noida, short for New Okhla Industrial Development Authority, is a city located in Gautam Buddha Nagar district of the Indian state of Uttar Pradesh. Noida is a satellite city of Delhi and is a part of the National Capital Region. According to the 2021 Delhi Master Plan, Noida is a part of CNCR (Central National Capital Region) or DMA (Delhi Metropolitan Area). As per provisional reports of Census of India, the population of Noida in 2011 was 642,381. The city is managed by New Okhla Industrial Development Authority (NOIDA). The district's administrative headquarters are in the nearby city of Greater Noida.</p>
                <ul className='list-ul'>
                    <li className='list-li'>Excellent Connectivity and Infrastructure</li>
                    <li className='list-li'>Booming Commercial Hub</li>
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
