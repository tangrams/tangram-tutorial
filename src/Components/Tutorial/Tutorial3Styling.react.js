import 'babel-polyfill';

var React = require('react');

import Row from 'react-bootstrap/lib/Row';
import TangramPlay from '../TangramPlay.react';
import examples from './links';

import styling from '../../Assets/markdown/styling.md';
var sections = styling.split('[section]');

export class Tutorial31 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: sections[0] }} />
            <TangramPlay url={examples.styling} />
        </Row>
        )}
}

export class Tutorial32 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: sections[1] }} />
            <TangramPlay url={examples.styling2} />
        </Row>
        )}
}

export class Tutorial33 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: sections[2] }} />
            <TangramPlay url={examples.styling3} />
        </Row>
        )}
}
