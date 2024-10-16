import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllBlogs from './pages/AllBlogs';
import ShowBlogs from './pages/ShowBlogs';
import Navbar from './components/Navbar';
import Footer from '../src/components/Footer'
import AddProject from './pages/AddProject';
import BlogProject from './pages/BlogProject';
import AdminFront from './pages/AdminFront';
import Admin from './pages/Admin';
import Managebyadminblog from './pages/Managebyadminblog';
import UpdateBlog from './pages/UpdateBlog';
import Aboutus from './websitepage/Aboutus';
import HomePage from './websitepage/HomePage';
import Login from './websitepage/Login';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactUs from './websitepage/ContactUs';
import Navbarfront from './components/Navbarfront';
import ManagementTeam from './pages/ManagementTeam';
import Careers from './websitepage/Careers';
import AddJobs from './pages/AddJobs';
import SellyourProperty from './pages/SellyourProperty';
import GurugramPage from './LocationPage/GurugramPage';
import GoaPage from './LocationPage/GoaPage';
import AyodhyaPage from './LocationPage/AyodhyaPage';
import NoidaPage from './LocationPage/NoidaPage';
import FootPath from './components/FootPath';
import FooterBottom from './components/FooterBottom';
import ResidentialProperty from './LocationPage/ResidentialProperty';
import CommercialProperty from './LocationPage/CommercialProperty';
import PlotsProperty from './LocationPage/PlotsProperty';
import ParasBuildtech from './developersPage/ParasBuildtech';
import DlfPage from './developersPage/DlfPage';
import M3mPage from './developersPage/M3mPage';
import Supertech from './developersPage/Supertech';
import GodrejPage from './developersPage/GodrejPage';
import Omaxe from './developersPage/Omaxe';
import GaursPage from './developersPage/GaursPage';
import BhutaniPage from './developersPage/BhutaniPage';
import AcePage from './developersPage/AcePage';
import LodhaPage from './developersPage/LodhaPage';
import GyGyPage from './developersPage/GyGyPage';
import MigsunPage from './developersPage/MigsunPage';
import ScrollToTop from './components/ScrollToTop';
import NavbarAdminPanel from './components/NavbarAdminPanel';
import Navbaruserpanel from './components/Navbaruserpanel';
import AllListingShow from './pages/AllListingShow';
import AddTeamMember from './pages/AddTeamMember';
import AllTeamMembershow from './pages/AllTeamMembershow';
import FetchResume from './pages/FetchResume';
// import Signup from './websitepage/Signup';
import ProtectedRoutes from './components/ProtectedRoutes';
import SocialIconsfixed from './components/SocialIconsfixed';
import Ghaziabad from './LocationPage/Ghaziabad';
import AddEvents from './pages/AddEvents';
import AllEvents from './pages/AllEvents';
import Attraction from './websitepage/Attraction';
import CrcPage from './developersPage/CrcPage';
import FairFoxPage from './developersPage/FairFoxPage';
import FetchContactDetailes from './pages/FetchContactDetailes';
import FetchPopupDetailes from './pages/FetchPopupDeatiles';
import FetchNayaashiyana from './pages/FetchNayaashiyana';
import FetchGyGy from './pages/FetchGyGy';
import FetchBlogReviewDetailes from './pages/FetchBlogReviewDetailes';
import FooterUserPanel from './components/FooterUserPanel';

export const datasets = createContext();

