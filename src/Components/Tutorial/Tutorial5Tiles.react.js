import 'babel-polyfill';

var React = require('react');

import Row from 'react-bootstrap/lib/Row';
import TangramPlay from '../TangramPlay.react';
import examples from './links';

import tiles from '../../Assets/markdown/tiles.md';

var sections = tiles.split('[section]');

export class Tutorial51 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: sections[0] }} />
            <TangramPlay url={examples.vector} />
        </Row>
        )}
}

export class Tutorial52 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: sections[1] }} />
            <TangramPlay url={examples.raster} />
        </Row>
        )}
}
