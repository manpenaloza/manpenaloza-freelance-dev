import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import access from 'safe-access'
import { config } from 'config'
import PageHeadline from '../PageHeadline';
import styles from './style.module.css';
import './skills.json';

class AboutPage extends React.Component {

  renderSkills() {
    const skills = require("./skills.json");
    return skills.map((skill) => {
      return (
        <div className={styles.skillItem}>
          <span className={styles.skillItemIcon}>
            <img src={require(`./images/${skill.icon}`)} />
          </span>
          <span className={styles.skillName}>{skill.name}</span>
          <span className={styles.skillText}>{skill.text}</span>
        </div>
      )
    })
  }

  render() {
    const {route} = this.props
    const post = route.page.data
    return (
      <div className={styles.aboutPageWrapper}>
        <PageHeadline color="#3D7F59">About me</PageHeadline>
        <div className={`${styles.aboutPageSectionWrapper} ${styles.about}`}>
          <p className={styles.aboutMeIntroductionText}>{post.aboutMeIntroductionText}</p>
          <div className={`${styles.aboutMeMainImage} ${styles.containerAnimated}`}></div>
        </div>
        <div className={`${styles.aboutPageSectionWrapper} ${styles.skillsSection}`}>
          {this.renderSkills()}
          <div></div>
        </div>
      </div>
    );
  }
}

AboutPage.propTypes = {
  post: React.PropTypes.object,
  pages: React.PropTypes.array,
};

export default AboutPage
