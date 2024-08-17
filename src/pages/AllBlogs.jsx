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
                const response = await axios.get("https://www.backend.risinginfra.in/api/v1/fetchblogs");
                setBlogs(response.data.reverse());
                const categoryData = await axios.get("https://www.backend.risinginfra.in/api/v1/categoryfind");
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
            const response = await axios.post("https://www.backend.risinginfra.in/api/v1/contactus", { name, email, contact, message });
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
          <meta name="keywords" content="Blogs, real estate blog, property management blog, real estate insights, market trends, real estate tips, property news, real estate articles, home buying tips, property investment, real estate market, industry news, real estate updates, real estate advice, property trends, real estate research, real estate commentary, property management tips, real estate strategies, home selling advice, real estate professionals, property news blog, real estate industry blog, investment tips, real estate developments, real estate market analysis, property insights, real estate guides, real estate reviews, property articles, real estate information, property management news, real estate experts, real estate knowledge, property investment blog, real estate advice blog, real estate trends blog, real estate blog posts, real estate updates blog, property news updates, real estate market trends, property buying advice, real estate investment tips, home ownership blog, property management strategies, real estate analysis blog, real estate industry news, property value insights, real estate tips and tricks, real estate blog articles, property market updates, real estate sector news, property management advice, real estate buying guide, real estate sales tips, property investment advice, real estate market insights, property trends blog, real estate articles blog, property management insights, Rising Infra, Rising Infra Noida, Rising Infra Private Limited, Property In Noida, Property On Noida Expressway, Commercial Property On Noida Expressway, Noida Commercial Projects, Noida Expressway Commercial Projects, Residential Property On Noida Expressway, Noida Expressway Property, Residential Projects On Noida Expressway, Noida Expressway Residential Projects, Noida Property Prices, Noida Properties, Commercial Property In Noida, Property In Noida For Sale, Best Property In Noida, Buy Property In Noida, Property In Noida Ready To Move,Residential Property In Noida, Luxury Property In Noida, Commercial Property In Noida For Sale, best real estate company in noida,best real estate company in noida for job, top 10 real estate companies in noida, famous companies in noida, real estate companies in noida, no 1 real estate company in the world, which real estate company is best for new agents, best real estate company in nyc, top real estate company in noida, top 10 real estate company in noida, best real estate in noida, best real estate companies in greater noida, best real estate consultant in noida, best property dealer in noida, noida real estate company, best real estate brokers in noida, top real estate companies in noida, fortune 500 companies in noida, best real estate developers in noida, best real estate agents in noida,best properties noida, real estate company in noida, no 1 real estate company in india, best real estate projects in noida, best property dealers in noida extension, noida best property dealers, noida best property, top 5 real estate companies in noida, top 10 real estate brokers in noida, real estate company in noida sector 94" />
        </Helmet>
        <div className='container-blog'>
            <div>
                <h1 className='data-blog'>Rising Infra Blog</h1>
            </div>
            <div>
                <img src={blogimages} alt="blogphoto" className='image-blog'/>
            </div>
        </div>
            <div className='heading-blogs'>
                <h1>Must Read Blogs</h1>
                <div className='border-bottom-blog'> </div>
            </div>
        <div className='blogs-section'>
            <div className='tags-data-home-filter'>
                {displayBlogs.map((item, index) => (
                    <div key={index} className='data-front-home-blog'>
                        <Link
                            to={`/blogs/${item.postTitle}`}
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
                                    <div className='blogs-button-data'>
                                    <Button variant='contained'>{item.Category}</Button>
                                    </div>
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
