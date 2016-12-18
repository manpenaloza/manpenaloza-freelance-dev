import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Vivus from 'vivus';
import DocumentTitle from 'react-document-title'
import access from 'safe-access'
import { config } from 'config'
import PageHeadline from '../PageHeadline';
import PageWrapper from '../PageWrapper';
import SectionWrapper from '../SectionWrapper';
import GlassesSvg from './images/jsxIfyedGlassesSVG';
import MtSvgLines from 'react-mt-svg-lines';
import styles from './style.module.css';

// TODO: REFACTOR STYLING/CLASSNAMES TO USE CSS MODULES
class ShowRoomPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      svgAnimation: ''
    }
  }

  renderReferencesWithSectionWrapper() {
    let refs = require('./references.json');
    let refItems = refs.map((ref) => {

      return(
        <figure key={ref.name} className={styles.refItemContainer}>
          <a>
            <img src={require(`./images/${ref.image}`)}/>
            <div className={styles.refItemOverlay}>
              <img src={require('./images/refItemHoverImg.png')}/>
            </div>
          </a>
          <figcaption>
            <strong>{ref.name}</strong>
            <span>{ref.shortDescription}</span>
          </figcaption>
        </figure>
      )
    });

    return(
      <SectionWrapper customStyle={styles.showRoomItemsWrapper}>
        {refItems}
      </SectionWrapper>
    )
  }

  componentDidMount() {
    //new Vivus('glasses-svg', {duration: 200, file: <GlassesSvg/>});
  }

  render() {
    const {route} = this.props
    const post = route.page.data
    return (
      <PageWrapper>
        <PageHeadline color="#44535A">Showroom</PageHeadline>
        <SectionWrapper customStyle={styles.glassesWrapper}>
          <MtSvgLines animate={1400} duration={3000} fade={true}>
            <GlassesSvg/>
          </MtSvgLines>
        </SectionWrapper>
        {this.renderReferencesWithSectionWrapper()}
      </PageWrapper>
    );
  }
}

ShowRoomPage.propTypes = {
  post: React.PropTypes.object,
  pages: React.PropTypes.array,
};

export default ShowRoomPage;
