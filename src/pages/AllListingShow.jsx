import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../CSS/Listingcssdata.css';
import cafeteria from '../assets/amenities/cafeteria.png';
import call from '../assets/amenities/call-center.png';
import park from '../assets/amenities/park.png';
import shield from '../assets/amenities/shield.png';
import elevator from '../assets/amenities/elevator.png';
import rain from '../assets/amenities/rain.png';
import parking from '../assets/amenities/parking-area.png';
import ac from '../assets/amenities/air-conditioning.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import { Helmet } from 'react-helmet';

const AllListingShow = () => {
  const { propertyTitle } = useParams();
  const [propertyData, setPropertyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [open, setOpen] = useState(false);
  const [isButtonDisabled,setIsButtonDisabled] =useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://www.backend.risinginfra.in/api/v1/fetchalllistings/${propertyTitle}`);
        setPropertyData(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [propertyTitle]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitQuery = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true)
    try {
      await axios.post("https://www.backend.risinginfra.in/api/v1/popupform", { name, email, contact });
      setOpen(false);
      toast("Thank you for your response! Our team will contact you soon.");
    } catch (error) {
      toast.error("Submission failed. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://www.backend.risinginfra.in/api/v1/contactus", { name, email, contact, message });
      setIsSubmitted(true);
      toast("Thanks for your message!");
    } catch (error) {
      toast.error("Submission failed. Please try again.");
    }
  };

  const truncateHTML = (html, wordLimit) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const text = doc.body.textContent || "";
    const truncatedText = text.split(' ').slice(0, wordLimit).join(' ');
    return truncatedText;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='all'>
      <Helmet>
        <title>{propertyTitle}</title>
        <link rel="canonical" href={`https://www.risinginfra.in/projects/${propertyTitle}`} />
        <meta name="description" content={propertyData?.description || "Discover exceptional real estate opportunities with our comprehensive services, offering a wide range of residential and commercial properties. Whether you're buying, selling, or investing, our expert team provides personalized guidance every step of the way. Explore luxury homes, affordable apartments, and prime commercial spaces in top locations. Benefit from our extensive market knowledge, innovative marketing strategies, and commitment to excellence. From property management to mortgage assistance, we cover all aspects of your real estate journey. Let us help you find your dream home or ideal investment property with unmatched professionalism and dedication to your success."} />
        <meta name="keywords" content={propertyData?.keywords || "property, investment, development, residential, commercial, leasing, sales, mortgage, broker, realtor, agent, appraisal, foreclosure, equity, escrow, financing, renovation, construction, valuation, zoning, tenant, landlord, listing, commission, closing, title, deed, market, location, neighborhood, amenities, infrastructure, urban, suburban, rural, community, architecture, design, floorplan, square footage, land, plot, lot, apartment, condo, villa, bungalow, penthouse, duplex, townhouse, estate, mansion, luxury, affordable, pre-construction, resale, new build, green building, sustainable, energy-efficient, renovation, remodeling, interior design, landscaping, home inspection, property management, realty, brokerage, firm, agency, ownership, rental, leasehold, freehold, tenancy, contract, agreement, investment property, portfolio, ROI, capital gains, tax, depreciation, insurance, maintenance, utilities, property tax, homeowner association, down payment, interest rate, refinancing, loan, lender, borrower, occupancy, appreciation, market trends"} />
      </Helmet>
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
            Please enter your details. Our team will contact you soon.
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
      {propertyData && propertyData.map((item, index) => (
        <div key={index} >
          {/* images flex  */}
          <div className='flex-container-data-flex'>
              <div className='featuredimages'>
                  <img src={item.images} alt="images" className='images-featuredimages'/>
              </div>
              <div className='featured-container'>
              <h1 className='propertyTitle'>{item.propertyTitle}</h1>
              <div style={{display:"flex"}} className='data-need-buttons'>
                  <LocationOnIcon />
                  <p>{item.location}</p>
              </div>
              <h2 className='prices-list'>Satrting Price {item.price} Onwards</h2>
              <div className='data-need-buttons da-ba'>
                <Button variant='contained' style={{color:"white",background:"#0B3063"}} onClick={()=>setOpen(true)}><CallIcon style={{marginRight:"10px"}}/>INSTANT CALL BACK</Button>
              </div>
                  <h1 className='prices-list'>Projects Highlights</h1>
                <div className='conection-data'>
                  <div className='controller'>
                      <p className='connextion'>Connectivity</p>
                      <p className='connextion'>10</p>
                  </div>
                  <div className='controller'>
                    <p  className='connextion'>Value For Money</p>
                    <p  className='connextion'>10</p>
                  </div>
                 <div className='controller'>
                  <p className='connextion'>Life Style</p>
                  <p className='connextion'>10</p>
                 </div>
                  <div className='controller'>
                  <p className='connextion'>Livability</p>
                  <p className='connextion'>10</p>
                  </div>
                </div>
              </div>
          </div>
       {/* images flex  */}
        <div className='flex-content-property'>
          <div className='conatiners'>
            <div className='description-head'>
              <div>
                <h1>{item.propertyTitle}</h1>
                <h1 className='locationName'>{item.location}</h1>
                <hr className='hr-data-sets' />
              </div>
              <div>
                <h1 className='description-location'>Description</h1>
                <div className='tables-list'>
                  <table>
                    <tr>
                      <th>Location</th>
                      <th>Property Category</th>
                      <th>Size</th>
                      <th>Price</th>
                      <th>Developer</th>
                      <th>City</th>
                    </tr>
                    <tr>
                      <td>{item.location}</td>
                      <td style={{textTransform:"capitalize"}}>{item.category}</td>
                      <td>{item.size}</td>
                      <td>{item.price}</td>
                      <td>{item.developer}</td>
                      <td>{item.city}</td>
                    </tr>
                  </table>
                </div>
                <div className='description-data'>
                  <div className='paragraph-blogs description-listing' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.content)}}></div>
                </div>
              </div>
            </div>

            <div className='sitelocation-listing'>
              <h1 className='description-location'>Gallery Images</h1>
              <div className='floorplans-flex-data'>
                <div className='floorplans1'>
                  <img src={item.galleryimage1} alt='images' className='floorplans-data' />
                </div>
                <div className='floorplans1'>
                  <img src={item.galleryimage2} alt='images' className='floorplans-data' />
                </div>
                <div className='floorplans1'>
                  <img src={item.galleryimage3} alt='images' className='floorplans-data' />
                </div>
              </div>
            </div>

            <div className='sitelocation-listing'>
              <h1 className='description-location'>Amenities</h1>
              <div className='conatiner-amenties-data'>
                <div className='amenties-data'>
                  <img src={cafeteria} alt="cafeteria" className='icons-pages' />
                  <p>Food Cort</p>
                </div>
                <div className='amenties-data'>
                  <img src={call} alt="call" className='icons-pages' />
                  <p>27*7 Service</p>
                </div>
                <div className='amenties-data'>
                  <img src={park} alt="park" className='icons-pages' />
                  <p>Large Open Space</p>
                </div>
                <div className='amenties-data'>
                  <img src={shield} alt="shield" className='icons-pages' />
                  <p>Security</p>
                </div>
                <div className='amenties-data'>
                  <img src={elevator} alt="elevator" className='icons-pages' />
                  <p>Lift</p>
                </div>
                <div className='amenties-data'>
                  <img src={rain} alt="rain" className='icons-pages' />
                  <p>Good Water Harvesting</p>
                </div>
                <div className='amenties-data'>
                  <img src={parking} alt="parking" className='icons-pages' />
                  <p>Parking</p>
                </div>
                <div className='amenties-data'>
                  <img src={ac} alt="ac" className='icons-pages' />
                  <p>Parking</p>
                </div>
              </div>
            </div>

            <div className='sitelocation-listing'>
              <h1 className='description-location'>Site Location</h1>
              <iframe src={item.sitelocation} title="location" className='frames'></iframe>
            </div>

            <div className='sitelocation-listing'>
              <h1 className='description-location'>Floor Images</h1>
              <div className='floorplans-flex-data'>
                <div className='floorplans1'>
                  <img src={item.floorplan1} alt='images' className='floorplans-data' />
                </div>
                <div className='floorplans1'>
                  <img src={item.floorplan2} alt='images' className='floorplans-data' />
                </div>
                <div className='floorplans1'>
                  <img src={item.floorplan3} alt='images' className='floorplans-data' />
                </div>
              </div>
            </div>
          </div>

          <div className='conatiner-data2'>
              {!isSubmitted ? (
                <div className='form-field-datasets'>
                  <h4 className='heading-container' style={{ fontSize: "20px" }}>Enquiry Now</h4>
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
                    <Button type='submit' variant='contained' color='primary' className='button-form'>Submit</Button>
                  </form>
                </div>
              ) : (
                <div className='datasets-container'>
                  <p>Thanks For Your Response. Our Team Will Contact You Shortly.</p>
                </div>
              )}
            </div>
          </div>
          </div>
      ))}
    </div>
  );
};

export default AllListingShow;
