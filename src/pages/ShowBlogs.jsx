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
    const [blogingData, setBlogingData] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isButtonDisabled,setIsButtonDisabled] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsButtonDisabled(true)
        try {
            await axios.post("https://www.backend.risinginfra.in/api/v1/contactus", { name, email, contact, message });
            setIsSubmitted(true);
            setIsButtonDisabled(false)
            setName('')
            setEmail('')
            setContact('')
            setMessage('')
            toast("Thanks for your message!");
        } catch (error) {
            // alert("Ooops! Something Went Wrong");
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
                const result = await axios.get(`https://www.backend.risinginfra.in/api/v1//FetchBlogById/${postTitle}`);
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

    const [contactnumber, setcontactnumber] = useState('');
    const [blogsubmittername, setblogsubmittername] = useState('');
    const [blogmessage, setblogmessage] = useState('');
    const [blogSubmitter, setBlogSubmitter] = useState(true);

    const handleBlogSubmit = async (e) => {
        e.preventDefault();
        setIsButtonDisabled(true)
        try {
           const response =  await axios.post('https://www.backend.risinginfra.in/api/v1/postblogreview', { contactnumber, blogsubmittername, blogmessage });
            toast("Thanks for Reading Our Blog and Submit Review!");
            setBlogSubmitter(false);
            setIsButtonDisabled(false)
        } catch (error) {
        }
    };

    const [open, setOpen] = useState(false);

    useEffect(()=>{
    setTimeout(()=>{
        setOpen(true)
    },5000)
    },[])
    const handleClose = () => {
        setOpen(false);
        };

        const handleSubmitquery = async (e) => {
            e.preventDefault();
            setIsButtonDisabled(true)
            try {
                const response = await axios.post("https://www.backend.risinginfra.in/api/v1/popupform", { name, email, contact });
                setOpen(false);
                setIsButtonDisabled(false)
                toast("Thank Your For your reponse our team will contact to you soon");
            } catch (error) {
            }
        }

    return (
        <>
        <Helmet>
          <title>{postTitle}</title>
          <link rel="canonical" href={`https://www.risinginfra.in/blogs/${postTitle}`} />
          <meta name="description" content={DOMPurify.sanitize(blogingData.postcontent)} />
          <meta name="keywords" content={blogingData.keywords} />
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
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Get In Touch With Us</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{marginBottom:"2em"}}>
            Submit this form, please enter your Detailes our team will contact to soon.
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
            onChange={(e)=>setName(e.target.value)}
            sx={{marginBottom:"1em"}}
          />
          <TextField
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            fullWidth
            variant="outlined"
            sx={{marginBottom:"1em"}}
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
              onChange={(e)=>setContact(e.target.value)}
              sx={{ marginBottom: '1em' }}
             />
        </DialogContent>
        <DialogActions>
          <Button type="submit" variant='contained' color='primary' onClick={handleSubmitquery} disabled={isButtonDisabled}>Submit</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
            <div className='flex-content1'>
                {blogingData ? (
                    <div>      
                        <div className='image-blogs-content'>
                            <img src={blogingData.coverimage} alt={blogingData.coverimage} className='image-contents-blogs' />
                        </div>
                        <h1 style={{marginTop:"1em"}}>{blogingData.postTitle}</h1>
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
                            {/* <div className='contents-icons'>
                                <SocialIcon className='content-icon' url="https://www.instagram.com/rising_infra/" />
                                <SocialIcon className='content-icon' url="https://www.facebook.com/risinginfranoida" />
                                <SocialIcon className='content-icon' url="https://www.linkedin.com/company/risinginfra/" />
                            </div> */}
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
                        <h4 className='heading-container' style={{fontSize:"20px"}}>Enquiry Now</h4>
                        <div style={{ display: 'flex', marginTop: "10px", marginBottom: "1em", alignItems: "center" }}>
                            <div style={{ backgroundColor: "#1976d2", width: "20%", height: "4px" }}></div>
                            <div style={{ backgroundColor: "gray", width: "100%", height: "2px" }}></div>
                        </div>
                        <form className='forms' onSubmit={handleSubmit}>
                            <input type="text" 
                                placeholder='Your Name' 
                                className='input-form' 
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                                required
                            /> <br />
                            <input type='email'
                                placeholder='E-Mail' 
                                className='input-form' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            /> <br />
                            <input type="tel" 
                                placeholder='Phone Number'
                                className='input-form' 
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                required
                            /> <br />
                            <textarea placeholder='Message' 
                                className='input-form textarea-form' 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea> <br />
                            <Button type='submit' variant='contained' color='primary' className='button-form' disabled={isButtonDisabled}>Submit</Button>
                        </form>
                    </div>
                ) : (
                    <div className='datasets-container'>
                        <p>Thanks For Your Response. Our Team Will Contact You Shortly.</p>
                    </div>
                )}
                <div className='form-data2'>
                    <h1 className='heading-container' style={{fontSize:"20px"}}>Latest Blog</h1>
                    <div style={{ display: 'flex', marginTop: "10px", marginBottom: "1em", alignItems: "center" }}>
                        <div style={{ backgroundColor: "#1976d2", width: "20%", height: "4px" }}></div>
                        <div style={{ backgroundColor: "gray", width: "100%", height: "2px" }}></div>
                    </div>
                    {blogs.slice(1, 6).map((item, index) => (
                        <Link
                            to={`/blogs/${item.postTitle}`}
                            className='list-color'
                            key={index}
                        >
                            <div className='blogs-content'>
                                <div className='image-bloges-flex'>
                                    <img src={item.coverimage} alt={item.coverimage} className='image-content' />
                                </div>
                                <div className='title-text'>
                                    <p className='data-paragraph'><b>{item.postTitle}</b></p>
                                    <div className='date-flex system-data'>
                                        <AccessTimeIcon style={{ color: "red" }} />
                                        <h6 style={{ marginLeft: "1em" }}><b>{formatDate(item.date)}</b></h6>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        <div className='forms-datasets-blogs'>
            <div>
                {blogSubmitter ? (
                    <>
                        <div className='replyform'>
                            <MessageIcon color='primary'/>
                            <h2 className='message-everyone'>LEAVE A REPLY</h2>
                        </div>
                        <form>
                            <div className='label-data-name'>
                                <label htmlFor="Name" className='lebel'>Name* <br />
                                    <input type="text"
                                        id="Name"
                                        name="Name" 
                                        className='input-message-blog' 
                                        placeholder='Your Name' 
                                        value={blogsubmittername}
                                        onChange={e => setblogsubmittername(e.target.value)}
                                        required
                                    />
                                </label>
                                <label htmlFor="tel" className='lebel'>Phone Number* <br />
                                    <input type="tel" 
                                        id="tel"
                                        name="tel" 
                                        maxLength={10}
                                        className='input-message-blog'
                                        placeholder='Your Contact Number' 
                                        value={contactnumber}
                                        onChange={(e) => setcontactnumber(e.target.value)}
                                        required
                                    />
                                </label>
                            </div>
                            <label htmlFor="Comment" className='lebel'>Comment* <br />
                                <textarea id="Comment"
                                    name="Comment" 
                                    placeholder='Your Message' 
                                    className='comments-data' 
                                    value={blogmessage}
                                    onChange={(e) => setblogmessage(e.target.value)}
                                    required
                                />
                            </label> <br />
                            <Button variant='contained' color='primary' className='submit-reply' style={{margin:"1em"}} onClick={handleBlogSubmit} disabled={isButtonDisabled}>Submit</Button>
                        </form>
                    </>
                ) : (
                    <div className='datasets'>
                        <p>Thanks for Reading Our Blog and Submit Review!</p>
                    </div>
                )}
            </div>
        </div>
        </>
    );
}

export default ShowBlogs;
