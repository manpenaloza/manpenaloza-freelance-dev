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



const TimelinePage = (props) => {
  return(
    <PageWrapper>
      <PageHeadline color="#CB2F28">Timeline</PageHeadline>
      <SectionWrapper>
        <div className={styles.timeline}>
          <LifePeriod 
            date="2017"
            title="Contractor Amazeelabs (CH)"
            description="Luckily the show goes on. My freelance work for Amazeelabs, a company with its headquarters in Capetown and an office in the US, goes on. I started to work more intense with GraphQL and Flow to hit the requirement of typed Javascript."
            tags={['React', 'GraphQL', 'Flow', 'Redux', 'Flexbox', 'Styled-Components', 'Create-React-App', 'NodeJS', 'Git']}
          />
          <LifePeriod 
            date="2016"
            title="Contractor Amazeelabs (CH)"
            description="How cool was that! Suddenly part of highly talented crowd of developers squeezing out maximum effectivens and efficiency of bleeding-edge technology. I gained tons of knowledge about developing big-scale applications."
            tags={['React', 'Redux', 'Flexbox', 'Styled-Components', 'Create-React-App', 'Git']}
          />
          <LifePeriod 
            date="2016"
            title="React Native Development and App Release"
            description="In 2015 I started to play around with React Native. In 2016, when I considered the technology to be market-ready, I decided to make and release a live-showcase by developing an app that shows current beer offers. Finally I helped clients to get started with React Native development."
            tags={['React Native', 'Flexbox', 'Axios', 'Redux', 'Redux-Saga', 'Git', 'Google Analytics for Apps', 'Google Play Dev Console']}
          />
          <LifePeriod 
            date="2016"
            title="Messenger Chatbot Development" 
            description="How cool was that! Suddenly part of highly talented crowd of developers squeezing out maximum effectivens and efficiency of bleeding-edge technology. I gained tons of knowledge about developing big-scale applications."
            tags={['Facebook Messenger API', 'Facebook Developers Console', 'NodeJS', 'Promisses']}
          />
          <LifeEvent date="08/2015" title="Self-employed Freelance Developer 🎉"/>
          <LifePeriod 
            date="2014-****"
            title="Javascript everywhere" 
            description="I realized more and more that I need to use better and advanced Javascript in order to be able to build fantastic web and mobile applications. At that point I decided to go the Javascript way that enabled me to use one language for both, the frontend and the backend."
            tags={['Javascript', 'NodeJS', 'Angular', 'React']}
          />
          <LifePeriod 
            date="2010-2013"
            title="From Wordpress to Laravel"
            description="I discovered the fascination of programming scaling and fun-to-use web applications primarily using PHP and MySQL. It all started out with Wordpress development and ended up digging into frameworks like Laravel and using database languages."
            tags={['PHP', 'MySQL', 'Laravel', 'Composer', 'jQuery', 'CSS', 'HTML', 'Apache', 'Git', 'Gulp', 'SASS', 'LESS']}
          />
          <LifeEvent date="12/2009" title="Job-Start: Product Development @ Styria Media Group"/>
          <LifePeriod 
            date="2000-2007"
            title="Know what the user wants and expects"
            description="As a developer I am absolutely thankful for having discovered the business-side of market-related activeness and psychology. In the end being a developer is a business. A business of building awesome stuff that has customer value for other people and organizations."
            tags={['Project Managment', 'User Experience', 'Online Marketing', 'Business Analytics', 'Statistics']}
          />
          <LifeEvent date="09/2007" title=" Marketing studies in Graz (AT)"/>
          <LifePeriod 
            date="2002-2007"
            title="Playing drums while touring Europe"
            description="So it was about playing drums like crazy and touring Europe presenting our notion of good punk rock music. And again. And again."
            tags={['Playing drums', 'Social Media', 'Public Relations', 'Website Management', 'Basic HTML', 'Basic CSS', 'New Media']}
          />
          <LifeEvent date="08/2002" title="Own band got signed with music-management contract"/>
          <LifePeriod 
            date="2000-2007"
            title="Music tour booker and artist managment"
            description="My youth was full of playing drums and punk rock music. Luckily cool organizations and people in music business gave me the chance to make first professional steps to do artist managment and tour booking."
            tags={['DIY website tools', 'Social Media', 'Artist Marketing', 'Tour management', 'Business relations']}
          />
        </div>
      </SectionWrapper>
      <SectionWrapper customStyle="text-center">
        <Button to="showroom" text="Visit Showroom"/>
      </SectionWrapper>
    </PageWrapper>
  );
}

export default TimelinePage;