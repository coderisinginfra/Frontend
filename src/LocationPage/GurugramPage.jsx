import React, { useContext, useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from 'axios';
import '../CSS/PropertyListings.css';
import { datasets } from '../App';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import BlogsSection from '../components/BlogsSection';
import { Helmet } from 'react-helmet';

const GurugramPage = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://www.backend.risinginfra.in/api/v1/gurugramproperty")
                // console.log(res.data)
                setData(res.data)
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
          <link rel="canonical" href="https://www.risinginfra.in/gurgaonproperty" />
          <meta name="description" content="Explore a diverse range of properties in Gurgaon with RisingInfra. Whether you're looking for luxury apartments, commercial spaces, or investment opportunities, find the best real estate options in Gurgaon." />
          <meta name="keywords" content="Gurgaon properties, real estate in Gurgaon, Gurgaon apartments, commercial spaces in Gurgaon, RisingInfra Gurgaon, Gurgaon real estate, Gurgaon property listings, Gurgaon residential properties, Gurgaon office spaces, Gurgaon rental properties, Gurgaon investment properties, Gurgaon property market, Gurgaon real estate agents, Gurgaon property deals, Gurgaon real estate investments, Gurgaon luxury apartments, Gurgaon property for sale, Gurgaon property for rent, Gurgaon commercial real estate, Gurgaon housing market, Gurgaon property development, Gurgaon land for sale, Gurgaon flats, Gurgaon villas, Gurgaon real estate opportunities, Gurgaon property management, Gurgaon residential flats, Gurgaon property services, Gurgaon real estate company, Gurgaon property trends, Gurgaon real estate market analysis" />
        </Helmet>
      <div className='projectcity'>
            <h1 className='headingwhoweare hedas'>Our Exclusive Projects</h1>
            <h1 className='heading-image props-name'>Discover Property With Rising Infra in Gurgaon</h1>
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
                <h1 className='whoweare'>Why Gurugram is Top Investment For Real Estate</h1>
                <p className='para-topics'>Gurgaon is India's second largest information technology hub and third largest financial and banking hub.Gurgaon is also home to one of India's largest medical tourism industries.Despite being India's 56th largest city in terms of population, Gurgaon is the 8th largest city in the country in terms of total wealth. It serves as the headquarters of many of India's largest companies, is home to thousands of startup companies and has local offices for more than 250 Fortune 500 companies. It accounts for almost 70% of the total annual economic investments in Haryana state, which has helped it become a leading hub for high-tech industry in northern India. Gurgaon is categorised as very high on the Human Development Index, with an HDI of 0.889 (2017).</p>
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

export default GurugramPage
