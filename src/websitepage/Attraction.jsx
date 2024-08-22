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
      <meta name="keywords" content="RisingInfra, certification, about us, real estate, team, mission, vision,Rising Infra, Rising Infra Noida, Rising Infra Private Limited, Property In Noida, Property On Noida Expressway, Commercial Property On Noida Expressway, Noida Commercial Projects, Noida Expressway Commercial Projects, Residential Property On Noida Expressway, Noida Expressway Property, Residential Projects On Noida Expressway, Noida Expressway Residential Projects, Noida Property Prices, Noida Properties, Commercial Property In Noida, Property In Noida For Sale, Best Property In Noida, Buy Property In Noida, Rising Infra, Rising Infra Noida, residential property in Noida, residential properties in Noida, best residential property in Noida, best residential projects in Noida, top residential properties in Noida, Real estate,Real estate near me, Real estate for sale,, Real Estate listings,Best Realtor in Noida, Real Estate Agent, Real Estate Brokerage,Realty,Investment property,Commercial real estate, Residential real estate, Real estate agents in [city name]commercial property in Noida, commercial properties in Noida, best commercial property in Noida, best commercial projects in Noida, top commercial properties in Noida, Rising Infra Private Limited, Property In Noida, Property On Noida Expressway, Commercial Property On Noida Expressway, Noida Commercial Projects, Noida Expressway Commercial Projects, commercial Property On Noida Expressway, Noida Expressway Property, commercial Projects On Noida Expressway, Noida Expressway commercial Projects, Noida Property Prices, Noida Properties, Commercial Property In Noida, Property In Noida For Sale, Best Property In Noida, Buy Property In Noida, Property In Noida Ready To Move,commercial Property In Noida, Luxury Property In Noida, Commercial Property In Noida For Sale, best real estate company in noida,best society in noida ready to move, best project in noida, new residential projects in noida,Home for sale,How to buy a home,New homes for sale,Property for sale, House for sale, Luxury homes for sale, Apartment for sale, Cheap Houses For Sale, Mortgage, Zillow Properties, Home buying, House to buy, Home to buy, Home search, Real estate agency, Real estate listings, Best real estate agents, Real estate investment, Mortgage rates, Open House near me, Open Houses, How to get a mortgage, How to improve your credit score, Affordable homes for sale, Down payment assistance, Mortgage pre-approval, Mortgage calculator, Move-in ready homes, Home financing options, Homeownership benefits, Homeownership education, Home buying process, Home buying checklist, Home affordability calculator, Real estate broker, Real estate agent fees, Home inspection checklist, Home warranty, Homeowners Insurance, Homeowner association fees, Property taxes, Foreclosure, Home maintenance tips, Home buying mistakes to avoid, Home buying vs. renting ,Virtual open house, Virtual tours, 3D home tours, Smart home technology, Sustainable homes, Co-living spaces, Smart home, Eco-friendly homes, Co-living, Co-working" />
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
