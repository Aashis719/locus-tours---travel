import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MobileRedirect = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    // Redirect from /activities to / on all devices
    if (window.location.pathname === '/activities') {
      navigate('/');
    }
  }, [navigate]);

  return null;
};

export default MobileRedirect;