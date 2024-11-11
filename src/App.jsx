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
import Careers from './websitepage/Careers';
import AddJobs from './pages/AddJobs';
// import SellyourProperty from './pages/SellyourProperty';
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
          <Route path="/events" element={<AllEvents title="Events - Rising infra" />}/>
          <Route path="/our-team" element={<AllTeamMembershow title="Our Teams - Rising infra"/>}/>
          <Route path="/blogs" element={<AllBlogs title="Blogs - Risinginfra"/>} />
          <Route path="/blogs/:postTitle" element={<ShowBlogs />} />
          <Route path="/projects/:propertyTitle" element={<AllListingShow />} />
          <Route path="/aboutus" element={<Aboutus title="About Us - RisingInfra" />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy title="Privacy Policy - Rising infra" />} />
          <Route path="/contactus" element={<ContactUs title="Contact Us - RisingInfra" />} />
          {/* <Route path='/our-teams' element={<ManagementTeam title="Our Leadership Team - Rising infra" />} /> */}
          <Route path='/careers' element={<Careers title="Careers - Rising infra" />} />
          {/* <Route path='/sell-your-properties' element={<SellyourProperty  title="Sell Ypur Property - Rising infra"/>} /> */}
          <Route path='/gurgaon-properties' element={<GurugramPage title="Gurgaon Properties - Rising infra"/>}/>
          <Route path='/goa-properties' element={<GoaPage title="Goa Properties - Rising infra"/>}/>
          <Route path='/ayodhya-properties' element={<AyodhyaPage title="Ayodhya Properties - Rising infra"/>} />
          <Route path='/noida-properties' element={<NoidaPage title="Noida Properties - Rising infra"/>} />
          <Route path="/ghaziabad-properties" element={<Ghaziabad title="Ghaziabad Properties - Rising infra" />}/>
          <Route path='/residential-properties' element={<ResidentialProperty title="Residential Properties - Rising infra"/>} />
          <Route path='/commerical-properties' element={<CommercialProperty title="Commercial Properties - Rising infra"/>} />
          <Route path='/plots' element={<PlotsProperty title="Plots - Rising infra"/>} />
          <Route path='/paras-group' element={<ParasBuildtech title="Paras Group - Rising infra"/>} />
          <Route path="/crc-group" element={<CrcPage title="CRC Group - Rising infra"/>} />
          <Route path="fairfox-group" element={<FairFoxPage title="FairFox Group - Rising infra"/>}/>
          <Route path="/m3m-group" element={<M3mPage title="M3M Group - Rising infra"/>} />
          <Route path="/supertech" element={<Supertech title="SuperTech - Rising infra"/>} />
          <Route path="/godrej-properties" element={<GodrejPage title="Godrej Group - Rising infra"/>} />
          <Route path='/omaxe' element={<Omaxe title="OMAXE - Rising infra"/>}/>
          <Route path="/gaurs-group" element={<GaursPage title="Gaur Group - Rising infra"/>} />
          <Route path="/bhutani-group" element={<BhutaniPage title="Bhutani Infra - Rising infra"/>} />
          <Route path="/ace-group" element={<AcePage title="ACE Group - Rising infra" />} />
          <Route path="/lodha-group" element={<LodhaPage  title="Lodha Group  - Rising infra"/>} />
          <Route path="/dlf-group" element={<DlfPage title="DLF Group - Rising infra" />} />
          <Route path="/gygy-group" element={<GyGyPage title="GyGY Group - Rising infra" />} />
          <Route path="/migsun" element={<MigsunPage title="Migsun Group - Rising infra"/>} />
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
