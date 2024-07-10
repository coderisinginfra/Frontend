import React, { useEffect, useRef, useState } from 'react'
import '../CSS/AddProject.css';
import JoditEditor from 'jodit-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddJobs = (props) => {
  const navigate = useNavigate()
  const [title, settitle] = useState('')
  const [description,setdescription] =useState('')
  const [numberofOpenings,setnumberofOpenings] =useState('')
  const [qualifications,setqualifications] = useState('')
  const [experience ,setexperience] =useState('')
  const [salary,setsalary] = useState('')
  const [category,setcategory] = useState('')

    useEffect(()=>{
        document.title = props.title
    })

    const handlesubmit = async(event) =>{
      event.preventDefault();
      try {
        const response = await axios.post('https://www.backend.risinginfra.in/api/v1/careers',{title,description,numberofOpenings,qualifications,experience,salary,category})
        alert("Job Added Successfully")
        navigate("/private/admin/panel")
      } catch (error) {
      alert("Oops something went wrong")
      }
    }  

  return (
    <div className='blogs'>
     <div className='headingblog'>
        <h1>We Have Another opening, Found it Right Candidate!</h1>
     </div>
      <div className='datasets-field'>
        <form action="" onSubmit={handlesubmit}>
        <label htmlFor='category'>Job Category
                <select value={category} onChange={(e)=>setcategory(e.target.value)} className='labelsblogs-select' id='category'>Select
                  <option>Select</option>
                  <option value="Sales">Sales</option>
                  <option value="Technology">Technology</option>
                  <option value="Finance">Finance</option>
                  <option value="Human Resources">Human Resources</option>
                </select>
           </label> <br />
            <label htmlFor='title'>Job Title
                <select value={title} onChange={(e)=>settitle(e.target.value)} className='labelsblogs-select' id='category'>Select
                  <option>Select</option>
                  <option value="Buissness Development Executive">Buissness Development Executive</option>
                  <option value="Opeartion Manager">Opeartion Manager</option>
                  <option value="Social Media Manager">Social Media Manager</option>
                  <option value="Graphic Designer">Graphic Designer</option>
                  <option value="Video Editor">Video Editor</option>
                  <option value="Frontend Devloper">Frontend Developer</option>
                  <option value="Backend Devloper">Backend Developer</option>
                  <option value="Full Stack Devloper">Full Stack Developer</option>
                  <option value="Sales Manager">Sales Manager</option>
                  <option value="Team Lead (Sales)">Team Lead (Sales)</option>
                  <option value="HR Executive">HR Executive</option>
                  <option value="HR Manager">HR Manager</option>
                </select>
           </label> <br />
           <label htmlFor="No Of Opening">No Of Opening<br />
                <input type="text" 
                placeholder='Enter here' 
                id='No Of Opening' 
                className='labelsblogs' 
                value={numberofOpenings}
                onChange={(e)=>setnumberofOpenings(e.target.value)}
                required/>
           </label> <br />
           <label htmlFor='Qualification'> Qualification
                <select value={qualifications} onChange={(e)=>setqualifications(e.target.value)} className='labelsblogs-select' id='category'>Select
                  <option>Select</option>
                  <option value="10th">10th</option>
                  <option value="10+12th">10+12th</option>
                  <option value="Graduation">Graduation</option>
                  <option value="Post Graduation">Post Graduation</option>
                </select>
           </label> <br />
           <label htmlFor="Salary">Salary<br />
                <input type="text" 
                placeholder='Enter here' 
                id='Salary' 
                className='labelsblogs' 
                value={salary}
                onChange={(e)=>setsalary(e.target.value)}
                required/>
           </label> <br />
           <label htmlFor="Candidate Experience">Candidate Experience<br />
                <select value={experience} onChange={(e)=>setexperience(e.target.value)} className='labelsblogs-select' id='category'>Select
                  <option>Select</option>
                  <option value="Fresher">Fresher</option>
                  <option value="1 Year">1 Year</option>
                  <option value="2-5 Year">2-5 Year</option>
                  <option value="5-10 Year">5-10 Year</option>
                  <option value="10-20 Year">10-20 Year</option>
                </select>
           </label> <br />
           <label htmlFor='postcontent'>Job Description<br />
           <textarea
             value={description}
             onChange={(e) => setdescription(e.target.value)}
             className='labelsblogs' 
             placeholder='Job Description'
             required
            />
           </label>
        <div>
           <input type="submit" value="Submit" className='submit1' />
           <input type="reset" value="Reset" className='submit2'/>
        </div>
        </form>
      </div>
    </div>
  )
}

export default AddJobs
