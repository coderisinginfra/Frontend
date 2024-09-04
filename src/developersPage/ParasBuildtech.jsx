import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../CSS/PropertyListings.css';
import { Link } from 'react-router-dom';
import BlogsSection from '../components/BlogsSection';
import { Helmet } from 'react-helmet';

const ParasBuildtech = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://www.backend.risinginfra.in/api/v1/parasgroupfetch")
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
          <link rel="canonical" href="https://www.risinginfra.in/parasgroup" />
          <meta name="description" content="Paras Buildtech is a leading real estate developer known for its innovative residential and commercial projects, blending exceptional design, quality construction, and sustainability in prime locations." />
          <meta name="keywords" content="Rising infra, Paras Buildtech, Paras Buildtech Real Estate, Paras Real Estate Developer, Paras Buildtech Projects, Paras Buildtech Properties, Paras Residential Projects, Paras Commercial Projects, Paras Buildtech Noida, Paras Buildtech Greater Noida, Paras Buildtech Ghaziabad, Paras Buildtech Delhi NCR, Best Real Estate Developer Paras, Paras Buildtech Residential Apartments, Paras Buildtech Commercial Spaces, Paras Buildtech India, Paras Buildtech Flats for Sale, Paras Buildtech Office Spaces, Paras Buildtech Luxury Apartments, Paras Buildtech Villas, Paras Buildtech Real Estate Solutions, Paras Buildtech Residential Communities, Paras Buildtech Urban Development, Paras Buildtech Sustainable Development, Paras Buildtech Modern Living, Paras Buildtech Premium Properties, Paras Buildtech Investment Opportunities, Paras Buildtech Real Estate Listings, Paras Buildtech Property Development, Paras Buildtech Trusted Developer, Paras Buildtech Real Estate Expertise, Paras Buildtech Home Buyers, Paras Buildtech Property Buyers, Paras Buildtech Real Estate Trends, Paras Buildtech Innovative Design, Paras Buildtech Quality Construction, Paras Buildtech Timely Delivery, Paras Buildtech Realty, Paras Buildtech New Projects, Paras Buildtech Property Management, Paras Buildtech High-End Properties, Paras Buildtech Project Updates, Paras Buildtech Real Estate Market, Paras Buildtech Residential Complexes, Paras Buildtech Smart Homes, Paras Buildtech Real Estate Investment, Paras Buildtech Property Search, Paras Buildtech Real Estate News, Paras Buildtech Apartments in Noida, Paras Buildtech Realty Services, Paras Buildtech Property Sales" />
        </Helmet>
        <div className='projectcity'>
            <h1 className='headingwhoweare hedas'>Paras Group Exclusive OnGoing Projects </h1>
            <h1 className='heading-image props-name'>Discover Property With Rising Infra</h1>
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
                <h1 className='whoweare'>Paras Buildtech - Building Dreams, Shaping Skylines.</h1>
                <p className='para-topics'>Paras Buildtech is a distinguished real estate developer renowned for creating high-quality residential and commercial spaces. With a focus on <b>innovative design </b> and <b>superior construction </b>, Paras Buildtech delivers projects that enhance urban living and meet modern needs. Their developments are situated in strategic locations, ensuring excellent connectivity and significant investment potential. Committed to <b>sustainability </b> and <b>customer satisfaction </b>, the group emphasizes timely delivery and <b>transparent practices </b>. Paras Buildtech continues to set new standards in the real estate industry, contributing to the growth and transformation of urban landscapes with its cutting-edge projects.</p>
                <ul className='list-ul'>
                    <li className='list-li'>Strategically chosen sites for maximum convenience and value.</li>
                    <li className='list-li'>Focus on superior materials and craftsmanship.</li>
                    <li className='list-li'>Dedicated to meeting and exceeding client expectations.</li>
                    <li className='list-li'>Transparent and honest business dealings.</li>
                    <li className='list-li'>Utilization of the latest advancements in construction and design.</li>
                    <li className='list-li'>Projects completed on schedule without compromising quality.</li>
                    <li className='list-li'>Honesty and integrity in all business transactions.</li>
                    <li className='list-li'>Stringent quality standards across all developments.</li>
                </ul>
            </div>

        <BlogsSection /> 
        </>
    )
}

export default ParasBuildtech
