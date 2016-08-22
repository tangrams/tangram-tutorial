import 'babel-polyfill';
import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Image from 'react-bootstrap/lib/Image';
import Section from '../UI/Section.react';

import intro from '../../Assets/markdown/intro.md';

var sections = intro.split('[section]');

export class Tutorial1 extends React.Component {
  render () {
    return (
            <Section prev={this.props.route.prev} next={this.props.route.next}>
                <div dangerouslySetInnerHTML={{ __html: sections[0] }} />
                <Image width="60%" src={require('../../Assets/images/min.png')} responsive />
                <div dangerouslySetInnerHTML={{ __html: sections[1] }} />
            </Section>
        )}
}
