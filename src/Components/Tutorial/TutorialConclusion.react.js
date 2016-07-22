import 'babel-polyfill';

var React = require('react');

import Row from 'react-bootstrap/lib/Row';
import TangramPlay from '../TangramPlay.react';

import tiles from '../../Assets/markdown/tiles.md';
import conclusion from '../../Assets/markdown/conclusion.md';

import examples from './links';

export default class Tutorial4 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: tiles }} />
            <div dangerouslySetInnerHTML={{ __html: conclusion }} />
        </Row>
        )}
}
