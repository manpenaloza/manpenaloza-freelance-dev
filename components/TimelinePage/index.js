import React from 'react';

import PageHeadline from '../PageHeadline';
import PageWrapper from '../PageWrapper';
import FullWidthBgImage from '../FullWidthBgImage';
import SectionWrapper from '../SectionWrapper';
import Button from '../Button';
import LifePeriod from './LifePeriod';
import LifePeriodFlex from './LifePeriodFlex';
import LifeEvent from './LifeEvent';
import { config } from 'config';
import styles from './style.module.css';

class TimelinePage extends React.Component {

  render() {

    return(
      <PageWrapper>
        <PageHeadline color="#7F3D63">Go</PageHeadline>
        <SectionWrapper>
          <div className={styles.timeline}>
            <LifeEvent/>
            <LifePeriod/>
            <LifePeriodFlex/>
            <LifePeriodFlex/>
            <LifeEvent/>
            <LifePeriodFlex/>
            <LifePeriod/>
            <LifePeriod/>
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