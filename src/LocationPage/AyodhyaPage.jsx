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
          <link rel="canonical" href="https://www.risinginfra.in/ayodhyaproperty" />
          <meta name="description" content="Explore a variety of properties in Ayodhya with RisingInfra. Discover residential, commercial, and investment opportunities in this historically significant city." />
          <meta name="keywords" content="Risin infra, RISING INFRA - GUNTURAyodhya properties, real estate in Ayodhya, Ayodhya apartments, commercial properties Ayodhya, residential plots Ayodhya, RisingInfra Ayodhya, property listings Ayodhya, Ayodhya real estate market, homes for sale in Ayodhya, rental properties Ayodhya, investment properties Ayodhya, Ayodhya property deals, land for sale in Ayodhya, Ayodhya flats, Ayodhya villas, Ayodhya property management, real estate investment Ayodhya, property for rent Ayodhya, Ayodhya real estate agents, property for sale Ayodhya, Ayodhya housing market, commercial spaces Ayodhya, residential properties Ayodhya, Ayodhya real estate opportunities, property trends Ayodhya, Ayodhya real estate services, Ayodhya property market analysis" />
          <meta name="author" content="Rising Infra" />
        </Helmet>
    <div className='projectcity'>
            <h1 className='headingwhoweare hedas'>Our Exclusive Projects</h1>
            <h1 className='heading-image props-name'>Discover Property With Rising Infra in Ayodhya</h1>
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
                <h1 className='whoweare'>Why Ayodhya is Top Investment For Real Estate</h1>
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
