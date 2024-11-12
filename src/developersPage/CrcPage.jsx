import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../CSS/PropertyListings.css';
import { Link } from 'react-router-dom';
import BlogsSection from '../components/BlogsSection';
import { Helmet } from 'react-helmet';

const CrcPage = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://www.backend.risinginfra.in/api/v1/crcproject")
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
          <link rel="canonical" href="https://www.risinginfra.in/crcgroup" />
          <meta name="description" content="CRC Group is a prominent real estate developer known for delivering exceptional residential and commercial properties in Delhi/NCR. contact us +91 9990633353 now" />
          <meta name="keywords" content="CRC Group, CRC Real Estate Developer, CRC Group Projects, CRC Group Properties, " />
        </Helmet>
        <div className='projectcity'>
            <h1 className='headingwhoweare hedas'>CRC Group Exclusive OnGoing Projects </h1>
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
                <h1 className='whoweare'>CRC Group - Pioneering Excellence in Real Estate Development.</h1>
                <p className='para-topics'>CRC Group is a visionary real estate developer, recognized for its commitment to quality and <b>timely delivery </b> of projects. With a focus on sustainable development and innovative design, CRC Group has crafted residential and commercial spaces that embody luxury and functionality. Their projects are located in prime areas of Delhi NCR, ensuring excellent connectivity and high investment potential. The group's dedication to <b>customer satisfaction </b> and <b>ethical practices</b> has established them as a trusted name in the industry. CRC Group continues to push the boundaries of urban development, creating spaces that inspire and elevate lifestyles.</p>
                <ul className='list-ul'>
                    <li className='list-li'>A strong focus on meeting and exceeding customer expectations.</li>
                    <li className='list-li'>CRC Group operates with transparency and integrity in all its dealings.</li>
                    <li className='list-li'>Projects are well-connected to major roads, highways, and public transport.</li>
                    <li className='list-li'>Projects feature modern and innovative architectural designs.</li>
                    <li className='list-li'>Projects are completed on schedule, ensuring customer trust and satisfaction.</li>
                    <li className='list-li'>Emphasis on eco-friendly and sustainable building practices.</li>
                    <li className='list-li'>Projects feature modern and innovative architectural designs.</li>
                    <li className='list-li'>Properties are strategically located in prime areas of Delhi NCR.</li>
                </ul>
            </div>

        <BlogsSection /> 
        </>
    )
}

export default CrcPage
