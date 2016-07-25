import 'babel-polyfill';

var React = require('react');

import Row from 'react-bootstrap/lib/Row';
import TangramPlay from '../TangramPlay.react';
import examples from './links';

import filters from '../../Assets/markdown/filters.md';

var sections = filters.split('[section]');

export class Tutorial41 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: sections[0] }} />
            <TangramPlay url={examples.filters} />
        </Row>
        )}
}

export class Tutorial42 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: sections[1] }} />
            <TangramPlay url={examples.filters2} />
        </Row>
        )}
}

export class Tutorial43 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: sections[2] }} />
            <TangramPlay url={examples.filters3} />
        </Row>
        )}
}
