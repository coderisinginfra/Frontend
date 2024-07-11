import React, { useEffect, useRef, useState } from 'react';
import '../CSS/AddProject.css';
import JoditEditor from 'jodit-react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBlog = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [postTitle, setPostTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [coverimage, setcoverimage] = useState('');
  const [postcontent, setpostcontent] = useState('');

  const editor = useRef(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://www.backend.risinginfra.in/api/v1/fetchblog/${id}`);
        const blog = response.data;
        setPostTitle(blog.postTitle);
        setDescription(blog.description);
        setKeywords(blog.keywords);
        setcoverimage(blog.coverimage);
        setpostcontent(blog.postcontent);
      } catch (error) {
        console.log('Error fetching blog data:', error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`https://www.backend.risinginfra.in/api/v1/updateblog/${id}`, {
        postTitle,
        description,
        keywords,
        postcontent,
        coverimage
      });
      alert("Blog Updated Successfully");
      navigate("/admin/panel");
    } catch (error) {
      alert("Oops something went wrong");
    }
  };
  
  return (
    <div className='blogs'>
      <div className='headingblog'>
        <h1>What is Going in Your Mind?</h1>
      </div>
      <div className='datasets-field'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="posttitle">Post Title <br />
            <input type="text"
              placeholder='Enter here'
              id='posttitle'
              className='labelsblogs'
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              required />
          </label> <br />
          <label htmlFor="Description">Description<br />
            <input type="text"
              placeholder='Enter here'
              id='Description'
              className='labelsblogs'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required />
          </label> <br />
          <label htmlFor="Keywords">Keywords<br />
            <input type="text"
              placeholder='Enter here'
              id='Keywords'
              className='labelsblogs'
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              required />
          </label> <br />
          <label htmlFor="coverImage">Cover Image URL<br />
            <input type="text"
              id='coverimage'
              className='labelsblogs'
              value={coverimage}
              onChange={(e) => setcoverimage(e.target.value)}
              required />
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
            <input type="submit" value="Submit" className='submit1' />
            <input type="reset" value="Reset" className='submit2' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
