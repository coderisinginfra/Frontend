import React, { useEffect, useRef, useState } from 'react';
import '../CSS/AddProject.css';
import JoditEditor from 'jodit-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BlogProject = (props) => {
  const navigate = useNavigate();
  const [postTitle, setpostTitle] = useState('');
  const [description, setdescription] = useState('');
  const [keywords, setkeywords] = useState('');
  const [postcontent, setpostcontent] = useState('');
  const [image, setimage] = useState(null);
  const [Category, setCategory] = useState('');

  const [isbuttonsubmit,setisbuttonsubmit] = useState(false)

  useEffect(() => {
    document.title = props.title;
  });

  const editor = useRef(null);

  const handleImageChange = (e) => {
    setimage(e.target.files[0]);
  };

  const handlesubmit = async (event) => {
    setisbuttonsubmit(true)
    event.preventDefault();
    const formData = new FormData();
    formData.append('postTitle', postTitle);
    formData.append('description', description);
    formData.append('keywords', keywords);
    formData.append('postcontent', postcontent);
    formData.append('image', image);
    formData.append('Category', Category);

    try {
      const response = await axios.post('https://www.backend.risinginfra.in/api/v1/blogproject', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Blog Added Successfully');
      setisbuttonsubmit(false)
    } catch (error) {
      alert('Oops something went wrong');
    }
  };

  return (
    <div className='blogs'>
      <div className='headingblog'>
        <h1>What is Going in Your Mind?</h1>
      </div>
      <div className='datasets-field'>
        <form>
          <label htmlFor="posttitle">Post Title <br />
            <input type="text"
              placeholder='Enter here'
              id='posttitle'
              className='labelsblogs'
              value={postTitle}
              onChange={(e) => setpostTitle(e.target.value)}
              required />
          </label> <br />
          <label htmlFor="Description">Description<br />
            <input type="text"
              placeholder='Enter here'
              id='Description'
              className='labelsblogs'
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              required />
          </label> <br />
          <label htmlFor='category'> Category
            <select value={Category} onChange={(e) => setCategory(e.target.value)} className='labelsblogs-select' id='category'>Select
              <option>Select</option>
              <option value="Home Decor">Home Decor</option>
              <option value="Property In Noida">Property In Noida</option>
              <option value="Property In Gurugram">Property In Gurugram</option>
              <option value="Commercial Property">Commercial Property</option>
              <option value="Lease Commercial Property">Lease Commercial Property</option>
              <option value="Residential Property">Residential Property</option>
              <option value="Renting Residential Property">Renting Residential Property</option>
              <option value="Buy Plots">Buy Plots</option>
              <option value="Sell Your Property">Sell Your Property</option>
            </select>
          </label> <br />
          <label htmlFor="Keywords">Keywords<br />
            <input type="text"
              placeholder='Enter here'
              id='Keywords'
              className='labelsblogs'
              value={keywords}
              onChange={(e) => setkeywords(e.target.value)}
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
          <label htmlFor='postcontent'>Post Content <br />
            <JoditEditor
              ref={editor}
              value={postcontent}
              onChange={newContent => setpostcontent(newContent)}
              className='datasets-field'
            />
          </label>
          <div>
            <input type="submit" value="Submit" className='submit1' disabled={isbuttonsubmit} onClick={handlesubmit}/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogProject;
