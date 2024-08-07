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
import { SocialIcon } from 'react-social-icons';
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
            console.error("Error submitting form", error);
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

    const handleSubmitQuery = async (e) => {
        e.preventDefault();
        setIsButtonDisabled(true);
        try {
            await axios.post("https://www.backend.risinginfra.in/api/v1/popupform", { name, email, contact });
            setOpen(false);
            setIsButtonDisabled(false);
            toast("Thank You For your response. Our team will contact you soon.");
        } catch (error) {
            console.error("Error submitting query", error);
        }
    };

    return (
        <>
            <Helmet>
                <title>{postTitle}</title>
                <link rel="canonical" href={`https://www.risinginfra.in/blogs/${postTitle}`} />
                {blogingData && (
                    <>
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
                        onSubmit: handleSubmitQuery,
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
                            id="contact"
                            name="contact"
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
                <div className='data-flex-blogs'>
                    {!isSubmitted ? (
                        <div className='form-data2'>
                            <h4 className='heading-container-data2'>Contact Us</h4>
                            <form className='containers-data2' onSubmit={handleSubmit}>
                                <div className='input-container-data2'>
                                    <label htmlFor="name" className='headings-data2'>Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="inputs-data2"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='input-container-data2'>
                                    <label htmlFor="email" className='headings-data2'>Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="inputs-data2"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='input-container-data2'>
                                    <label htmlFor="contact" className='headings-data2'>Contact</label>
                                    <input
                                        type="tel"
                                        id="contact"
                                        className="inputs-data2"
                                        value={contact}
                                        onChange={(e) => setContact(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='input-container-data2'>
                                    <label htmlFor="message" className='headings-data2'>Message</label>
                                    <textarea
                                        id="message"
                                        className="textarea-data2"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="buttons-data2" disabled={isButtonDisabled}>Submit</button>
                            </form>
                        </div>
                    ) : (
                        <div className='thanks-message'>
                            <h4>Thanks for your message!</h4>
                        </div>
                    )}
                </div>
                <div className='form-data-blogs'>
                    {blogSubmitter ? (
                        <form onSubmit={handleBlogSubmit}>
                            <h4>Blog Review Form</h4>
                            <div>
                                <label htmlFor="blogSubmitterName">Your Name</label>
                                <input
                                    type="text"
                                    id="blogSubmitterName"
                                    value={blogSubmitterName}
                                    onChange={(e) => setBlogSubmitterName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="contactNumber">Contact Number</label>
                                <input
                                    type="tel"
                                    id="contactNumber"
                                    value={contactNumber}
                                    onChange={(e) => setContactNumber(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="blogMessage">Message</label>
                                <textarea
                                    id="blogMessage"
                                    value={blogMessage}
                                    onChange={(e) => setBlogMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="buttons-data2" disabled={isButtonDisabled}>Submit</button>
                        </form>
                    ) : (
                        <div className='thanks-message'>
                            <h4>Thanks for Reading Our Blog and Submit Review!</h4>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ShowBlogs;
