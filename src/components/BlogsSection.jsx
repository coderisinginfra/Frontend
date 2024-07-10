import React, { useContext, useEffect, useState } from 'react'
import { datasets } from '../App';
import DOMPurify from 'dompurify';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogsSection = () => {
    const { setBlogData } = useContext(datasets);
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const blogsPerPage = 3;
    const [category, setCategory] = useState([]);
  
  
    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get("https://www.backend.risinginfra.in/api/v1/fetchblogs");
                setBlogs(response.data.reverse());
                const categoryData = await axios.get("https://www.backend.risinginfra.in/api/v1/categoryfind");
                setCategory(categoryData.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetch();
    }, []);

    
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-CA', options); // Format as YYYY-MM-DD
};

// Function to truncate HTML content to 35 words
const truncateHTML = (html, wordLimit) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const text = doc.body.textContent || "";
    const truncatedText = text.split(' ').slice(0, wordLimit).join(' ');
    return truncatedText;
};

const pageCount = Math.ceil(blogs.length / blogsPerPage);
const displayBlogs = blogs.slice(currentPage * blogsPerPage, (currentPage + 1) * blogsPerPage);
  return (
    <div className='container-div-blogs' >
      <div className='heading-blogs home-front-blogs'>
                  <h1>Must Read Blogs</h1>
                  <div className='border-bottom-blog'> </div>
      </div>
        <div className='blogs-section blogs-home'>
            <div className='blogs-data'>
                {displayBlogs.map((item, index) => (
                    <div key={index} className='flex-blogsimage-show'>
                        <Link
                           to={`/blogs/${item.postTitle}`}
                            className='list-color'
                        >
                            <div className='flex-blogs-content'>
                                <div className='image-blogs'>
                                    <img 
                                        src={item.coverimage} 
                                        alt={item.coverimage} 
                                        onError={(e) => e.target.src = logo} 
                                        className='image-contents-allblogs' 
                                    />
                                </div>
                                <div className='data-blogs'>
                                    <h3 className='heading-blogs-content'><b>{item.postTitle}</b></h3>
                                    <div>
                                        <div className='paragraph-blogs' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(truncateHTML(item.description, 13)) }}></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            </div>
        </div>
  )
}

export default BlogsSection
