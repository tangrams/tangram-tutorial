import 'babel-polyfill';

var React = require('react');

import Row from 'react-bootstrap/lib/Row';
import TangramPlay from '../TangramPlay.react';

import styling from '../../Markdown/styling.md';
import styling2 from '../../Markdown/styling2.md';

import examples from './links';

export default class Tutorial3 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: styling }} />
            <TangramPlay url={examples.styling} />
            <div dangerouslySetInnerHTML={{ __html: styling2 }} />
            <TangramPlay url={examples.styling2} />
        </Row>
        )}
}
