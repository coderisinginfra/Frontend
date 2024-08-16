import React, { useEffect } from 'react';

const Attraction = (props) => {
  useEffect(() => {
    if (props.title) {
      document.title = props.title;
    }
  }, [props.title]);

  return (
    <div>
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
  );
};

export default Attraction;
