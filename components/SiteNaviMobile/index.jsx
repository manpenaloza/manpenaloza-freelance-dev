import React from 'react';
import './style.css';

// TODO: REFACTOR STYLING/CLASSNAMES TO USE CSS MODULES
const SiteNaviMobile = () => {
  return(
    <div className="containerNavMobile">
      <button className="mobileNavButton">
        <span className="fa fa-bars"></span>
      </button>
    </div>
  )
};

export default SiteNaviMobile;