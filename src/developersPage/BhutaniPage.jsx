import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../CSS/PropertyListings.css';
import { Link } from 'react-router-dom';
import BlogsSection from '../components/BlogsSection';
import { Helmet } from 'react-helmet';

const BhutaniPage = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://www.backend.risinginfra.in/api/v1/bhutaniproject")
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
          <link rel="canonical" href="https://www.risinginfra.in/bhutanigroup" />
          <meta name="description" content="Bhutani Infra is a leading real estate developer known for innovative residential and commercial properties, blending modern design with quality craftsmanship and sustainable practices in prime location" />
          <meta name="keywords" content="Rising infra, Bhutani Infra, Bhutani Infra Real Estate, Bhutani Real Estate Developer, Bhutani Infra Projects, Bhutani Infra Properties, Bhutani Residential Projects, Bhutani Commercial Projects, Bhutani Infra Noida, Bhutani Infra Greater Noida, Bhutani Infra Ghaziabad, Bhutani Infra Delhi NCR, Best Real Estate Developer Bhutani, Bhutani Infra Residential Apartments, Bhutani Infra Commercial Spaces, Bhutani Infra India, Bhutani Infra Flats for Sale, Bhutani Infra Office Spaces, Bhutani Infra Luxury Apartments, Bhutani Infra Villas, Bhutani Infra Real Estate Solutions, Bhutani Infra Residential Communities, Bhutani Infra Urban Development, Bhutani Infra Sustainable Development, Bhutani Infra Modern Living, Bhutani Infra Premium Properties, Bhutani Infra Investment Opportunities, Bhutani Infra Real Estate Listings, Bhutani Infra Property Development, Bhutani Infra Trusted Developer, Bhutani Infra Real Estate Expertise, Bhutani Infra Home Buyers, Bhutani Infra Property Buyers, Bhutani Infra Real Estate Trends, Bhutani Infra Innovative Design, Bhutani Infra Quality Construction, Bhutani Infra Timely Delivery, Bhutani Infra Realty, Bhutani Infra New Projects, Bhutani Infra Property Management, Bhutani Infra High-End Properties, Bhutani Infra Project Updates, Bhutani Infra Real Estate Market, Bhutani Infra Residential Complexes, Bhutani Infra Smart Homes, Bhutani Infra Real Estate Investment, Bhutani Infra Property Search, Bhutani Infra Real Estate News, Bhutani Infra Apartments in Noida, Bhutani Infra Realty Services, Bhutani Infra Property Sales" />
        </Helmet>
        <div className='projectcity'>
            <h1 className='headingwhoweare hedas'>Bhutani Infra Exclusive OnGoing Projects </h1>
            <h1 className='heading-image props-name'>Discover Property With Rising Infra</h1>
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
                <h1 className='whoweare'>Bhutani Infra - Transforming Spaces, Creating Futures.</h1>
                <p className='para-topics'>Bhutani Infra is a prominent real estate developer dedicated to crafting cutting-edge residential and commercial properties. Renowned for its <b>innovative approach </b> and <b>quality craftsmanship </b>, Bhutani Infra delivers developments that blend modern aesthetics with functionality. Their projects are strategically located in key areas, offering excellent connectivity and strong investment potential. With a commitment to sustainability and <b>customer-centric service </b>, the group ensures every project meets the highest standards. Bhutani Infra is known for its <b>timely project execution </b> and transparent operations, making it a trusted name in the real estate sector, committed to enhancing urban environments.</p>
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

export default BhutaniPage
