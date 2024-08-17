import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Attraction = (props) => {
  useEffect(() => {
    if (props.title) {
      document.title = props.title;
    }
  }, [props.title]);

  return (
    <div>
      <Helmet>
      <title>{props.title}</title>
      <link rel="canonical" href="https://www.risinginfra.in/certification" />
      <meta name="description" content="Learn more about RisingInfra, Certifications, and the team behind our success in the real estate industry." />
      <meta name="keywords" content="RisingInfra, certification, about us, real estate, team, mission, vision,Rising Infra, Rising Infra Noida, Rising Infra Private Limited, Property In Noida, Property On Noida Expressway, Commercial Property On Noida Expressway, Noida Commercial Projects, Noida Expressway Commercial Projects, Residential Property On Noida Expressway, Noida Expressway Property, Residential Projects On Noida Expressway, Noida Expressway Residential Projects, Noida Property Prices, Noida Properties, Commercial Property In Noida, Property In Noida For Sale, Best Property In Noida, Buy Property In Noida, Property In Noida Ready To Move,Residential Property In Noida, Luxury Property In Noida, Commercial Property In Noida For Sale, best real estate company in noida,best real estate company in noida for job, top 10 real estate companies in noida, famous companies in noida, real estate companies in noida, no 1 real estate company in the world, which real estate company is best for new agents, best real estate company in nyc, top real estate company in noida, top 10 real estate company in noida, best real estate in noida, best real estate companies in greater noida, best real estate consultant in noida, best property dealer in noida, noida real estate company, best real estate brokers in noida, top real estate companies in noida, fortune 500 companies in noida, best real estate developers in noida, best real estate agents in noida,best properties noida, real estate company in noida, no 1 real estate company in india, best real estate projects in noida, best property dealers in noida extension, noida best property dealers, noida best property, top 5 real estate companies in noida, top 10 real estate brokers in noida, real estate company in noida sector 94" />
    </Helmet>
        <div className='heading-blogs home-front-blogs'>
                  <h1>Our Certification</h1>
                  <div className='border-bottom-blog'> </div>
        </div>
        <div className='tags-data-home'>
          <div className='data-front-home-certification'>
          <a 
        href="https://www.nextbizthing.com/noida/real-estate/risinginfra?from=badge"  
        title="Find me on NextBizThing" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          src="https://www.nextbizthing.com/images/memberbadge.png" 
          alt="NextBizThing Badge" 
          style={{ border: 'none' }}
        />
      </a> 
          </div>
    </div>                     
    </div>
  );
};

export default Attraction;
