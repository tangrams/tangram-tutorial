import 'babel-polyfill';

var React = require('react');

import Row from 'react-bootstrap/lib/Row';
import TangramPlay from '../TangramPlay.react';
import Image from 'react-bootstrap/lib/Image';
import examples from './links';

import min from '../../Assets/markdown/min.md';

var sections = min.split('[section]');

export class Tutorial21 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: sections[0] }} />
            <Image width="100%" src={require('../../Assets/images/playcomment.png')} responsive />
            <div dangerouslySetInnerHTML={{ __html: sections[1] }}/ >
            <TangramPlay url={examples.min} />
            <div dangerouslySetInnerHTML={{ __html: sections[1] }} />
        </Row>
        )}
}

export class Tutorial22 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: sections[2] }} />
            <TangramPlay url={examples.layers} />
            <div dangerouslySetInnerHTML={{ __html: sections[3] }} />
            <TangramPlay url={examples.layers2} />
            <div dangerouslySetInnerHTML={{ __html: sections[4] }} />
            <TangramPlay url={examples.layers3} />
            <div dangerouslySetInnerHTML={{ __html: sections[5] }} />
        </Row>
        )}
}
