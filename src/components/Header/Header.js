import React from 'react';
import {
  Header,
  HeaderName,
  SkipToContent,
} from 'carbon-components-react/es/components/UIShell';

import './Header.scss';

class ClaHeader extends React.Component {
  render() {
    return (
      <Header aria-label="CLA Feedback">
        <SkipToContent />
        <img
          className="header__image"
          src={require('../../assets/logo-nav.png')}
          alt="CLA icon"
        />
        <HeaderName href="/" prefix="CLA">
          Feedback :D
        </HeaderName>
      </Header>
    );
  }
}

export default ClaHeader;
