import React from 'react';

import PageHeadline from '../PageHeadline';
import PageWrapper from '../PageWrapper';
import FullWidthBgImage from '../FullWidthBgImage';
import SectionWrapper from '../SectionWrapper';
import LifePeriod from './LifePeriod';
import { config } from 'config';
import styles from './style.module.css';

class TimelinePage extends React.Component {

  renderTimeline() {

  }

  render() {

    return(
      <PageWrapper>
        <PageHeadline color="#7F3D63">Go</PageHeadline>
        <div className={styles.timeline}>
          <LifePeriod/>
          <LifePeriod/>
          <LifePeriod/>
          <LifePeriod/>
          <LifePeriod/>
          <LifePeriod/>
        </div>
      </PageWrapper>

    );
  }
}

export default TimelinePage;