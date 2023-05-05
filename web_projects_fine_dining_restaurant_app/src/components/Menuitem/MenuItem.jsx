import React from 'react';

import './MenuItem.css';

const MenuItem = (item) => (
  <div className="menuItem">
    <h6>{item.title}</h6>
  </div>
);

export default MenuItem;
