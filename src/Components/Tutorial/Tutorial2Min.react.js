import 'babel-polyfill';

var React = require('react');

import Row from 'react-bootstrap/lib/Row';
import TangramPlay from '../TangramPlay.react';

import min from '../../Markdown/min.md';
import min2 from '../../Markdown/min2.md';
import min3 from '../../Markdown/min3.md';
import min4 from '../../Markdown/min4.md';
import min5 from '../../Markdown/min5.md';
import min6 from '../../Markdown/min5.md';

import examples from './links';

export class Tutorial21 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: min }} />
            <TangramPlay url={examples.min} />
            <div dangerouslySetInnerHTML={{ __html: min2 }} />
        </Row>
        )}
}

export class Tutorial22 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: min3 }} />
            <TangramPlay url={examples.layers} />
            <div dangerouslySetInnerHTML={{ __html: min4 }} />
            <TangramPlay url={examples.layers2} />
            <div dangerouslySetInnerHTML={{ __html: min5 }} />
            <TangramPlay url={examples.layers3} />
            <div dangerouslySetInnerHTML={{ __html: min6 }} />
        </Row>
        )}
}
