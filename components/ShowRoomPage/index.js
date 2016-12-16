import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Vivus from 'vivus';
import DocumentTitle from 'react-document-title'
import access from 'safe-access'
import { config } from 'config'
import PageHeadline from '../PageHeadline';
import GlassesSvg from './images/jsxIfyedGlassesSVG';
import MtSvgLines from 'react-mt-svg-lines';
import './style.css';

// TODO: REFACTOR STYLING/CLASSNAMES TO USE CSS MODULES
class ShowRoomPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      svgAnimation: ''
    }
  }

  componentDidMount() {
    //new Vivus('glasses-svg', {duration: 200, file: <GlassesSvg/>});
  }

  render() {
    const {route} = this.props
    const post = route.page.data
    return (
      <div>
        <PageHeadline color="#44535A">Showroom</PageHeadline>
        <div className="showRoomPageSectionWrapper glassesWrapper">
          <MtSvgLines animate={1400} duration={3000} fade={true}>
            <GlassesSvg/>
          </MtSvgLines>
        </div>
      </div>
    );
  }
}

ShowRoomPage.propTypes = {
  post: React.PropTypes.object,
  pages: React.PropTypes.array,
};

export default ShowRoomPage;
