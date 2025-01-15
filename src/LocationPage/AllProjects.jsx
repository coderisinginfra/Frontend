import React, { useEffect, useState } from 'react'
import '../CSS/HomePage.css'
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const AllProjects = (props) => {

  const [listings,setistings] = useState([])

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("https://backendrisinginfra.risinginfra.in/api/v1/fetchlistings");
        setistings(response.data.reverse());
      } catch (error) {
        // console.log(error);
      }
    };
    fetch();
  }, []);


  return (
    <>
        <Helmet>
            <title>{props.title}</title>
        </Helmet>
      <div className='projectcity-title'>
            <h1 className='headingwhoweare hedas'>Our Exclusive Projects</h1>
            <h1 className='heading-image props-name'>Discover Property With Rising Infra in India</h1>
        </div>
    <div className='tags-data-home'>
    {
        listings.map((item,index)=>(
          <div key={index} className='data-front-home'>
              <Link to={`/projects/${item.propertyTitle.replace(/ /g, '-').toLowerCase()}`} className='links-data-home'>
                <div>
                  <img src={item.images} alt="images" className='images-listing'  />
                  <h1 className='title-home'>{item.propertyTitle}</h1>
                  <div className='icons-image-home'>
                <LocationOnIcon style={{color:"green"}}/>
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
    </>
  )
}

export default AllProjects
