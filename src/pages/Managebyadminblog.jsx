import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import "../CSS/blogscss.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import logo from '../assets/adminimage/logo.png';
import { datasets } from '../App';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Managebyadminblog = (props) => {
    const { setBlogData } = useContext(datasets);
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate()

    useEffect(()=>{
        document.title = props.title
    })

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get("https://www.backend.risinginfra.in/api/v1/fetchblogs");
                setBlogs(response.data.reverse());
            } catch (error) {
                // console.log(error);
            }
        }
        fetchBlogs();
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-CA', options); // Format as YYYY-MM-DD
    };

    const deleteBlog = async (id) => {
        try {
            await axios.delete(`https://www.backend.risinginfra.in/api/v1/deleteblog/${id}`);
            alert("Blog Deleted Successfully");
            const response = await axios.get("https://www.backend.risinginfra.in/api/v1/fetchblogs");
            setBlogs(response.data.reverse());
        } catch (error) {
            alert("Oops, something went wrong");
        }
    }

    return (
        <div>
            {blogs.map((item, index) => (
                <div key={index} className='allblogs-content'>
                    <Link to={`/blogs/${item.postTitle}`} onClick={() => {
                        setBlogData({
                            postTitle: item.postTitle,
                            image: item.coverimage,
                            postContent: item.postcontent,
                            date: item.date,
                            keywords: item.keywords
                        });
                    }} className='list-color'>
                        <h1><b>{item.postTitle}</b></h1>
                        </Link>
                        <div className='date-flex'>
                            <AccessTimeIcon />
                            <h6 style={{ marginLeft: "1em" }}><b>{formatDate(item.date)}</b></h6>
                        </div>
                        <div className='flex-blogs-content'>
                            <div className='image-blogs'>
                                <img src={item.coverimage} alt={item.coverimage} onError={(e) => e.target.src = logo} className='image-contents-allblogs' />
                            </div>
                            <div className='paragraph-blogs' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.postcontent) }}></div>
                        </div>
                        <div className='buttons-flex'>
                            <Button variant='contained' component="primary" style={{ marginRight: "1em" }} onClick={() => navigate(`/updateblog/${item._id}`)}>Update</Button>
                            <Button variant='contained' color='error' onClick={() => deleteBlog(item._id)}>Delete</Button>
                        </div>
                </div>
            ))}
        </div>
    );
}

export default Managebyadminblog;
