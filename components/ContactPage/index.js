import React from 'react';
import styles from './style.module.css';
import PageHeadline from '../PageHeadline';
import PageWrapper from '../PageWrapper';
import FullWidthBgImage from '../FullWidthBgImage';
import SectionWrapper from '../SectionWrapper';


class ContactPage extends React.Component {

  render() {
    console.log(styles);
    const {route} = this.props;
    const post = route.page.data;
    const bgImage = require('./images/contatme-bg.jpg')
    return (
      <FullWidthBgImage image={bgImage} padding={20}>
        <PageWrapper>
          <PageHeadline color="#fff">{post.headline}</PageHeadline>
          <SectionWrapper customStyle="text-center">
            <p className={styles.contactInfo}>I am availble for freelance work</p>
            <a className={styles.messageMe} href="mailto:manuel.penaloza@gmx.at">Message me</a>
            <p className={styles.contactInfo}>Or find me here.</p>
            <a href="#" className={styles.socialIcon}><span className="fa fa-twitter"></span></a>
            <a href="#" className={styles.socialIcon}><span className="fa fa-linkedin"></span></a>
          </SectionWrapper>
        </PageWrapper>
      </FullWidthBgImage>
    )
  }
};

export default ContactPage;