/* ES6 Syntax */

var ES6 = 
`import React, { Component } from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
// eslint-disable-next-line
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// eslint-disable-next-line
import 'react-bootstrap';
// eslint-disable-next-line
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// eslint-disable-next-line
import 'ux-react-styleguide';


[import-css-file]

class [comp] extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(props){
        // eslint-disable-next-line
        const defaultProps = {

        }

        return (
            <MuiThemeProvider>
                <div [create-css-class]>
                    <h1>[comp]</h1>
                </div>
            </MuiThemeProvider>
        )
    }
}
// eslint-disable-next-line
[comp].propTypes = {

};

export default [comp]`

module.exports = ES6
