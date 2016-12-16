import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import './style.css'

// TODO: REFACTOR STYLING/CLASSNAMES TO USE CSS MODULES
class SiteNavi extends React.Component {

  navIconImagePaths = {
    home: "font-awesome_4-7-0_sign-in_120_0_ffffff_none.png",
    timeline: "font-awesome_4-7-0_hourglass-half_120_0_ffffff_none.png",
    about: "font-awesome_4-7-0_user-o_120_0_ffffff_none.png",
    showroom: "font-awesome_4-7-0_file-code-o_120_0_ffffff_none.png",
    contact: "font-awesome_4-7-0_compress_120_0_ffffff_none.png",
  };

  menuItemImage(menuPoint) {
    let toLowercaseMenuPointFirstWord = menuPoint.split(' ')[0].trim().toLowerCase();
    let img = `./navFontAwesomeImages/${this.navIconImagePaths[toLowercaseMenuPointFirstWord]}`;
    return (
      <img className="navIconImage" src={require(img)} />
    )
  }

  componentDidMount() {
    // remove navImageSqueeze effect after 2 sec in order to not conflict with image bump effect on mouse hover during session
    // setTimeout(() => this.mainImg.classList.remove('navImageSqueeze')), 2000)
}

  renderMenu() {
    let { location } = this.props;
    return config.menuPoints.map((menuPoint, idx) => {
      return (
        <li key={idx} className={ location.pathname === prefixLink(`/${menuPoint}/`) ? "menuItem menuItemActive" : "menuItem" }>
          <Link to={ prefixLink(`/${menuPoint}/`) } className="menuItemLink">
            <span className="navIcon">
              {this.menuItemImage(menuPoint)}
            </span>
            <span className="menuItemLinkName">{menuPoint}</span>
          </Link>
        </li>
      )
    });
  }

  render() {
        const { title } = this.props;
        return (
              <div className="sidebarNav">
                <div id="avatar">
                  <img className="navImage navImageSqueeze"
                       src={require('./manuel_penaloza.jpg')}
                       alt="Manuel Penaloza Bild Porträt"
                       ref={ c => this.mainImg = c }
                  />
                  <div className="avatarName">{title}</div>
                </div>
                <div className="sidebarNavContainer">
                  <ul className="menu">
                    {this.renderMenu()}
                  </ul>
                </div>
              </div>
            );
    }
}

SiteNavi.propTypes = {
    location: React.PropTypes.object,
};

export default SiteNavi;
