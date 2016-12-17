import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import access from 'safe-access'
import Button from '../Button';
import { config } from 'config'
import PageHeadline from '../PageHeadline';
import styles from './style.module.css';
import "./skills.json"
import "./facts.json"

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

  // renderFacts() {
  //   const facts = require('./facts.json');
  //   return facts.map(fact => {
  //     return (
  //       <div>
  //         {fact.name}
  //       </div>
  //     )
  //   })
  // }

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
        <div className={styles.aboutPageSectionWrapper}>
          <div style={{ textAlign: 'center' }}>
            <span className={`${styles.quoteSymbol} fa fa-quote-left about-quote`}></span>
          </div>
          <p className={styles.quoteText}>
              But Sorry, having come this far I have to disappoint you a little bit. Very anti-pattern-like <a href="https://medium.com/@manpenaloza/self-taught-code-learning-when-you-did-not-hack-the-commodore-64-in-your-childhood-aebfc6c8b389#.u0k8gzstc" target="_blank">I'm not that kind of programmer who hacked the Commodore 64 at a childhood age of about 14.</a> My childhood more was full of dirt of playing soccer, broken bones of skateboarding and acute hearing loss due to play the drums all day long. So NOW AND NOWADAYS I'm here, with a backpack full of motivation, experience and programming knowledge thanks to the last years learning it on my own besides managing product-development processes for digital businesses.
          </p>
          <div style={{ textAlign: 'center' }}>
            <span className={`${styles.quoteSymbol} fa fa-quote-right about-quote`}></span>
          </div>
        </div>
        <div style={styles.aboutPageSectionWrapper}>
          {/*{this.renderFacts()}*/}
        </div>
        <div style={{ textAlign: 'center' }} className={styles.aboutPageSectionWrapper}>
          <Button to="timeline" text="Continue to my timeline"/>
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
