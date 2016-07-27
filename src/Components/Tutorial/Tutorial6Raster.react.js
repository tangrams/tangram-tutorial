import 'babel-polyfill';

var React = require('react');

import Row from 'react-bootstrap/lib/Row';
import Image from 'react-bootstrap/lib/Image';
import TangramPlay from '../TangramPlay.react';
import examples from './links';

import raster from '../../Assets/markdown/raster.md';

var sections = raster.split('[section]');

export class Tutorial61 extends React.Component {
  render () {
    return (
        <Row className="show-grid">
            <div dangerouslySetInnerHTML={{ __html: sections[0] }} />
            <TangramPlay url={examples.raster} />
            <div dangerouslySetInnerHTML={{ __html: sections[1] }} />
        </Row>
        )}
}
