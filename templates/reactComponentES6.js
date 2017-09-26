/* ES6 Syntax */

var ES6 = 
`import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'ux-react-styleguide';


[import-css-file]

class [comp] extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(props){

        const defaultProps = {

        }

        return (
            <MuiThemeProvider>
                <div id=[comp] [create-css-class]>
                    <h1>[comp]</h1>
                </div>
            </MuiThemeProvider>
        )
    }
}

[comp].propTypes = {

};

export default [comp]`

module.exports = ES6
