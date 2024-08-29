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
            <link rel="canonical" href="https://www.risinginfra.in/contact" />
            <meta name="description" content="Get in touch with RisingInfra for all your real estate needs. Contact us via phone, email, or visit our office" />
            <meta name="keywords" content="Rising Infra,Rising infra Contact us, risinginfra noida, unique real estate, commercial property company, RISING INFRA - GUNTUR,Rising infra Contactus,commercial real estate website, rising infra mail, risinginfra address, rising infra contact detailes, India's Largest Real Estate Company, Best Real Estate Company, Best Property Consultant, Real Estate Company, India's Best Real Estate Consultant, Best Property Dealers, Property Websites, Real Estate Website, real estate,real estate license,commercial real estate,real estate agents near me,real estate agent vs realtor,real estate agencies,real estate attorney, agency real estate, adelaide real estate, real estate broker license,Best Real Estate Consultant in Delhi/NCR, Best Real Estate Property Consultant in Delhi/NCR Real Estate, Property in Noida, Properties, Property sites India, Commercial Properties For Sale, Buy Properties, Properties To Buy, Buy Residential Properties, Buy Commercial Properties, Residential Properties For Sale, Residential Properties In Noida, Buy Residential Properties In Noida, Residential Properties For Sale In Noida,Buy Commercial Properties In Noida, Commercial Properties In Noida, Commercial Properties For Sale In Noida, Buy Residential Properties In Delhi, Residential Properties In Delhi, Residential, Properties For Sale In Delhi, Buy Commercial Properties In Delhi, Commercial Properties In Delhi,, Commercial Properties For Sale In Delhi, Buy Residential Properties In Gurgaon, Residential, Properties In Gurgaon, Residential Properties For Sale In Gurgaon, Buy Commercial Properties In, Gurgaon, Commercial Properties In Gurgaon, Commercial Properties For Sale In Gurgaon, Buy, Residential Properties In Mumbai, Residential Properties In Mumbai, Residential Properties For Sale, In Mumbai, Buy Commercial Properties In Mumbai, Commercial Properties In Mumbai, Commercial, Properties For Sale In Mumbai, Buy Residential Properties In Greater Noida, Residential Properties In, Greater Noida, Residential Properties For Sale In Greater Noida, Buy Commercial Properties In, Greater Noida, Commercial Properties In Greater Noida, Commercial Properties For Sale In Greater, Noida, Buy Residential Properties In Navi Mumbai, Residential Properties In Navi Mumbai,, Residential Properties For Sale In Navi Mumbai, Buy Commercial Properties In Navi Mumbai,, Commercial Properties In Navi Mumbai, Commercial Properties For Sale In Navi Mumbai, Real Estate, India Property, Property in India, Real Estate in India, Properties in India, Residential Property in India, Apartment in India, Commercial Property in India, rising infra noida, top 10 real estate brokers in noida, real estate company in noida, best real estate company in noida, top real estate companies , in noida, top 10 real estate companies in noida, real estate company in greater noida, list of , top real estate companies in noida, list of real estate companies in noida, top 10 real estate , companies in noida, Real estate builder in Noida, real estate developers in Noida, real estate , companies, property dealers in noida, property dealers in greater noida, property dealers in , noida extension, property dealer in noida for rent, best property dealers in noida, best , property dealer in greater noida, top 10 property dealers in noida, top property dealers in , noida, property dealers in noida expressway, property dealers in surajpur greater noida, best , property dealers in greater noida noida uttar pradesh, commercial property dealers in noida, , Property Dealers in Noida, Real Estate Developers in Noida, Estate agents in Noida, Flats for , sale in Noida, Top property dealers, Property Agents in Noida,property dealers in noida for , rent, best real estate agents in noida, real estate agents in noida, property dealers in noida , extension, list of property dealers in greater noida, best property dealers in greater noida, , property dealers in noida and greater Noida, Top Real Estate Agents in Noida, Real Estate , Companies in Noida, Real Estate Brokers in Noida, Noida Real Estate Agents, Top Property , Brokers in Noida, Real Estate Consultants in Noida, List of House Brokers in Noida, , Commercial Property in Noida, Property in Noida, Commercial property for sale in noida, , best commercial property in noida, Commercial office space in noida, buy property in Noida, , Noida property prices, best property in Noida, Real-estate investment in Noida, office space , in Noida, buy commercial property in Noida, retail shops in Noida, Food court in Noida, Real , estate consultant in Noida, Real estate property consultant in Noida, Real estate Advisors in , Noida, Real estate property agents in Noida, property in noida" />
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
