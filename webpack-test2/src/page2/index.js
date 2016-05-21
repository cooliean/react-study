require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        page2333222
      </div>
    );
  }
}
ReactDOM.render(<AppComponent />, document.getElementById('app'));

