import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const NavbarAdminPanel = ({ children }) => {
  const location = useLocation();
  const [content, setContent] = useState(false);

  useEffect(() => {
    const adminPaths = [
      '/private/admin/panel',
      '/private/addproject',
      '/private/blogproject',
      '/private/manageblog',
      '/private/jobopening',
      '/private/updateblog/:id',
      '/private/addteammember',
      '/private/Jobopening',
      '/private/addevent',
      '/private/fetchcontactdetailes',
      '/private/fetchpopup',
      '/private/fetchnayaashiyana',
      '/private/fetchgygy',
      '/private/fetchblogReview'
    ];
    
    if (adminPaths.includes(location.pathname)) {
      setContent(true);
    } else {
      setContent(false);
    }
  }, [location]);

  return <div>{content && children}</div>;
};

export default NavbarAdminPanel;
