import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../CSS/PropertyListings.css';
import { Link } from 'react-router-dom';
import BlogsSection from '../components/BlogsSection';
import { Helmet } from 'react-helmet';

const GaursPage = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://www.backend.risinginfra.in/api/v1/gaurfetch")
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
          <link rel="canonical" href="https://www.risinginfra.in/gaursgroup" />
          <meta name="description" content="Gaur Group is a trusted real estate developer, delivering innovative residential projects in india." />
          <meta name="keywords" content="Gaur Group, Gaur Group Real Estate, Gaur Real Estate Developer, Gaur Group Projects, Gaur Group Properties, Gaur Residential Projects, Gaur Commercial Projects, Gaur Group Noida, Gaur Group Greater Noida, Gaur Group Ghaziabad, Gaur Group Ghaziabad, Gaur Group Residential Apartments, Gaur Group India, gaur city" />
        </Helmet>
        <div className='projectcity'>
            <h1 className='headingwhoweare hedas'>GAUR Group Exclusive OnGoing Projects </h1>
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
                <h1 className='whoweare'>Gaur Group - Shaping the Future of Real Estate.</h1>
                <p className='para-topics'>Gaur Group is a leading real estate developer renowned for its <b>innovative projects </b>and unwavering commitment to quality. With a legacy spanning decades, the group has successfully delivered numerous <b>residential and commercial </b> landmarks that have redefined urban living. Gaur Group focuses on customer-centric development, ensuring that every project offers modern amenities and sustainable solutions. Their properties are strategically located in high-growth corridors, offering excellent connectivity and investment potential. Known for <b>timely project delivery </b> and transparent dealings, Gaur Group continues to set new benchmarks in the real estate sector, transforming visions into reality.</p>
                <ul className='list-ul'>
                    <li className='list-li'>Properties in well-connected and rapidly developing areas.</li>
                    <li className='list-li'>Environmentally responsible construction practices.</li>
                    <li className='list-li'>Properties are strategically located in prime areas of Delhi NCR.</li>
                    <li className='list-li'>Projects are well-connected to major roads, highways, and public transport.</li>
                    <li className='list-li'>Projects feature modern and innovative architectural designs.</li>
                    <li className='list-li'>Projects are completed on schedule, ensuring customer trust and satisfaction.</li>
                    <li className='list-li'>Honesty and integrity in all business transactions.</li>
                    <li className='list-li'>Stringent quality standards across all developments.</li>
                </ul>
            </div>

        <BlogsSection /> 
        </>
    )
}

export default GaursPage
