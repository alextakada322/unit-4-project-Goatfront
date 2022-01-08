import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Homepage.css';

function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className='home-container'>
      <Link to="/sneakers/1">
        <img
          className="splash-image"
          src="https://jphan-doap-dev.s3-us-west-1.amazonaws.com/splash-1.jpg"
        />
      </Link>
      <JordanFeature />
      <Link to="/adidas">
        <img
          className="splash-image"
          src="https://jphan-doap-dev.s3-us-west-1.amazonaws.com/splash-2.jpg"
        />
      </Link>
      <AdidasFeature />
    </div>
  );
}

export default Homepage;