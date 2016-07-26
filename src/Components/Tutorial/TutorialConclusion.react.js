import 'babel-polyfill';

var React = require('react');

import Row from 'react-bootstrap/lib/Row';
import Image from 'react-bootstrap/lib/Image';
import TangramPlay from '../TangramPlay.react';

import examples from './links';

import conclusion from '../../Assets/markdown/conclusion.md';
var sections = conclusion.split('[section]');

export default class Tutorial4 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: sections[0] }} />
            <Row className="image-row">
                <Image width="40%" src={require('../../Assets/images/js.png')} responsive />
                <Image width="40%" src={require('../../Assets/images/es.png')} responsive />
            </Row>
            <div dangerouslySetInnerHTML={{ __html: sections[1] }} />
            <Image width="70%" src={require('../../Assets/images/tangramplay.png')} responsive />
        </Row>
        )}
}
