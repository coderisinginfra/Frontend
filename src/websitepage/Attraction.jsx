import React, { useEffect } from 'react';

const Attraction = (props) => {
  useEffect(() => {
    if (props.title) {
      document.title = props.title;
    }
  }, [props.title]);

  return (
    <div>
        <div className='heading-blogs home-front-blogs'>
                  <h1>Our Trusted Partner</h1>
                  <div className='border-bottom-blog'> </div>
        </div>
        <div className='tags-data-home'>
          <div className='data-front-home'>
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
