import React, { useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from 'axios';
import '../CSS/PropertyListings.css';
import BlogsSection from '../components/BlogsSection';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const PlotsProperty = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        document.title = props.title      
    }, [props.title]) 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://www.backend.risinginfra.in/api/v1/buyplots")
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
          <link rel="canonical" href="https://www.risinginfra.in/plots" />
          <meta name="description" content="Explore prime land options for residential, commercial, and investment purposes in Noida with risinginfra. contact us +91 9990633353 now." />
          <meta name="keywords" content="plots for sale, land for sale,  residential plots, plot in noida, plot in greater noida, plot near jewar airport, land in noida, plots for sale near me" />
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
          <meta property="og:url" content="https://www.risinginfra.in/plots" />
          <meta property="og:image" content="https://www.risinginfra.in/assets/finallogo-BMQWcxs0.png" />
          <meta property="og:title" content={props.title} />
          <meta property="og:description" content="Explore prime land options for residential, commercial, and investment purposes in Noida with risinginfra. contact us +91 9990633353 now." />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={props.title} />
          <meta name="twitter:description" content="Explore prime land options for residential, commercial, and investment purposes in Noida with risinginfra. contact us +91 9990633353 now."/>
          <meta name="twitter:image" content="https://www.risinginfra.in/assets/finallogo-BMQWcxs0.png" />
      </Helmet>
    <div className='projectcity'>
          <h1 className='headingwhoweare hedas'>Our Exclusive Plots Projects</h1>
          <h1 className='heading-image props-name'>Discover Plots Property With Rising Infra </h1>
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
              <h1 className='whoweare'>Buy Plots in Delhi/NCR</h1>
              <p className='para-topics'>Investing in plots offers a multitude of advantages, making it an ideal choice for savvy investors. Firstly, plots generally appreciate in value over time, providing substantial returns on investment. Unlike residential properties, plots require minimal maintenance and upkeep, reducing ongoing costs. Additionally, plots offer flexibility; investors can build their dream home, commercial property, or simply hold onto the land as its value increases. The demand for land in prime locations is consistently high, ensuring liquidity and ease of resale. Furthermore, plots are less susceptible to market fluctuations compared to built-up properties. They also come with fewer complications related to tenancy and property management. The potential for customization and development makes plots an attractive option for those looking to create bespoke properties. Overall, investing in plots is a sound strategy that combines low maintenance, high appreciation potential, and versatile usage options, making it a top choice for long-term financial growth.</p>
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

export default PlotsProperty
