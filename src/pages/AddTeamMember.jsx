import React, { useEffect, useRef, useState } from 'react';
import '../CSS/AddProject.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddTeamMember = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [designation, setDesignation] = useState('Senior Sales Manager');
  const [collegeName, setCollegeName] = useState('');
  const [timeCollege, setTimeCollege] = useState('');
  const [degree, setDegree] = useState('');
  const [workExperienceTime, setWorkExperienceTime] = useState('');
  const [image, setImage] = useState(null);
  const [isbuttonsubmit,setisbuttonsubmit] = useState(false)

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    setisbuttonsubmit(true)
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('linkedin', linkedinUrl);
    formData.append('designation', designation);
    formData.append('collegename', collegeName);
    formData.append('timecollege', timeCollege);
    formData.append('degree', degree);
    formData.append('workexpreincetime', workExperienceTime);
    formData.append('image', image);

    try {
      const response = await axios.post('https://www.backend.risinginfra.in/api/v1/addteammember', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Team Member Added Successfully');
      setisbuttonsubmit(false)
    } catch (error) {
      alert('Oops something went wrong');
    }
  };

  return (
    <div className='blogs'>
      <div className='headingblog'>
        <h1>Add Team Member In Rising Infra</h1>
      </div>
      <div className='datasets-field'>
        <form>
          <label htmlFor="posttitle">Name <br />
            <input type="text"
              placeholder='Name'
              id='posttitle'
              className='labelsblogs'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required />
          </label> <br />
          <label htmlFor="Description">Description<br />
            <input type="text"
              placeholder='Description'
              id='Description'
              className='labelsblogs'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required />
          </label> <br />
          <label htmlFor='category'> Designation
            <select value={designation} onChange={(e) => setDesignation(e.target.value)} className='labelsblogs-select' id='category'>
              <option>Select</option>
              <option value="Director Of Marketing">Director Of Marketing</option>
              <option value="President Sales">President Sales</option>
              <option value="Chief Executive Officer">CEO</option>
              <option value="Vice President Sales">Vice President Sales</option>
              <option value="Business Development Executive">Business Development Executive</option>
              <option value="Operation Manager">Operation Manager</option>
              <option value="Social Media Manager">Social Media Manager</option>
              <option value="Digital Marketing Executive">Digital Marketing Executive</option>
              <option value="Leasing Head">Leasing Head</option>
              <option value="Graphic Designer">Graphic Designer</option>
              <option value="Video Editor">Video Editor</option>
              <option value="Sales Manager">Sales Manager</option>
              <option value="Senior Sales Manager">Senior Sales Manager</option>
              <option value="Team Lead (Sales)">Team Lead (Sales)</option>
              <option value="Software Development Engineer">Software Development Engineer</option>
              <option value="SR. HR Manager">SR. HR Manager</option>
              <option value="HR Manager">HR Manager</option>
              <option value="Sales Intern">Sales Intern</option>
            </select>
          </label> <br />
          <label htmlFor="Linkedin">Linkedin<br />
            <input type="text"
              placeholder='Linkedin URL'
              id='Keywords'
              className='labelsblogs'
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              required />
          </label> <br />
          <label htmlFor="CollegeName">College Name<br />
            <input type="text"
              placeholder='College Name'
              id='CollegeName'
              className='labelsblogs'
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              required />
          </label> <br />
          <label htmlFor="TimeCollege">College Time Period<br />
            <input type="text"
              placeholder='College Time Period'
              id='TimeCollege'
              className='labelsblogs'
              value={timeCollege}
              onChange={(e) => setTimeCollege(e.target.value)}
              required />
          </label> <br />
          <label htmlFor="Degree">Degree<br />
            <input type="text"
              placeholder='Degree'
              id='Degree'
              className='labelsblogs'
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              required />
          </label> <br />
          <label htmlFor="WorkExperienceTime">Work Experience Time<br />
            <input type="text"
              placeholder='Work Experience Time'
              id='WorkExperienceTime'
              className='labelsblogs'
              value={workExperienceTime}
              onChange={(e) => setWorkExperienceTime(e.target.value)}
              required />
          </label> <br />
          <label htmlFor="coverImage">Cover Image<br />
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              className='labelsblogs'
              onChange={handleImageChange}
              required
            />
          </label> <br />
          <div>
            <input type="submit" value="Submit" className='submit1' disabled={isbuttonsubmit} onClick={handleSubmit}/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeamMember;
