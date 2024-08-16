import React, { useEffect } from 'react'

const Attraction = (props) => {
    useEffect(()=>{
        document.title = props.title
    },[props.title])
  return (
    <div>
      <a href="https://www.nextbizthing.com/noida/real-estate/risinginfra?from=badge"  title="Find me on NextBizThing" target="_blank"><img src="https://www.nextbizthing.com/images/memberbadge.png" style="border: none;"/></a>
                        
    </div>
  )
}

export default Attraction
