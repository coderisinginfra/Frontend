import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Person2Icon from '@mui/icons-material/Person2';
import { Link, useParams } from 'react-router-dom';
import { datasets } from '../App';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
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
            console.log(error);
            setIsButtonDisabled(false);
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
        return new Date(dateString).toLocaleDateString('en-CA', options);
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
            setIsButtonDisabled(false);
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
            console.log(error);
            setIsButtonDisabled(false);
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
            <div>
                <ToastContainer />
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Contact Us</DialogTitle>
                    <form onSubmit={handleSubmitquery}>
                        <DialogContent>
                            <DialogContentText>
                                Please fill out the form below to get in touch with us.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Name"
                                fullWidth
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <TextField
                                margin="dense"
                                label="Email"
                                type="email"
                                fullWidth
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <TextField
                                margin="dense"
                                label="Contact Number"
                                type="number"
                                fullWidth
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                required
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button type="submit" color="primary" disabled={isButtonDisabled}>
                                Submit
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
                <div>
                    {blogingData ? (
                        <div>
                            <img src={blogingData.coverimage} alt="Blog Cover" style={{ width: '100%', height: 'auto' }} />
                            <h1>{blogingData.postTitle}</h1>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
                                <Person2Icon />
                                <span>{blogingData.postedBy}</span>
                                <AccessTimeIcon />
                                <span>{formatDate(blogingData.date)}</span>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blogingData.postcontent) }} />
                        </div>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
                <div>
                    <div>
                        {isSubmitted ? (
                            <h2>Thank you for your message!</h2>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <h3>Contact Us</h3>
                                <TextField
                                    label="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    fullWidth
                                    required
                                />
                                <TextField
                                    label="Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    fullWidth
                                    required
                                />
                                <TextField
                                    label="Contact Number"
                                    type="number"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                    fullWidth
                                    required
                                />
                                <TextField
                                    label="Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    fullWidth
                                    multiline
                                    required
                                />
                                <Button type="submit" variant="contained" color="primary" disabled={isButtonDisabled}>
                                    Submit
                                </Button>
                            </form>
                        )}
                    </div>
                    <div>
                        <h3>Submit Your Query</h3>
                        {blogSubmitter ? (
                            <form onSubmit={handleBlogSubmit}>
                                <TextField
                                    label="Contact Number"
                                    type="number"
                                    value={contactNumber}
                                    onChange={(e) => setContactNumber(e.target.value)}
                                    fullWidth
                                    required
                                />
                                <TextField
                                    label="Name"
                                    value={blogSubmitterName}
                                    onChange={(e) => setBlogSubmitterName(e.target.value)}
                                    fullWidth
                                    required
                                />
                                <TextField
                                    label="Your Message"
                                    value={blogMessage}
                                    onChange={(e) => setBlogMessage(e.target.value)}
                                    fullWidth
                                    multiline
                                    required
                                />
                                <Button type="submit" variant="contained" color="primary" disabled={isButtonDisabled}>
                                    Submit
                                </Button>
                            </form>
                        ) : (
                            <h2>Thank you for your submission!</h2>
                        )}
                    </div>
                    <div>
                        <h2>Related Blogs</h2>
                        {blogs.slice(0, 10).map((post) => (
                            <Link to={`/blogs/${post._id}`} key={
            {/* More related blog listings or other content can go here */}
            <div style={{ padding: '2em', textAlign: 'center' }}>
                <h2>Subscribe to Our Newsletter</h2>
                <form onSubmit={handleNewsletterSubscribe} style={{ maxWidth: '600px', margin: 'auto' }}>
                    <TextField
                        label="Email"
                        type="email"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        fullWidth
                        required
                        style={{ marginBottom: '1em' }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={isButtonDisabled}
                    >
                        Subscribe
                    </Button>
                </form>
            </div>
        </>
    );
};

export default ShowBlogs;
