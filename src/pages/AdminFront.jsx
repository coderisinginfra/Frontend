import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/AddProject.css';

const AdminFront = (props) => {
    useEffect(()=>{
        document.title = props.title
    })

    const management = [{
        name:"Manage Project",
        link:"#"
    },{
        name:"Add New Project",
        link:'private/addproject'
    },{
        name:"View Registered Projects Infromation",
        link:"#"
    }]

    const city = [{
        name: "Manage Careers",
        link: "/"
    },{
        name:"Add Careers",
        link:"/private/Jobopening"
    },{
        name:"View Submit Resumes",
        link:"/private/allresume"
    }]

    const developer = [{
        name:"Fetch Nayaashiyana Contact",
        link:"/private/fetchnayaashiyana"
    },{
        name:"Fetch GyGy Contact",
        link:"/private/fetchgygy"
    },{
        name:"Fetch Rising infra Contact",
        link:"/private/fetchcontactdetailes"
    },,{
        name:"Fetch Rising infra PopUp",
        link:"/private/fetchpopup"
    }]

    
    const tower = [{
        name: "Add Blog",
        link: "/private/blogproject"
    },{
        name:"Manage Blog",
        link:"/private/manageblog"
    },,{
        name:"View Blog Reviews",
        link:"/private/fetchblogReview"
    }]

  return (
   <>
   <div className="classname">
   <div className='welcome'>
        <h2>Welcome In Rising Infra <b style={{color:"red"}}>Administrative Panel</b></h2>
    </div>
   <div className='listing-management'>
    <h2 style={{color:"white", marginBottom:"10px"}}>1. &nbsp; Project Management</h2>
    {
        management.map((item,index)=>(
            <div key={index}>
            <Link to={item.link} className='linksdata'>{item.name}</Link> <br />
            </div>
        ))
    }
   </div>
   <div className='listing-management'>
    <h2  style={{color:"white", marginBottom:"10px"}}>2. &nbsp; Careers HRN</h2>
    {
       city.map((item,index)=>(
            <div key={index}>
            <Link to={item.link} className='linksdata'>{item.name}</Link> <br />
            </div>
        ))
    }
   </div>
   <div className='listing-management'>
    <h2  style={{color:"white", marginBottom:"10px"}}>3. &nbsp; Project Developer Detailes</h2>
    {
       developer.map((item,index)=>(
            <div key={index}>
            <Link to={item.link} className='linksdata'>{item.name}</Link> <br />
            </div>
        ))
    }
   </div>
   <div className='listing-management'>
    <h2  style={{color:"white", marginBottom:"10px"}}>4. &nbsp;  Blogs Deatiles and Management</h2>
    {
       tower.map((item,index)=>(
            <div key={index}>
            <Link to={item.link} className='linksdata'>{item.name}</Link> <br />
            </div>
        ))
    }
   </div>

   </div>
   </>
  )
}

export default AdminFront
