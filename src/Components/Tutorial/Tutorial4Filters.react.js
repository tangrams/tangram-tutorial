import 'babel-polyfill';

var React = require('react');

import Row from 'react-bootstrap/lib/Row';
import TangramPlay from '../TangramPlay.react';
import examples from './links';

import filters from '../../Assets/markdown/filters.md';

export default class Tutorial4 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: filters }} />
            <TangramPlay url={examples.filters} />
        </Row>
        )}
}
