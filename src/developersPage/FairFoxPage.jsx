import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../CSS/PropertyListings.css';
import { Link } from 'react-router-dom';
import BlogsSection from '../components/BlogsSection';
import { Helmet } from 'react-helmet';

const FairFoxPage = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://www.backend.risinginfra.in/api/v1/fairfoxproject")
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
          <link rel="canonical" href="https://www.risinginfra.in/fairfoxgroup" />
          <meta name="description" content="Fairfox Group excels in real estate development with innovative commercial projects combining modern design, and sustainability in prime locations for optimal value." />
          <meta name="keywords" content="Fairfox Group, Fairfox Real Estate Developer, Fairfox Group properties, Fairfox Group Projects" />
        </Helmet>
        <div className='projectcity'>
            <h1 className='headingwhoweare hedas'>FAIRFOX Group Exclusive OnGoing Projects </h1>
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
                <h1 className='whoweare'>Fairfox Group - Redefining Real Estate with Innovation and Integrity.</h1>
                <p className='para-topics'>Fairfox Group is a prominent real estate developer celebrated for its commitment to creating exceptional <b>residential and commercial properties</b>. Known for its innovative designs and high-quality construction, Fairfox Group delivers projects that blend modern aesthetics with functionality. Their developments are situated in <b>strategic locations </b>, ensuring <b>excellent connectivity</b> and <b> strong investment potential </b>. The group prioritizes sustainability and customer satisfaction, emphasizing timely project completion and <b>transparent business practices</b>. Fairfox Group continues to set new benchmarks in the industry, transforming urban landscapes with its cutting-edge projects and dedication to excellence.</p>
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

export default FairFoxPage
