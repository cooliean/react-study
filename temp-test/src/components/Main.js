require('normalize.css/normalize.css');
require('styles/App.css');

var React = require('react');
var Divider = require("./divider");


var AppComponent = React.createClass({
  render() {
    return (
      <div className="index">
        <Divider></Divider>
      </div>
    );
  }
});

export default AppComponent;
