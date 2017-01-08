import React from 'react';

import PageHeadline from '../PageHeadline';
import PageWrapper from '../PageWrapper';
import FullWidthBgImage from '../FullWidthBgImage';
import SectionWrapper from '../SectionWrapper';
import Button from '../Button';
import LifePeriod from './LifePeriod';
import LifeEvent from './LifeEvent';
import { config } from 'config';
import styles from './style.module.css';

class TimelinePage extends React.Component {

  render() {

    return(
      <PageWrapper>
        <PageHeadline color="#CB2F28">Go</PageHeadline>
        <SectionWrapper>
          <div className={styles.timeline}>
            <LifeEvent/>
            <LifePeriod/>
            <LifePeriod/>
            <LifeEvent/>
            <LifePeriod/>
          </div>
        </SectionWrapper>
        <SectionWrapper customStyle="text-center">
          <Button to="showroom" text="Visit Showroom"/>
        </SectionWrapper>
      </PageWrapper>
    );
  }
}

export default TimelinePage;