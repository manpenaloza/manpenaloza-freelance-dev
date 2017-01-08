import React from 'react';

import styles from './style.module.css';
import PageHeadline from '../PageHeadline';
import PageWrapper from '../PageWrapper';
import FullWidthBgImage from '../FullWidthBgImage';
import SectionWrapper from '../SectionWrapper';
import { config } from 'config';


class ContactPage extends React.Component {

  render() {
    const {route} = this.props;
    const post = route.page.data;
    const bgImage = require('./images/contatme-bg.jpg')
    return (
      <FullWidthBgImage image={bgImage} padding={20}>
        <PageWrapper>
          <PageHeadline color="#fff">{post.headline}</PageHeadline>
          <SectionWrapper customStyle="text-center">
            <p className={styles.contactInfo}>I am available for freelance work.</p>
            <a className={styles.messageMe} href="mailto:manuel.penaloza@gmx.at">Message me <span className="fa fa-envelope-o"></span></a>
            <p className={styles.contactInfo}>Or find me here.</p>
            <a href={config.twitterProfile} className={styles.socialIconLink}><span className={`fa fa-twitter ${styles.socialIcon}`}></span></a>
            <a href={config.linkedinProfile} className={styles.socialIconLink}><span className={`fa fa-linkedin ${styles.socialIcon}`}></span></a>
          </SectionWrapper>
        </PageWrapper>
      </FullWidthBgImage>
    )
  }
};

export default ContactPage;