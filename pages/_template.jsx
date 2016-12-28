/*
 * INFO ON THIS FILE FROM GATSBY DOCUMENTATION
 * _template files under /pages are treated as parent templates for other pages in the same directory tree.
 */

import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import SiteNavi from '../components/SiteNavi'
import SiteNaviMobile from '../components/SiteNaviMobile'

import '../static/css/reset.css'
import '../static/css/highlight.css'
import '../static/css/font-awesome.css'
import '../static/scss/devicons.scss'
import '../static/scss/test.scss' // this one includes my personal styles

//import WOW from 'wowjs';
//var wow = new WOW.WOW()

class Template extends React.Component {

  componentDidMount() {
    const WOW = require('wowjs');
    this.wow = new WOW.WOW();
    this.wow.init();
  }

  componentDidUpdate() {
    this.wow.sync();
  }

  render() {
    const { location, children } = this.props;
    return (
      <div className="pagesRootContainer">
        <SiteNavi title={config.siteTitle} location={location} />
        <div className="mainContainer">
          <SiteNaviMobile />
          <div className="contentContainer">
            { children }
          </div>
        </div>
      </div>
    );
  }

}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
};

export default Template;
