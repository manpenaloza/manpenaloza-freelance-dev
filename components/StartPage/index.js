import React from 'react';

import styles from './style.module.css';
import PageHeadline from '../PageHeadline';
import PageWrapper from '../PageWrapper';
import FullWidthBgImage from '../FullWidthBgImage';
import SectionWrapper from '../SectionWrapper';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';


class StartPage extends React.Component {

  render() {
    const {route} = this.props;
    const post = route.page.data;
    const bgImage = require('./images/teaser-image.jpg');

    return (
      <FullWidthBgImage image={bgImage} padding={20}>
        <PageWrapper>
          <SectionWrapper customStyle="text-center">
            <h1 style={{
              fontFamily: 'Oleo Script',
              textAlign: "center",
              fontSize: 42,
              marginVertical: 15,
              lineHeight: '2.7rem',
            }}>Hello! I'm Manuel.</h1>
          </SectionWrapper>
          <SectionWrapper customStyle="text-center">
            <p>I develop websites/webassets and apps using React and React-Native.</p>
          </SectionWrapper>
          <SectionWrapper customStyle="text-center">
            <p><Link to={ prefixLink(`/contact/`) }>Get in touch</Link> if you want me to be your freelance developer.</p>
          </SectionWrapper>
        </PageWrapper>
      </FullWidthBgImage>
    )
  }
};

export default StartPage;