import React, { useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from 'axios';
import '../CSS/PropertyListings.css';
import BlogsSection from '../components/BlogsSection';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ResidentialProperty = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://www.backend.risinginfra.in/api/v1/findresidential")
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
      <link rel="canonical" href="https://www.risinginfra.in/residential-properties" />
      <meta name="description" content="Find your dream home among our extensive listings of apartments, houses, and villas for sale or rent. contact us +91 9990633353 now." />
      <meta name="keywords" content="residential properties in noida, apartment for rent in Noida,  villas for sale,  Buy Residential property in Noida, top 10 residential property in noida" />
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
      <meta property="og:url" content="https://www.risinginfra.in/residential-properties" />
      <meta property="og:image" content="https://www.risinginfra.in/assets/buyinghome-8mxR9DOZ.jpg" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content="Find your dream home among our extensive listings of apartments, houses, and villas for sale or rent. contact us +91 9990633353 now." />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content="Find your dream home among our extensive listings of apartments, houses, and villas for sale or rent. contact us +91 9990633353 now."/>
      <meta name="twitter:image" content="https://www.risinginfra.in/assets/buyinghome-8mxR9DOZ.jpg" />
    </Helmet>
    <div className='projectcity'>
          <h1 className='headingwhoweare hedas'>Our Exclusive Residential Projects</h1>
          <h1 className='heading-image props-name'>Discover Residential Property With Rising Infra </h1>
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
              <h1 className='whoweare'>Buy Residential Property in Noida</h1>
              <p className='para-topics'>Investing in residential property is a compelling choice for many investors due to its numerous benefits. Residential properties often provide a steady and reliable source of rental income, ensuring a consistent cash flow. The demand for housing is ever-present, making it easier to find tenants and maintain occupancy. Residential properties also tend to appreciate over time, offering capital gains potential alongside rental income. They provide a sense of security and stability, as people always need places to live, regardless of market conditions. Additionally, owning residential property allows for various tax benefits, including deductions on mortgage interest, property taxes, and depreciation. The ability to leverage financing options makes it accessible for many investors to enter the market. Furthermore, residential properties can be less volatile compared to other investment types, offering a balanced risk-reward profile. Overall, residential property investment combines income generation, appreciation, and stability, making it an attractive option for long-term wealth creation.</p>
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

export default ResidentialProperty
