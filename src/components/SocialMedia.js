import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

const textContainer = styled.div`
  margin: 1rem;
  padding: 0;
`;

const SocialMedia = () => {
  return (
    <textContainer className="footerCol">
      <h3>SocialMedia: #rocknbox</h3>
      <ul class="socialMedia">
        <li>
          <SocialIcon
            url="http://facebook.com/rock-n-box"
            color="#efefef"
            style={{ height: 25, width: 25 }}
          />
          <p>Follow us on Facebook!</p>
        </li>
        <li>
          <SocialIcon
            url="http://twitter.com/rock-n-box"
            color="#efefef"
            style={{ height: 25, width: 25 }}
          />
          <p>Send us a Tweet!</p>
        </li>
        <li>
          <SocialIcon
            url="http://instagram.com/rock-n-box"
            color="#efefef"
            style={{ height: 25, width: 25 }}
          />
          <p>Share your collection with us!</p>
        </li>
      </ul>
    </textContainer>
  );
};

export default SocialMedia;
