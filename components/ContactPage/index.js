import React from 'react';
import styles from './style.module.css';
import PageHeadline from '../PageHeadline';
import PageWrapper from '../PageWrapper';
import FullWidthBgImage from '../FullWidthBgImage';
import SectionWrapper from '../SectionWrapper';

class ContactPage extends React.Component {

  render() {
    const {route} = this.props;
    const post = route.page.data;
    const bgImage = require('./images/contatme-bg.jpg')
    console.log(bgImage)
    return (
      <FullWidthBgImage image={bgImage} padding={20}>
        <PageWrapper>
          <PageHeadline color="#fff">{post.headline}</PageHeadline>
          <SectionWrapper>
            
          </SectionWrapper>
        </PageWrapper>
      </FullWidthBgImage>
    )
  }
};

export default ContactPage;