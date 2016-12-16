import React from 'react';
import './style.css';

// TODO: REFACTOR STYLING/CLASSNAMES TO USE CSS MODULES
const PageHeadline = ({ children, color }) => (
  <h1 className="pageHeadline" style={{ color: color }}>{children}</h1>
);

export default PageHeadline;