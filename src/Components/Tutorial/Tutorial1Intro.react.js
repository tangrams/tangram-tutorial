import 'babel-polyfill';
import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Image from 'react-bootstrap/lib/Image';
import Section from '../UI/Section.react';

import intro from '../../Assets/markdown/intro.md';

var test = require('../../Assets/images/playcomment.png');

var sections = intro.split('[section]');

import parseJSX from './helper';
console.log("what is going on");
let jsx = parseJSX(intro);

export class Tutorial1 extends React.Component {
    render () {
        return (
            <Section prev={this.props.route.prev} next={this.props.route.next}>
                {jsx}
            </Section>
        );
    }
}