function App() {
  const [blogData, setBlogData] = useState({});

  return (
    <datasets.Provider value={{ blogData, setBlogData }}>
      <Router>
        {/* Navbar Backend Admin Panel  */}
                <NavbarAdminPanel>
                  <Navbar />
                </NavbarAdminPanel>
          {/* Navbar Backend Admin Panel  */}
          {/* Nabar user panel  */
          <Navbaruserpanel>
            <Navbarfront />
          </Navbaruserpanel>
          //  Navbar user pane; 
          }
        <ScrollToTop />
        <SocialIconsfixed />
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Admin Panel Routes pages  */}
          <Route path='/private' element={<ProtectedRoutes />}>
              <Route path="admin" element={<Admin title="Login Admin" />} />
              <Route path="addproject" element={<AddProject title="Add Project" />} />
              <Route path="blogproject" element={<BlogProject title="Blog Project" />} />
              <Route path="admin/panel" element={<AdminFront title="Welcome In Admin" />} />
              <Route path='Jobopening' element={<AddJobs title="Add Job Opening"/>}/>
              <Route path='updateblog/:id' element={<UpdateBlog />}/>
              <Route path="manageblog" element={<Managebyadminblog title="All Blogs" />} />
              <Route path="allresume" element={<FetchResume title="All Resume" />} />
              <Route path='addteammember' element={<AddTeamMember title="Add Team Member"/>}/>
              <Route path='addevent' element={<AddEvents title="Add Events" />} />
              <Route path="fetchcontactdetailes" element={<FetchContactDetailes title="Fetch Contact || Rising Infra" />} />
              <Route path="fetchpopup" element={<FetchPopupDetailes title="Fetch Popup || Rising infra" />}/>
              <Route path="fetchnayaashiyana"  element={<FetchNayaashiyana title="Fetch Nayaashiyana || Rising Infra"/>}/>
              <Route path="fetchgygy" element={<FetchGyGy title="Fetch GyGy || Rising Infra" />} />
              <Route path="fetchblogReview" element={<FetchBlogReviewDetailes title="Fetch Blog Review || Rising Infra" />} />
          </Route>
          {/* Admin Panel Routes pages  */}

          <Route path="/login" element={<Login title="Login Risinginfra" />} />
          {/* <Route path="/register" element={<Signup title="Register Risinginfra" />} /> */}
          <Route path="/events" element={<AllEvents title="Events" />}/>
          <Route path="/ourteam" element={<AllTeamMembershow title="Our Teams - RisingInfra"/>}/>
          <Route path="/blogs" element={<AllBlogs title="Blogs - Risinginfra"/>} />
          <Route path="/blogs/:postTitle" element={<ShowBlogs />} />
          <Route path="/projects/:propertyTitle" element={<AllListingShow />} />
          <Route path="/aboutus" element={<Aboutus title="About Us - RisingInfra" />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy title="Privacy Policy - Rising infra" />} />
          <Route path="/contact" element={<ContactUs title="Contact Us - RisingInfra" />} />
          <Route path='/managementteams' element={<ManagementTeam title="Our Leadership Team" />} />
          <Route path='/careers' element={<Careers title="Careers - RisingInfra" />} />
          <Route path='/sellyourproperty' element={<SellyourProperty  title="Sell Ypur Property"/>} />
          <Route path='/gurgaonproperty' element={<GurugramPage title="Gurgaon Properties - RisingInfra"/>}/>
          <Route path='/goaproperty' element={<GoaPage title="Goa Properties - RisingInfra"/>}/>
          <Route path='/ayodhyaproperty' element={<AyodhyaPage title="Ayodhya Properties - RisingInfra"/>} />
          <Route path='/noidaproperty' element={<NoidaPage title="Noida Properties - RisingInfra"/>} />
          <Route path="/ghaziabadproperties" element={<Ghaziabad title="Ghaziabad Properties - RisingInfra" />}/>
          <Route path='/residentialproperty' element={<ResidentialProperty title="Residential Properties - RisingInfra"/>} />
          <Route path='/commericalproperty' element={<CommercialProperty title="Commercial Properties - RisingInfra"/>} />
          <Route path='/plotsproperty' element={<PlotsProperty title="Plots - RisingInfra"/>} />
          <Route path='/parasgroup' element={<ParasBuildtech title="Paras Group - Best Real estate Developer"/>} />
          <Route path="/crcgroup" element={<CrcPage title="CRC Group - Best Real estate Developer"/>} />
          <Route path="fairfoxgroup" element={<FairFoxPage title="FairFox Group - Best Real estate Developer"/>}/>
          <Route path="/m3mgroup" element={<M3mPage title="M3M Group - Best Real estate Developer"/>} />
          <Route path="/supertech" element={<Supertech title="SuperTech - Best Real estate Developer"/>} />
          <Route path="/godrejproperties" element={<GodrejPage title="Godrej Group - Best Real estate Developer"/>} />
          <Route path='/omaxe' element={<Omaxe title="OMAXE - Best Real estate Developer"/>}/>
          <Route path="/gaursgroup" element={<GaursPage title="Gaur Group - Best Real estate Developer"/>} />
          <Route path="/bhutanigroup" element={<BhutaniPage title="Bhutani Infra - Best Real estate Developer"/>} />
          <Route path="/acegroup" element={<AcePage title="ACE Group - Best Real estate Developer" />} />
          <Route path="/lodhagroup" element={<LodhaPage  title="Lodha Group  - Best Real estate Developer"/>} />
          <Route path="/dlfgroup" element={<DlfPage title="DLF Group - Best Real estate Developer" />} />
          <Route path="/gygygroup" element={<GyGyPage title="GyGY Group - Best Real estate Developer" />} />
          <Route path="/migsun" element={<MigsunPage title="Migsun Group - Best Real estate Developer"/>} />
          <Route path="*" element={<HomePage  />} />
          <Route path="/certification" element={<Attraction title="Certification || Rising Infra" />} />
        </Routes>
        <FooterUserPanel>
          <FooterBottom />
        </FooterUserPanel>
          <Footer />
      </Router>
    </datasets.Provider>
  );
}

export default App;
