import React, { useEffect, useState } from 'react';
import '../CSS/AddProject.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddJobs = (props) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [numberofOpenings, setNumberOfOpenings] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [experience, setExperience] = useState('');
  const [salary, setSalary] = useState('');
  const [categoriesd, setCategoriesd] = useState('');
  const [isButtonSubmit, setIsButtonSubmit] = useState(false);

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsButtonSubmit(true);
    try {
      const response = await axios.post('https://www.backend.risinginfra.in/api/v1/careers', {
        title,
        description,
        numberofOpenings,
        qualifications,
        experience,
        salary,
        categoriesd,
      });
      alert('Job Added Successfully');
      resetForm(); // Navigate to another page if required
    } catch (error) {
      alert('Oops something went wrong');
    } finally {
      setIsButtonSubmit(false);
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setNumberOfOpenings('');
    setQualifications('');
    setExperience('');
    setSalary('');
    setCategoriesd('');
  };

  return (
    <div className='blogs'>
      <div className='headingblog'>
        <h1>We Have Another Opening, Found the Right Candidate!</h1>
      </div>
      <div className='datasets-field'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='category'>
            Job Category
            <select value={categoriesd} onChange={(e) => setCategoriesd(e.target.value)} className='labelsblogs-select' id='category' required>
              <option value=''>Select</option>
              <option value='Sales'>Sales</option>
              <option value='Technology'>Technology</option>
              <option value='Finance'>Finance</option>
              <option value='Human Resources'>Human Resources</option>
            </select>
          </label>
          <br />
          <label htmlFor='title'>
            Job Title
            <select value={title} onChange={(e) => setTitle(e.target.value)} className='labelsblogs-select' id='title' required>
              <option value=''>Select</option>
              <option value='Business Development Executive'>Business Development Executive</option>
              <option value='Operation Manager'>Operation Manager</option>
              <option value='Social Media Manager'>Social Media Manager</option>
              <option value='Graphic Designer'>Graphic Designer</option>
              <option value='Video Editor'>Video Editor</option>
              <option value='Frontend Developer'>Frontend Developer</option>
              <option value='Backend Developer'>Backend Developer</option>
              <option value='Full Stack Developer'>Full Stack Developer</option>
              <option value='Sales Manager'>Sales Manager</option>
              <option value='Sales Trainer'>Sales Trainer</option>
              <option value='Team Lead (Sales)'>Team Lead (Sales)</option>
              <option value='HR Executive'>HR Executive</option>
              <option value='HR Manager'>HR Manager</option>
            </select>
          </label>
          <br />
          <label htmlFor='numberOfOpenings'>
            No Of Openings
            <br />
            <input
              type='text'
              placeholder='Enter here'
              id='numberOfOpenings'
              className='labelsblogs'
              value={numberOfOpenings}
              onChange={(e) => setNumberOfOpenings(e.target.value)}
              required
            />
          </label>
          <br />
          <label htmlFor='qualifications'>
            Qualification
            <select value={qualifications} onChange={(e) => setQualifications(e.target.value)} className='labelsblogs-select' id='qualifications' required>
              <option value=''>Select</option>
              <option value='10th'>10th</option>
              <option value='10+12th'>10+12th</option>
              <option value='Graduation'>Graduation</option>
              <option value='Post Graduation'>Post Graduation</option>
            </select>
          </label>
          <br />
          <label htmlFor='salary'>
            Salary
            <br />
            <input
              type='text'
              placeholder='Enter here'
              id='salary'
              className='labelsblogs'
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
            />
          </label>
          <br />
          <label htmlFor='experience'>
            Candidate Experience
            <select value={experience} onChange={(e) => setExperience(e.target.value)} className='labelsblogs-select' id='experience' required>
              <option value=''>Select</option>
              <option value='Fresher'>Fresher</option>
              <option value='1 Year'>1 Year</option>
              <option value='2-5 Year'>2-5 Year</option>
              <option value='5-10 Year'>5-10 Year</option>
              <option value='10-20 Year'>10-20 Year</option>
            </select>
          </label>
          <br />
          <label htmlFor='description'>
            Job Description
            <br />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='labelsblogs'
              placeholder='Job Description'
              required
            />
          </label>
          <div>
            <input type='submit' value='Submit' className='submit1' disabled={isButtonSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
