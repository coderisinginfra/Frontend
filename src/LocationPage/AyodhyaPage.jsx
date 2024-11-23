import React, { useContext, useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from 'axios';
import '../CSS/PropertyListings.css';
import BlogsSection from '../components/BlogsSection';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AyodhyaPage = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        document.title = props.title      
    }, [props.title]) 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://www.backend.risinginfra.in/api/v1/ayodhyaproperty")
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
          <link rel="canonical" href="https://www.risinginfra.in/property-in-ayodhya" />
          <meta name="description" content="Discover residential, commercial, and investment opportunities in this historically significant city. contact us +91 9990633353 now." />
          <meta name="keywords" content="property in ayodhya, Buy apartment in ayodhya, Buy plots in ayodhya, villas in ayodhya, property for rent in ayodhya, property for sale in ayodhya, property for rent in ayodhya, properties in ayodhya" />
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
          <meta property="og:url" content="https://www.risinginfra.in/property-in-ayodhya" />
          <meta property="og:image" content="https://www.risinginfra.in/assets/Ayodhya-DdkyxJ43.jpg" />
          <meta property="og:title" content={props.title} />
          <meta property="og:description" content="Discover residential, commercial, and investment opportunities in this historically significant city. contact us +91 9990633353 now." />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={props.title} />
          <meta name="twitter:description" content="Discover residential, commercial, and investment opportunities in this historically significant city. contact us +91 9990633353 now."/>
          <meta name="twitter:image" content="https://www.risinginfra.in/assets/Ayodhya-DdkyxJ43.jpg" />
        </Helmet>
    <div className='projectcity'>
            <h1 className='headingwhoweare hedas'>Our Exclusive Projects</h1>
            <h1 className='heading-image props-name'>Discover Property With Rising Infra in Ayodhya</h1>
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
                <h1 className='whoweare'>Buy Property in Ayodhya</h1>
                <p className='para-topics'>Ayodhya was historically known as Saketa. The early Buddhist and Jain canonical texts mention that the religious leaders Gautama Buddha and Mahavira visited and lived in the city. The Jain texts also describe it as the birthplace of five tirthankaras namely, Rishabhanatha, Ajitanatha, Abhinandananatha, Sumatinatha and Anantanatha, and associate it with the legendary Bharata Chakravarti. From the Gupta period onwards, several sources mention Ayodhya and Saketa as the name of the same city.</p>
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

export default AyodhyaPage
