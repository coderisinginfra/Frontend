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
          <link rel="canonical" href="https://www.risinginfra.in/bhutani-group" />
          <meta name="description" content="Bhutani Infra is a leading real estate developer known for innovative residential and commercial properties. contact us +91 9990633353 now." />
          <meta name="keywords" content="Bhutani Infra, Bhutani Real Estate Developer, Bhutani Infra Projects, Bhutani Infra Properties" />
          <meta name="robots" content="INDEX,FOLLOW"/>
          <meta name="Robots" content="INDEX, FOLLOW" />
          <meta name="robots"  content="noydir" />
          <meta name="Content-Language" content="en-us" />
          <meta name="Publisher" content="Rising infra" />
          <meta name="distribution" content="LOCAL" />
          <meta name="page-topic" content="Rising infra"/>
          <meta name="YahooSeeker" content="INDEX, FOLLOW"/>
          <META name="msnbot"  content="INDEX, FOLLOW"/>
          <meta name="googlebot" content="index,follow"/>
          <META name="allow-search" content="yes"/>
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Rising infra"/>
          <meta property="og:url" content="https://www.risinginfra.in/bhutani-group" />
          <meta property="og:image" content="https://www.risinginfra.in/assets/bhutaninfra-O_E715t1.avif" />
          <meta property="og:title" content={props.title} />
          <meta property="og:description" content="Bhutani Infra is a leading real estate developer known for innovative residential and commercial properties. contact us +91 9990633353 now." />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={props.title} />
          <meta name="twitter:description" content="Bhutani Infra is a leading real estate developer known for innovative residential and commercial properties. contact us +91 9990633353 now."/>
          <meta name="twitter:image" content="https://www.risinginfra.in/assets/bhutaninfra-O_E715t1.avif" />
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
