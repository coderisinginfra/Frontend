import React, { useContext, useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from 'axios';
import '../CSS/PropertyListings.css';
import { Link } from 'react-router-dom';
import BlogsSection from '../components/BlogsSection';

const Ghaziabad = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        document.title = props.title      
    }, [props.title]) 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://www.backend.risinginfra.in/api/v1/ghaziabadproperties")
                setData(res.data.reverse())
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, []) 


  return (
    <>
      <div className='projectcity'>
            <h1 className='headingwhoweare hedas'>Our Exclusive Projects</h1>
            <h1 className='heading-image props-name'>Discover Property With Rising Infra in Ghaziabad</h1>
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
                <h1 className='whoweare'>Why Ghaziabad is Top Investment For Real Esate</h1>
                <p className='para-topics'>Ghaziabad is a state on the southwestern coast of India within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats. It is bound by the Indian states of Maharashtra to the north, and Karnataka to the east and south, with the Arabian Sea in the west. It is India's smallest state by area and fourth-smallest by population. Goa has the highest GDP per capita among all Indian states, two and a half times as high as the GDP per capita of the country as a whole. The Eleventh Finance Commission of India named Goa the best-placed state because of its infrastructure, and India's National Commission on Population rated it as having the best quality of life in India (based on the commission's "12 Indicators"). It is the second-highest ranking among Indian states in the human development index.</p>
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

export default Ghaziabad