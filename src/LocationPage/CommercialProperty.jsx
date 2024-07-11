import React, { useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from 'axios';
// import '../CSS/PropertyListings.css';
import BlogsSection from '../components/BlogsSection';
import { Link } from 'react-router-dom';

const CommercialProperty = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        document.title = props.title      
    }, [props.title]) 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://www.backend.risinginfra.in/api/v1/findcommercial")
                setData(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, []) 
  return (
    <>
    <div className='projectcity'>
          <h1 className='headingwhoweare hedas'>Our Exclusive Commercial Projects</h1>
          <h1 className='heading-image props-name'>Discover Commercial Property With Rising Infra </h1>
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
              <h1 className='whoweare'>Why Commercial Property is Top Investment For Real Esate</h1>
              <p className='para-topics'>Investing in commercial property presents a highly lucrative opportunity for investors seeking substantial returns. Commercial properties, including office buildings, retail spaces, and industrial warehouses, typically offer higher rental yields compared to residential properties. These investments often come with longer lease agreements, ensuring stable and predictable income streams. The demand for commercial spaces in thriving business districts remains robust, enhancing the potential for capital appreciation.Additionally, commercial property investments provide diverse income opportunities through multi-tenant leases, minimizing the risk of total vacancy. Investors can also benefit from favorable tax treatments, such as deductions on mortgage interest and property depreciation. The professional nature of commercial tenants often results in better-maintained properties, reducing management hassles. Furthermore, commercial real estate can be a hedge against inflation, as lease agreements often include clauses for rent increases.</p>
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

export default CommercialProperty
