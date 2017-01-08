import React from 'react'
import DocumentTitle from 'react-document-title'
import AboutPage from '../components/AboutPage'
import ShowRoomPage from '../components/ShowRoomPage'
import SitePost from '../components/SitePost'
import SitePage from '../components/SitePage'
import ContactPage from '../components/ContactPage'
import TimelinePage from '../components/TimelinePage'
import Lounge from '../components/Lounge'
import StartPage from '../components/StartPage'
import { config } from 'config'

class MarkdownWrapper extends React.Component {
    render() {
        const { route } = this.props
        const post = route.page.data
        let layout, template

        layout = post.layout

      /*
       * SitePost and SitePage options from original template
       * Those can be deleted carefully once project is finisched
       * Now in development good for fallback options
       */

        if (layout == 'start') {
          template = <StartPage {...this.props}/>
        } else if (layout == 'about') {
          template = <AboutPage {...this.props}/>
        } else if (layout == 'showroom') {
          template = <ShowRoomPage {...this.props}/>
        } else if (layout == 'contact') {
          template = <ContactPage {...this.props}/>
        } else if (layout == 'timeline') {
          template = <TimelinePage {...this.props}/>
        } else if (layout == 'lounge') {
          template = <Lounge {...this.props}/>
        } else if (layout != 'page') {
          template = <SitePost {...this.props}/>
        } else if (layout != 'post') {
          template = <SitePage {...this.props}/>
        };

        return (
            <DocumentTitle title={ `${post.title} - ${config.siteTitle}` }>
              { template }
            </DocumentTitle>
        );
    }
}

MarkdownWrapper.propTypes = {
    route: React.PropTypes.object,
}

export default MarkdownWrapper
