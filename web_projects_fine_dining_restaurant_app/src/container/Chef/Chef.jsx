import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef’s Word" />

      <div className="app__chef-word_title">
        <p>What we believe in</p>
      </div>

      <div className="app__chef-word_text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, reprehenderit natus recusandae tempora vitae culpa ab nam error possimus! Tempora saepe et possimus repellendus temporibus.</p>
      </div>

      <div className="app__chef-word_name">
        
      </div>
    </div>

  </div>
);

export default Chef;
