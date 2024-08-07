import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import "../CSS/Manageblogscss.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Person2Icon from '@mui/icons-material/Person2';
import { Link, useParams } from 'react-router-dom';
import { datasets } from '../App';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import { SocialIcon } from 'react-social-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

const ShowBlogs = () => {
    const { postTitle } = useParams();
    const { blogData, setBlogData } = useContext(datasets);
    const [blogs, setBlogs] = useState([]);
    const [blogingData, setBlogingData] = useState(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsButtonDisabled(true);
        try {
            await axios.post("https://www.backend.risinginfra.in/api/v1/contactus", { name, email, contact, message });
            setIsSubmitted(true);
            setIsButtonDisabled(false);
            setName('');
            setEmail('');
            setContact('');
            setMessage('');
            toast("Thanks for your message!");
        } catch (error) {
            // Handle error
        }
    };

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get("https://www.backend.risinginfra.in/api/v1/fetchblogs");
                setBlogs(response.data.reverse());  
            } catch (error) {
                console.log(error);
            }
        };
        fetchBlogs();
    }, []);

    useEffect(() => {
        const fetchBlogById = async () => {
            try {
                const result = await axios.get(`https://www.backend.risinginfra.in/api/v1/FetchBlogById/${postTitle}`);
                setBlogingData(result.data[0]);
                document.title = result.data[0].postTitle;
            } catch (error) {
                console.log(error);
            }
        };
        fetchBlogById();
    }, [postTitle]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-CA', options); // Format as YYYY-MM-DD
    };

    const [contactNumber, setContactNumber] = useState('');
    const [blogSubmitterName, setBlogSubmitterName] = useState('');
    const [blogMessage, setBlogMessage] = useState('');
    const [blogSubmitter, setBlogSubmitter] = useState(true);

    const handleBlogSubmit = async (e) => {
        e.preventDefault();
        setIsButtonDisabled(true);
        try {
            await axios.post('https://www.backend.risinginfra.in/api/v1/postblogreview', { contactNumber, blogSubmitterName, blogMessage });
            toast("Thanks for Reading Our Blog and Submit Review!");
            setBlogSubmitter(false);
            setIsButtonDisabled(false);
        } catch (error) {
            console.log(error);
        }
    };

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setOpen(true);
        }, 5000);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmitquery = async (e) => {
        e.preventDefault();
        setIsButtonDisabled(true);
        try {
            await axios.post("https://www.backend.risinginfra.in/api/v1/popupform", { name, email, contact });
            setOpen(false);
            setIsButtonDisabled(false);
            toast("Thank you for your response. Our team will contact you soon.");
        } catch (error) {
            // Handle error
        }
    };

    return (
        <>
            <Helmet>
                <title>{postTitle}</title>
                {blogingData && (
                    <>
                        <link rel="canonical" href={`https://www.risinginfra.in/blogs/${postTitle}`} />
                        <meta name="description" content={DOMPurify.sanitize(blogingData.postcontent)} />
                        <meta name="keywords" content={blogingData.keywords} />
                    </>
                )}
            </Helmet>
            <div className='flex-content'>
                <ToastContainer />
                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        component: 'form',
                        onSubmit: (event) => {
                            event.preventDefault();
                            handleSubmitquery(event);
                        },
                    }}
                >
                    <DialogTitle>Get In Touch With Us</DialogTitle>
                    <DialogContent>
                        <DialogContentText sx={{ marginBottom: "2em" }}>
                            Submit this form, please enter your details and our team will contact you soon.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="name"
                            label="Your Name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            sx={{ marginBottom: "1em" }}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="email"
                            name="email"
                            label="Email Address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            variant="outlined"
                            sx={{ marginBottom: "1em" }}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="contactnumber"
                            name="contact number"
                            label="Contact Number"
                            type="tel"
                            fullWidth
                            variant="outlined"
                            value={contact}
                            inputProps={{ maxLength: 10, pattern: '[0-9]*' }}
                            onChange={(e) => setContact(e.target.value)}
                            sx={{ marginBottom: '1em' }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button type="submit" variant='contained' color='primary' disabled={isButtonDisabled}>Submit</Button>
                        <Button onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                </Dialog>
                <div className='flex-content1'>
                    {blogingData ? (
                        <div>      
                            <div className='image-blogs-content'>
                                <img src={blogingData.coverimage} alt={blogingData.coverimage} className='image-contents-blogs' />
                            </div>
                            <h1 style={{ marginTop: "1em" }}>{blogingData.postTitle}</h1>
                            <div className='date-flex'>
                                <div className='custom-data'>
                                    <div className='date-flex system-data'>
                                        <Person2Icon style={{ color: "red" }} />
                                        <h5 style={{ marginLeft: "10px", marginRight: "10px", color: "#909ca4", fontSize: "1em" }}><b>Admin</b></h5>
                                    </div>
                                    <div className='date-flex system-data'>
                                        <AccessTimeIcon style={{ color: "red" }} />
                                        <h5 style={{ marginLeft: "10px", color: "#909ca4", fontSize: "1em" }}><b>{formatDate(blogingData.date)}</b></h5>
                                    </div>
                                </div>
                                <div className='contents-icons'>
                                    <SocialIcon className='content-icon' url="https://www.instagram.com/rising_infra/" />
                                    <SocialIcon className='content-icon' url="https://www.facebook.com/risinginfranoida" />
                                    <SocialIcon className='content-icon' url="https://www.linkedin.com/company/risinginfra/" />
                                </div>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blogingData.postcontent) }} className='contents-blogs' />
                            <h3>Tags: <Link to={`https://www.google.com/search?q=${blogingData.keywords}`} className='linkes-data'>{blogingData.keywords}</Link></h3>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className='data-flex-content'>
                    <div className='form-flex'>
                        {blogSubmitter ? (
                            <form onSubmit={handleBlogSubmit} className='form-flex-blogs'>
                                <h1>Submit Your Query</h1>
                                <TextField
                                    id="outlined-basic"
                                    label="Contact Number"
                                    variant="outlined"
                                    type='tel'
                                    maxLength={10}
                                    value={contactNumber}
                                    onChange={(e) => setContactNumber(e.target.value)}
                                    required
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Name"
                                    variant="outlined"
                                    value={blogSubmitterName}
                                    onChange={(e) => setBlogSubmitterName(e.target.value)}
                                    required
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Your Message"
                                    variant="outlined"
                                    value={blogMessage}
                                    onChange={(e) => setBlogMessage(e.target.value)}
                                    required
                                />
                                <Button type="submit" variant="contained" color="primary" disabled={isButtonDisabled}>Submit</Button>
                            </form>
                        ) : (
                            <h2>Thank you for your submission!</h2>
                        )}
                    </div>
                    <div className='blogs-lists'>
                        <h2 style={{ marginBottom: "1.5em" }}>Related Blogs</h2>
                        {blogs.slice(0, 10).map((post) => (
                            <Link to={`/blogs/${post._id}`} key={post._id} style={{ color: 'black', textDecoration: 'none' }}>
                                <div className="blogs-related-list" style={{ display: 'flex', marginBottom: '1.5em' }}>
                                    <img src={post.coverimage} alt={post.coverimage} style={{ height: '100px', width: '150px', marginRight: '1.5em' }} />
                                    <div>
                                        <h4>{post.postTitle}</h4>
                                        <p style={{ fontSize: '0.8em', color: '#909ca4' }}>{formatDate(post.date)}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowBlogs;
