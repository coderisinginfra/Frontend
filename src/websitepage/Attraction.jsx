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
      <meta name="keywords" content="Rising Infra, India's Largest Real Estate Company, Best Real Estate Company, Best Property Consultant, Real Estate Company, India's Best Real Estate Consultant, Best Property Dealers, Property Websites, Real Estate Website, real estate,real estate license,commercial real estate,real estate agents near me,real estate agent vs realtor,real estate agencies,real estate attorney, agency real estate, adelaide real estate, real estate broker license,Best Real Estate Consultant in Delhi/NCR, Best Real Estate Property Consultant in Delhi/NCR Real Estate, Property in Noida, Properties, Property sites India, Commercial Properties For Sale, Buy Properties, Properties To Buy, Buy Residential Properties, Buy Commercial Properties, Residential Properties For Sale, Residential Properties In Noida, Buy Residential Properties In Noida, Residential Properties For Sale In Noida,Buy Commercial Properties In Noida, Commercial Properties In Noida, Commercial Properties For Sale In Noida, Buy Residential Properties In Delhi, Residential Properties In Delhi, Residential, Properties For Sale In Delhi, Buy Commercial Properties In Delhi, Commercial Properties In Delhi,, Commercial Properties For Sale In Delhi, Buy Residential Properties In Gurgaon, Residential, Properties In Gurgaon, Residential Properties For Sale In Gurgaon, Buy Commercial Properties In, Gurgaon, Commercial Properties In Gurgaon, Commercial Properties For Sale In Gurgaon, Buy, Residential Properties In Mumbai, Residential Properties In Mumbai, Residential Properties For Sale, In Mumbai, Buy Commercial Properties In Mumbai, Commercial Properties In Mumbai, Commercial, Properties For Sale In Mumbai, Buy Residential Properties In Greater Noida, Residential Properties In, Greater Noida, Residential Properties For Sale In Greater Noida, Buy Commercial Properties In, Greater Noida, Commercial Properties In Greater Noida, Commercial Properties For Sale In Greater, Noida, Buy Residential Properties In Navi Mumbai, Residential Properties In Navi Mumbai,, Residential Properties For Sale In Navi Mumbai, Buy Commercial Properties In Navi Mumbai,, Commercial Properties In Navi Mumbai, Commercial Properties For Sale In Navi Mumbai, Real Estate, India Property, Property in India, Real Estate in India, Properties in India, Residential Property in India, Apartment in India, Commercial Property in India, rising infra noida, top 10 real estate brokers in noida, real estate company in noida, best real estate company in noida, top real estate companies , in noida, top 10 real estate companies in noida, real estate company in greater noida, list of , top real estate companies in noida, list of real estate companies in noida, top 10 real estate , companies in noida, Real estate builder in Noida, real estate developers in Noida, real estate , companies, property dealers in noida, property dealers in greater noida, property dealers in , noida extension, property dealer in noida for rent, best property dealers in noida, best , property dealer in greater noida, top 10 property dealers in noida, top property dealers in , noida, property dealers in noida expressway, property dealers in surajpur greater noida, best , property dealers in greater noida noida uttar pradesh, commercial property dealers in noida, , Property Dealers in Noida, Real Estate Developers in Noida, Estate agents in Noida, Flats for , sale in Noida, Top property dealers, Property Agents in Noida,property dealers in noida for , rent, best real estate agents in noida, real estate agents in noida, property dealers in noida , extension, list of property dealers in greater noida, best property dealers in greater noida, , property dealers in noida and greater Noida, Top Real Estate Agents in Noida, Real Estate , Companies in Noida, Real Estate Brokers in Noida, Noida Real Estate Agents, Top Property , Brokers in Noida, Real Estate Consultants in Noida, List of House Brokers in Noida, , Commercial Property in Noida, Property in Noida, Commercial property for sale in noida, , best commercial property in noida, Commercial office space in noida, buy property in Noida, , Noida property prices, best property in Noida, Real-estate investment in Noida, office space , in Noida, buy commercial property in Noida, retail shops in Noida, Food court in Noida, Real , estate consultant in Noida, Real estate property consultant in Noida, Real estate Advisors in , Noida, Real estate property agents in Noida, property in noida" />
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
