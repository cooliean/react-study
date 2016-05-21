/**
 *
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import ReactDom from 'react-dom';


class Index2 extends Component {
    render() {
        return (
            <div>I am Index2. AweSome</div>
        );
    }
}

ReactDom.render(<Index2 />, document.getElementById("app"));
