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
            <img width="60%" src={require('../../Assets/images/vectortiles.gif')} />
            <div dangerouslySetInnerHTML={{ __html: sections[1] }} />
            <TangramPlay url={examples.vector} />
            <div dangerouslySetInnerHTML={{ __html: sections[2] }} />
            <TangramPlay url={examples.vector2} />
        </Row>
        )}
}

export class Tutorial52 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: sections[3] }} />
            <TangramPlay url={examples.vector3} />
            <TangramPlay url={examples.vector4} />
            <div dangerouslySetInnerHTML={{ __html: sections[4] }} />
        </Row>
        )}
}


export class Tutorial53 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: sections[1] }} />
            <TangramPlay url={examples.raster} />
        </Row>
        )}
}
