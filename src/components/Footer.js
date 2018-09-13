import React from 'react';
//import { Link } from 'react-router-dom';
//import { Switch, Route } from 'react-router-dom'; //import Switch + Route functions:::
import styled from 'styled-components';
import Privacy from './Privacy';
import Return from './Return';
import SocialMedia from './SocialMedia';
import './footer.css';

const FooterCSS = styled.footer`
  height: 20rem;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterCSS>
      <footer>
        <div class="footer__grid">
          <div class="col col1">
            <Return />
          </div>
          <div class="col col2">
            <Privacy />
          </div>
          <div class="col col3">
            <SocialMedia />
          </div>
        </div>

        {/* external links 
			<ul class="footer__links">
				<li><Link to="/privacy" component={Privacy}>Privacy Policy</Link></li>
				<li><Link to="#">Return Policy</Link></li>
				<li><Link to="#">Contact us</Link></li>
			</ul> */}
      </footer>
    </FooterCSS>
  );
};
export default Footer;
