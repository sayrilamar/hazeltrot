/* ES6 Syntax */

var ES6 = 
`import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
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
            <div [create-css-class]>
                <h1>[comp]</h1>
            </div>
        )
    }
}

[comp].propTypes = {

};

export default [comp]`

module.exports = ES6