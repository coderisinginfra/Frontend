import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
import PlaceIcon from '@mui/icons-material/Place';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../CSS/Contactus.css';
import { Helmet } from 'react-helmet';

const ContactUs = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(true);
    const [isButtonDisabled,setIsButtonDisabled] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsButtonDisabled(true)
        try {
            const response = await axios.post("https://www.backend.risinginfra.in/api/v1/contactus", { name, email, contact, message });
            setIsSubmitted(false);
        } catch (error) {
            alert("Ooops! Something Went Wrong");
        }
    }

    return (
        <>
        <Helmet>
            <title>{props.title}</title>
            <link rel="canonical" href="https://risinginfra.in" />
            <meta name="description" content="Get in touch with RisingInfra for all your real estate needs. Contact us via phone, email, or visit our office" />
            <meta name="keywords" content="RisingInfra contact, real estate contact, phone, email, office location, work with us" />
            <meta name="author" content="Rising Infra" />
        </Helmet>
            <div className='display-container'>
                <div className='display-conatiner1'>
                    <h1 className='heading-container'>Contact Us</h1>
                    <p className='heading-paragraph paragraohimages'>
                        We're here to assist with all your real estate needs. Whether you're buying, selling, or have questions, our team is ready to help. Contact us via phone, email, or visit our office for personalized support. We look forward to making your real estate journey seamless and successful.
                    </p>
                    <div>
                        <div className='icons-contactus-data'>
                            <EmailIcon className='icons-contact' />
                            <Link to="mailto://info@risinginfra.in" className='datalink-contact'>risinginfra.in</Link>
                        </div>
                        <div className='icons-contactus-data'>
                            <CallIcon className='icons-contact' />
                            <Link to="tel://+91 99999 99999" className='datalink-contact'> +91 9990633353</Link>
                        </div>
                        <div className='icons-contactus-data'>
                            <PlaceIcon className='icons-contact' />
                            <p className='heading-paragraph paragraph-content-contact'>1715-1715A, 17th Floor, Astralis Supernova, Sector 94, Noida, Uttar Pradesh 201301</p>
                        </div>
                    </div>
                </div>
                <div className='display-conatiner2'>
                {isSubmitted?(
                        <form className='conatiner-form' onSubmit={handleSubmit}>
                            <div className='icons-container-message'>
                                <PersonIcon />
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder='Full Name'
                                    className='container-contain' required/>
                            </div><br />
                            <div className='icons-container-message'>
                                <EmailIcon />
                                <input
                                    type="email"
                                    name="email"
                                    
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Email Address'
                                    className='container-contain' required/>
                            </div>
                            <br />
                            <div className='icons-container-message'>
                                <CallIcon />
                                <input
                                    type="tel"
                                    name="number"
                                    id="number"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                    placeholder='Phone Number'
                                    maxLength={10}
                                    className='container-contain' required/>
                            </div>
                            <br />
                            <div className='icons-container-message'>
                                <textarea
                                    placeholder='Your Message'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className='container-contain-2data' />
                            </div>
                            <br />
                            <Button variant='contained' color='primary' className='message-data-contact' type="submit" disabled={isButtonDisabled}>
                            {isSubmitted? ('Send Message'):(<div className='loader'></div>)}</Button>

                        </form>
          ):(
                        <div>
                            <p className='cotact-para'>Thanks For Your Response. Our Team Will Contact You Shortly.</p>
                        </div>
          )}
                </div>
            </div>
        </>
    )
}

export default ContactUs;
