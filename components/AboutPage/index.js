import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import access from 'safe-access'
import Button from '../Button';
import PageWrapper from '../PageWrapper';
import SectionWrapper from '../SectionWrapper';
import { config } from 'config'
import PageHeadline from '../PageHeadline';
import styles from './style.module.css';

class AboutPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      avocadosEaten: 7593
    }
  }

  renderSkillsWithSectionWrapper() {
    const skills = require("./skills.json");
    let SkillItems = skills.map((skill) => {
      return (
        <div key={skill.name} className={styles.skillItem}>
          <span className={styles.skillItemIcon}>
            <img src={require(`./images/${skill.icon}`)} />
          </span>
          <span className={styles.skillName}>{skill.name}</span>
          <span className={styles.skillText}>{skill.text}</span>
        </div>
      )
    })
    return (
      <SectionWrapper customStyle={styles.skillsSection}>
        {SkillItems}
      </SectionWrapper>
    )
  }

  renderFactsWithSectionWrapper() {
    const facts = require('./facts.json');
    let FactItems = facts.map(fact => {
      let num = fact.name.indexOf('Avocado') != -1
        ? <span className={`${styles.factNumber} ${styles.factNumberAvocado}`}>{this.state.avocadosEaten}</span>
        : <span className={styles.factNumber}>{fact.number}</span>
      let icon = fact.name.indexOf('Avocado') != -1
        ? <span className={`fa fa-${fact.fa} ${styles.factIcon} ${styles.factNumberAvocado}`}></span>
        : <span className={`fa fa-${fact.fa} ${styles.factIcon}`}></span>
      return (
        <div key={fact.name} className={styles.factItem}>
          {icon}
          {num}
          <span className={styles.factName}>{fact.name}</span>
        </div>
      )
    });
    return (
      <SectionWrapper customStyle={styles.factsSection}>
        {FactItems}
      </SectionWrapper>
    )
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        avocadosEaten: this.state.avocadosEaten + 1
      })
    }, 2000)
  }

  render() {
    const {route} = this.props
    const post = route.page.data
    return (
      <PageWrapper>
        <PageHeadline color="#3D7F59">About me</PageHeadline>
        <SectionWrapper customStyle={styles.about}>
          <p className={styles.aboutMeIntroductionText}>{post.aboutMeIntroductionText}</p>
          <div className={`${styles.aboutMeMainImage} ${styles.containerAnimated}`}></div>
        </SectionWrapper>
        {this.renderSkillsWithSectionWrapper()}
        <SectionWrapper>
          <div style={{ textAlign: 'center' }}>
            <span className={`${styles.quoteSymbol} fa fa-quote-left about-quote`}></span>
          </div>
          <p className={styles.quoteText}>
              But Sorry, having come this far I have to disappoint you a little bit. Very anti-pattern-like <a href="https://medium.com/@manpenaloza/self-taught-code-learning-when-you-did-not-hack-the-commodore-64-in-your-childhood-aebfc6c8b389#.u0k8gzstc" target="_blank">I'm not that kind of programmer who hacked the Commodore 64 at a childhood age of about 14.</a> My childhood more was full of dirt of playing soccer, broken bones of skateboarding and acute hearing loss due to play the drums all day long. So NOW AND NOWADAYS I'm here, with a backpack full of motivation, experience and programming knowledge thanks to the last years learning it on my own besides managing product-development processes for digital businesses.
          </p>
          <div className="text-center">
            <span className={`${styles.quoteSymbol} fa fa-quote-right about-quote`}></span>
          </div>
        </SectionWrapper>
        {this.renderFactsWithSectionWrapper()}
        <SectionWrapper customStyle="text-center">
          <Button to="timeline" text="Continue to my timeline"/>
        </SectionWrapper>
      </PageWrapper>
    );
  }
}

AboutPage.propTypes = {
  post: React.PropTypes.object,
  pages: React.PropTypes.array,
};

export default AboutPage
