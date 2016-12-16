/*
 * THIS [OPTIONAL] FILE EXISTS BECAUSE
 * a way to hook into key application events. Export onRouteUpdate of type function() to be notified whenever React-Router navigates.
 * source: https://github.com/gatsbyjs/gatsby
 */

import ReactGA from 'react-ga'
import {config} from 'config'

ReactGA.initialize(config.googleAnalyticsId);

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};
