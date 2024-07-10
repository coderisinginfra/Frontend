import React from 'react'
import sameer from '../assets/imges/sameer sir.jpg'
import pranshul from '../assets/imges/pranshul sir.jpeg'

const ManagementTeam = () => {
    const teamsdata = [{
        img:sameer,
        name:"MR. Sameer Jagga",
        title:"CEO",
        content:"Recognize that every property has its unique potential, shaped by its surroundings and the trends of its community. Whether you're buying, selling, or developing, understanding the nuances of the market and the intrinsic value of location can turn a good investment into a great one. Real estate is not just about buildings; it's about vision and foresight"
    },{
        img:pranshul,
        name:"MR. Pranshul Jain",
        title:"CEO",
        content:"In the dynamic world of real estate, market knowledge and strategic foresight are your greatest assets. It's not just about acquiring property, but about unlocking its full potential. Success comes from seeing possibilities where others see obstacles, and transforming spaces into vibrant, thriving environments. Real estate is the art of creating value from vision."
    }]
  return (
<>
<div className='headingmanagement'>
<h1 className='heading-image'>Management Team</h1>
</div>
<div className='flex-teams'>
    {
        teamsdata.map((item,index)=>(
            <div key={index} className='teams-data'>
                <img src={item.img} alt="Our Leaders" className='images-data-management'/>
                <div className='contents-teams'>
                    <h1 className='he'>{item.name}</h1>
                    <h1 className='he'>{item.title}</h1>
                    <p className='pa'>{item.content}</p>
                </div>
            </div>
        ))
    }
</div>
</>
  )
}

export default ManagementTeam
