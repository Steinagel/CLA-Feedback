import React, { Component } from 'react';
import { Content } from 'carbon-components-react/es/components/UIShell';
import Feedback from './components/Feedback';
import ClaHeader from './components/Header';

import './app.scss';

class App extends Component {
  render() {
    return (
      <>
        <ClaHeader />
        <Content>
          <Feedback />
        </Content>
      </>
    );
  }
}

export default App;
