import React, { useEffect, useState } from 'react';
import banner from '../assets/adminimage/Genpact-banner.png';
import '../CSS/Careers.css';
import axios from 'axios';
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from 'react-helmet'

const Careers = (props) => {

    const [data, setData] = useState([]);
    const [category, setCategory] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [apply, setApply] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        categoriesd: 'sales',
        image: null,
    });

    const [formData2, setFormData2] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        categoriesd: 'sales',
        image: null,
    });

    useEffect(() => {
        const fetch = async () => {
            try {
                const [response, categories] = await Promise.all([
                    axios.get("https://www.backend.risinginfra.in/api/v1/fetchcareers"),
                    axios.get("https://www.backend.risinginfra.in/api/v1/fetchjobcategory")
                ]);
                setData(response.data.reverse());
                setCategory(categories.data);
            } catch (error) {
                // console.error("Error fetching data:", error);
            }
        };
        fetch();
    }, []);

    const handleSubmit2 = async (e) => {
        e.preventDefault();
        setIsButtonDisabled(true);
        try {
            const formDataToSend2 = new FormData();
            for (const key in formData2) {
                formDataToSend2.append(key, formData2[key]);
            }

            await axios.post("https://www.backend.risinginfra.in/api/v1/applynow", formDataToSend2, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setApply(false);
            toast("Thanks for your response. Our team will contact you!");
        } catch (error) {
            setApply(false);
            toast("You have already submitted the form!");
        } finally {
            setIsButtonDisabled(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsButtonDisabled(true);
        try {
            const formDataToSend = new FormData();
            for (const key in formData) {
                formDataToSend.append(key, formData[key]);
            }

            await axios.post("https://www.backend.risinginfra.in/api/v1/applynow", formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setIsSubmitted(true);
            toast("Thanks for your response. Our team will contact you!");
        } catch (error) {
            toast("You have already submitted the form!");
        } finally {
            setIsButtonDisabled(false);
        }
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const handleChange2 = (e) => {
        const { name, value, files } = e.target;
        setFormData2((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const applyButton = () => {
        setApply(true);
    };

    return (
        <div>
            <Helmet>
                <title>{props.title}</title>
                <link rel="canonical" href="https://www.risinginfra.in/career" />
                <meta name="description" content="Join the RisingInfra team and build your career in the real estate industry. Explore current job openings and career opportunities with us." />
                <meta name="keywords" content="RisingInfra careers, real estate jobs, job openings, career opportunities, work with us, Rising Infra, Rising Infra Noida, Rising Infra Private Limited, Property In Noida, Property On Noida Expressway, Commercial Property On Noida Expressway, Noida Commercial Projects, Noida Expressway Commercial Projects, Residential Property On Noida Expressway, Noida Expressway Property, Residential Projects On Noida Expressway, Noida Expressway Residential Projects, Noida Property Prices, Noida Properties, Commercial Property In Noida, Rising Infra, Rising Infra Noida, residential property in Noida, residential properties in Noida, best residential property in Noida, best residential projects in Noida, top residential properties in Noida, Real estate,Real estate near me, Real estate for sale,, Real Estate listings,Best Realtor in Noida, Real Estate Agent, Real Estate Brokerage,Realty,Investment property,Commercial real estate, Residential real estate, Real estate agents in [city name]commercial property in Noida, commercial properties in Noida, best commercial property in Noida, best commercial projects in Noida, top commercial properties in Noida, Rising Infra Private Limited, Property In Noida, Property On Noida Expressway, Commercial Property On Noida Expressway, Noida Commercial Projects, Noida Expressway Commercial Projects, commercial Property On Noida Expressway, Noida Expressway Property, commercial Projects On Noida Expressway, Noida Expressway commercial Projects, Noida Property Prices, Noida Properties, Commercial Property In Noida, Property In Noida For Sale, Best Property In Noida, Buy Property In Noida, Property In Noida Ready To Move,commercial Property In Noida, Luxury Property In Noida, Commercial Property In Noida For Sale, best real estate company in noida,best society in noida ready to move, best project in noida, new residential projects in noida,Home for sale,How to buy a home,New homes for sale,Property for sale, House for sale, Luxury homes for sale, Apartment for sale, Cheap Houses For Sale, Mortgage, Zillow Properties, Home buying, House to buy, Home to buy, Home search, Real estate agency, Real estate listings, Best real estate agents, Real estate investment, Mortgage rates, Open House near me, Open Houses, How to get a mortgage, How to improve your credit score, Affordable homes for sale, Down payment assistance, Mortgage pre-approval, Mortgage calculator, Move-in ready homes, Home financing options, Homeownership benefits, Homeownership education, Home buying process, Home buying checklist, Home affordability calculator, Real estate broker, Real estate agent fees, Home inspection checklist, Home warranty, Homeowners Insurance, Homeowner association fees, Property taxes, Foreclosure, Home maintenance tips, Home buying mistakes to avoid, Home buying vs. renting,Virtual open house, Virtual tours, 3D home tours, Smart home technology, Sustainable homes, Co-living spaces, Smart home, Eco-friendly homes, Co-living, Co-working" />
            </Helmet>
            <div className='imagedata-career'>
                <img src={banner} alt="Banner image" className='imagedata-career' />
            </div>
            <div id="first">
                <div id="alldata">
                    <h2 className='heading-container-h2'>Jobs</h2>
                    <div style={{ display: 'flex', marginTop: "10px", marginBottom: "1em", alignItems: "center" }}>
                        <div style={{ backgroundColor: "#1976d2", width: "20%", height: "4px" }}></div>
                        <div style={{ backgroundColor: "#E5E5E5", width: "100%", height: "2px" }}></div>
                    </div>
                    {
                        category.length > 0 ? (
                            <div>
                                {data.map((item, index) => (
                                    <div key={index} className="childs-datas">
                                        <div className='data-sets-careers'>
                                            <h3 className='career-heading'>Job Title -</h3>
                                            <p className='para-careers'>{item.title}</p>
                                        </div>
                                        <div className='data-sets-careers'>
                                            <h3 className='career-heading'>Number Of openings - </h3>
                                            <p className='para-careers'>{item.numberofOpenings}</p>
                                        </div>
                                        <div className='data-sets-careers'>
                                            <h3 className='career-heading'>Experience -</h3>
                                            <p className='para-careers'>{item.experience}</p>
                                        </div>
                                        <div className='data-sets-careers'>
                                            <h3 className='career-heading'>Qualification -</h3>
                                            <p className='para-careers'>{item.qualifications}</p>
                                        </div>
                                        <div className='data-sets-careers'>
                                            <h3 className='career-heading'>Salary -</h3>
                                            <p className='para-careers'>{item.salary}</p>
                                        </div>
                                        <div className='data-sets-careers'>
                                            <h3 className='career-heading'>Job Description</h3>
                                        </div>
                                        <p className='comapny-reputation'>{item.description}</p>
                                        <Button
                                            variant='contained'
                                            color='primary'
                                            style={{ marginTop: "1em" }}
                                            onClick={applyButton}
                                            disabled={isButtonDisabled}
                                        >
                                            Apply Now
                                        </Button>
                                        <div>
                                            {apply ? (
                                                <div className="childs childs-datas">
                                                    <h2 className='heading-container-h2'>Apply Now</h2>
                                                    <div style={{ display: 'flex', marginTop: "10px", marginBottom: "1em", alignItems: "center" }}>
                                                        <div style={{ backgroundColor: "#1976d2", width: "20%", height: "4px" }}></div>
                                                        <div style={{ backgroundColor: "gray", width: "100%", height: "2px" }}></div>
                                                    </div>
                                                    <form className='forms' onSubmit={handleSubmit2}>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            placeholder='Your Name'
                                                            className='input-form'
                                                            value={formData2.name}
                                                            onChange={handleChange2}
                                                            required
                                                        /> <br />
                                                        <input
                                                            type='email'
                                                            name="email"
                                                            placeholder='E-Mail'
                                                            className='input-form'
                                                            value={formData2.email}
                                                            onChange={handleChange2}
                                                            required
                                                        /> <br />
                                                        <input
                                                            type="tel"
                                                            name="phoneNumber"
                                                            placeholder='Phone Number'
                                                            className='input-form'
                                                            value={formData2.phoneNumber}
                                                            maxLength={10}
                                                            onChange={handleChange2}
                                                            required
                                                        /> <br />
                                                        <select
                                                            name="categoriesd"
                                                            className='input-form-select2'
                                                            value={formData2.categoriesd}
                                                            onChange={handleChange2}
                                                        >
                                                            <option className='input-form'>{item.title}</option>
                                                        </select> <br />
                                                        <input
                                                            type="file"
                                                            name="image"
                                                            className='input-form'
                                                            onChange={handleChange2}
                                                            required
                                                            accept='application/pdf'
                                                        /> <br />
                                                        <Button
                                                            variant='contained'
                                                            color='primary'
                                                            className='button-form'
                                                            type="submit"
                                                            disabled={isButtonDisabled}
                                                        >
                                                            Submit
                                                        </Button>
                                                    </form>
                                                </div>
                                            ) : null
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div>
                                <h2>There are no job openings</h2>
                            </div>
                        )
                    }
                </div>

                <div className='container-career'>
                    <div>
                        {!isSubmitted ? (
                            <div className="childs datasets-careers-field">
                                <h2 className='heading-container-h2'>Apply Now</h2>
                                <ToastContainer style={{ marginTop: "5em" }} />
                                <div style={{ display: 'flex', marginTop: "10px", marginBottom: "1em", alignItems: "center" }}>
                                    <div style={{ backgroundColor: "#1976d2", width: "20%", height: "4px" }}></div>
                                    <div style={{ backgroundColor: "#E5E5E5", width: "100%", height: "2px" }}></div>
                                </div>
                                <form className='forms' onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder='Your Name'
                                        className='input-form'
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    /> <br />
                                    <input
                                        type='email'
                                        name="email"
                                        placeholder='E-Mail'
                                        className='input-form'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    /> <br />
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        placeholder='Phone Number'
                                        className='input-form'
                                        value={formData.phoneNumber}
                                        maxLength={10}
                                        onChange={handleChange}
                                        required
                                    /> <br />
                                    <select
                                        name="categoriesd"
                                        className='input-form-select'
                                        value={formData.categoriesd}
                                        onChange={handleChange}
                                    >
                                        <option className='input-form' value="sales">Sales</option>
                                    </select> <br />
                                    <input
                                        type="file"
                                        name="image"
                                        className='input-form'
                                        onChange={handleChange}
                                        required
                                        accept='application/pdf'
                                    /> <br />
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        className='button-form'
                                        type="submit"
                                        disabled={isButtonDisabled}
                                    >
                                        Submit
                                    </Button>
                                </form>
                            </div>
                        ) : (
                            <p className='thanks-careers'>Thanks for your response. Our team will contact you!</p>
                        )}
                    </div>
                    <div className="childs">
                        <h2 className='heading-container-h2'>Our Valuable Employment</h2>
                        <div style={{ display: 'flex', marginTop: "10px", marginBottom: "1em", alignItems: "center" }}>
                            <div style={{ backgroundColor: "#1976d2", width: "20%", height: "4px" }}></div>
                            <div style={{ backgroundColor: "#E5E5E5", width: "100%", height: "2px" }}></div>
                        </div>
                        <div>
                           <p className='comapny-reputation'>
                           Our company is currently seeking a talented and motivated individual to join our team. We are looking for an employee who is passionate about their work, dedicated to achieving results, and eager to contribute to our dynamic environment. The ideal candidate should possess strong communication skills, a proactive attitude, and a willingness to learn and grow with the organization. 
                           </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
