import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../CSS/PropertyListings.css';
import { Link } from 'react-router-dom';
import BlogsSection from '../components/BlogsSection';
import { Helmet } from 'react-helmet';

const ParasBuildtech = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://www.backend.risinginfra.in/api/v1/parasproject")
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
          <link rel="canonical" href="https://www.risinginfra.in/parasgroup" />
          <meta name="description" content="Paras Buildtech is a leading real estate developer known for its innovative residential and commercial projects. contact us +91 9990633353 now" />
          <meta name="keywords" content="Paras Group, Paras Buildtech, Paras group Projects, Paras group Properties, Paras Group Delhi/NCR," />
        </Helmet>
        <div className='projectcity'>
            <h1 className='headingwhoweare hedas'>Paras Group Exclusive OnGoing Projects </h1>
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
                <h1 className='whoweare'>Paras Buildtech - Building Dreams, Shaping Skylines.</h1>
                <p className='para-topics'>Paras Buildtech is a distinguished real estate developer renowned for creating high-quality residential and commercial spaces. With a focus on <b>innovative design </b> and <b>superior construction </b>, Paras Buildtech delivers projects that enhance urban living and meet modern needs. Their developments are situated in strategic locations, ensuring excellent connectivity and significant investment potential. Committed to <b>sustainability </b> and <b>customer satisfaction </b>, the group emphasizes timely delivery and <b>transparent practices </b>. Paras Buildtech continues to set new standards in the real estate industry, contributing to the growth and transformation of urban landscapes with its cutting-edge projects.</p>
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

export default ParasBuildtech
