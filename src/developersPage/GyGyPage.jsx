import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../CSS/PropertyListings.css';
import { Link } from 'react-router-dom';
import BlogsSection from '../components/BlogsSection';
import { Helmet } from 'react-helmet';

const GyGyPage = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://backendrisinginfra.risinginfra.in/api/v1/gygyfetch")
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
          <link rel="canonical" href="https://www.risinginfra.in/gygy-group" />
          <meta name="description" content="GyGy Group is a renowned real estate developer, specializing in creating modern, sustainable residential and commercial properties in delhi/NCR. contact us +91 9990633353 now." />
          <meta name="keywords" content="GyGy Group, GyGy Real Estate Developer, GyGy Group Projects, GyGy Group Properties" />
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
          <meta property="og:url" content="https://www.risinginfra.in/gygy-group" />
          <meta property="og:image" content="https://www.risinginfra.in/assets/gygy-Bly_Ou9Z.avif" />
          <meta property="og:title" content={props.title} />
          <meta property="og:description" content="GyGy Group is a renowned real estate developer, specializing in creating modern, sustainable residential and commercial properties in delhi/NCR. contact us +91 9990633353 now." />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={props.title} />
          <meta name="twitter:description" content="GyGy Group is a renowned real estate developer, specializing in creating modern, sustainable residential and commercial properties in delhi/NCR. contact us +91 9990633353 now."/>
          <meta name="twitter:image" content="https://www.risinginfra.in/assets/gygy-Bly_Ou9Z.avif" />
        </Helmet>
        <div className='projectcity'>
            <h1 className='headingwhoweare hedas'>GyGy Group Exclusive OnGoing Projects </h1>
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
                <h1 className='whoweare'>GyGy Group - Innovating Spaces, Enriching Lives.</h1>
                <p className='para-topics'>GyGy Group is a distinguished real estate developer known for its excellence in crafting innovative residential and commercial properties. With a focus on <b>sustainability</b> and <b>modern design</b>, GyGy Group is committed to delivering high-quality developments that enhance urban living. Their projects are strategically located in <b>prime areas</b>, offering both convenience and investment potential. The group’s dedication to <b>customer satisfaction </b> and <b>timely delivery </b> sets them apart as a reliable partner in real estate. GyGy Group continues to lead the industry with its cutting-edge technology and <b> ethical practices </b>, creating spaces that elevate lifestyles and drive growth.</p>
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

export default GyGyPage
