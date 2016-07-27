import 'babel-polyfill';

var React = require('react');

import Row from 'react-bootstrap/lib/Row';
import Image from 'react-bootstrap/lib/Image';
import TangramPlay from '../TangramPlay.react';
import examples from './links';

import tiles from '../../Assets/markdown/tiles.md';

var sections = tiles.split('[section]');

export class Tutorial51 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: sections[0] }} />
            <Image width="60%" src={require('../../Assets/images/oceans.png')} responsive />
            <div dangerouslySetInnerHTML={{ __html: sections[1] }} />
            <Image width="60%" src={require('../../Assets/images/vectortiles.gif')} responsive />
            <div dangerouslySetInnerHTML={{ __html: sections[2] }} />
            <TangramPlay url={examples.vector} />
            <div dangerouslySetInnerHTML={{ __html: sections[3] }} />
            <TangramPlay url={examples.vector2} />
        </Row>
        )}
}

export class Tutorial52 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: sections[4] }} />
            <TangramPlay url={examples.vector3} />
            <div dangerouslySetInnerHTML={{ __html: sections[5] }} />
            <TangramPlay url={examples.vector4} />
            <div dangerouslySetInnerHTML={{ __html: sections[6] }} />
        </Row>
        )}
}

export class Tutorial53 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: sections[7] }} />
            <TangramPlay url={examples.vector5} />
        </Row>
        )}
}

export class Tutorial54 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: sections[8] }} />
            <TangramPlay url={examples.vector6} />
            <div dangerouslySetInnerHTML={{ __html: sections[9] }} />
        </Row>
        )}
}


export class Tutorial58 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: sections[4] }} />
            <TangramPlay url={examples.url1} />
            <TangramPlay url={examples.url2} />
            <div dangerouslySetInnerHTML={{ __html: sections[5] }} />
        </Row>
        )}
}
