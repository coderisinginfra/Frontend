import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import "../CSS/blogscss.css";
import '../CSS/Form.css';
import logo from '../assets/adminimage/logo.png';
import { datasets } from '../App';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import ReactPaginate from 'react-paginate';
import blogimages from '../assets/adminimage/blog photo.jpg'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Helmet } from 'react-helmet';

const AllBlogs = (props) => {
    const { setBlogData } = useContext(datasets);
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const blogsPerPage = 12;
    const [category, setCategory] = useState([]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get("https://backendrisinginfra.risinginfra.in/api/v1/fetchblogs");
                setBlogs(response.data.reverse());
                const categoryData = await axios.get("https://backendrisinginfra.risinginfra.in/api/v1/categoryfind");
                setCategory(categoryData.data);
            } catch (error) {
                // console.log(error);
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

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://backendrisinginfra.risinginfra.in/api/v1/contactus", { name, email, contact, message });
            setIsSubmitted(false);
        } catch (error) {
            alert("Ooops! Something Went Wrong");
        }
    }

    const pageCount = Math.ceil(blogs.length / blogsPerPage);
    const displayBlogs = blogs.slice(currentPage * blogsPerPage, (currentPage + 1) * blogsPerPage);

    return (
        <>
        <Helmet>
          <title>{props.title}</title>
          <link rel="canonical" href="https://www.risinginfra.in/blogs" />
          <meta name="description" content="Read the latest articles and insights on real estate, property management, market trends, and more on the Risinginfra blog. Stay informed with our expert commentary and tips." />
          <meta name="keywords" content="Blogs" />
          <meta name="robots" content="INDEX,FOLLOW"/>
          <meta name="Robots" content="INDEX, FOLLOW" />
          <meta name="robots"  content="noydir" />
          <meta name="Content-Language" content="en-us" />
          <meta name="Publisher" content="Rising infra" />
          <meta name="distribution" content="LOCAL" />
          <meta name="page-topic" content="Rising infra"/>
          <meta name="YahooSeeker" content="INDEX, FOLLOW"/>
          <meta name="googlebot" content="index,follow"/>
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Rising infra"/>
          <meta property="og:url" content="https://www.risinginfra.in/blogs" />
          <meta property="og:image" content="https://www.risinginfra.in/assets/blog%20photo-D9ow9bek.jpg" />
          <meta property="og:title" content={props.title} />
          <meta property="og:description" content="Read the latest articles and insights on real estate, property management, market trends, and more on the Risinginfra blog. Stay informed with our expert commentary and tips." />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={props.title} />
          <meta name="twitter:description" content="Read the latest articles and insights on real estate, property management, market trends, and more on the Risinginfra blog. Stay informed with our expert commentary and tips."/>
          <meta name="twitter:image" content="https://www.risinginfra.in/assets/blog%20photo-D9ow9bek.jpg" />
        </Helmet>
            <div className='heading-blogs'>
                <h1>Must Read Blogs</h1>
                <div className='border-bottom-blog'> </div>
            </div>
        <div className='blogs-section blogs-home'>
            <div className='blogs-data'>
                {displayBlogs.map((item, index) => (
                    <div key={index} className='flex-blogsimage-show'>
                        <Link
                            to={`/blogs/${item.postTitle.replace(/ /g, '-').toLowerCase()}`}
                            onClick={() => {
                                setBlogData({
                                    postTitle: item.postTitle,
                                    image: item.coverimage,
                                    postContent: item.postcontent,
                                    date: item.date,
                                    keywords: item.keywords,
                                });
                            }}
                            className='list-color'
                        >
                            <div className='flex-blogs-content'>
                                <div className='image-blogs'>
                                    <img 
                                        src={item.coverimage} 
                                        alt={item.coverimage} 
                                        onError={(e) => e.target.src = logo} 
                                        className='image-contents-allblogs' 
                                        loading='lazy'
                                    />
                                </div>
                                <div className='data-blogs'>
                                    
                                    <h3 className='heading-blogs-content'><b>{item.postTitle}</b></h3>
                                    <div>
                                        <div className='paragraph-blogs' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(truncateHTML(item.description, 25)) }}></div>
                                    </div>
                                        <div className='flexdataarrow'>
                                            <h3 className='data-headi'>READ MORE</h3>
                                            <ArrowCircleRightIcon />
                                        </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        <div className='flex-pagination-blogs'>
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={9}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
        </div>
        </>
    );
}

export default AllBlogs;
