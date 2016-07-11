var React = require('react');

import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import TangramPlay from './Components/TangramPlay.react';

import intro from './Markdown/intro.md';
import min from './Markdown/min.md';
import min2 from './Markdown/min2.md';
import min3 from './Markdown/min3.md';
import min4 from './Markdown/min4.md';
import min5 from './Markdown/min5.md';
import filters from './Markdown/filters.md';

import tiles from './Markdown/tiles.md';
import conclusion from './Markdown/conclusion.md';

let tangramplayurl = 'https://precog.mapzen.com/tangrams/tangram-play/tangram-tutorial/?scene=';
let tutorialurl = 'https://tangrams.github.io/tangram-tutorial/tangram-tutorial-files/'
let baseurl = tangramplayurl + tutorialurl;

let examples = {
    min: baseurl + 'min.yaml',
    layers: baseurl + 'layers.yaml',
    layers2: baseurl + 'layers2.yaml' + '&lines=12',
    layers3: baseurl + 'layers3.yaml' + '&lines=13'
}

module.exports = React.createClass({
  render () {
    return (
         <Grid fluid>
            <Row className="show-grid">
                <Col md={2}></Col>
                <Col md={8}>
                    <h1 className='title'>Tangram Tutorial</h1><br></br><br></br>
                    <div dangerouslySetInnerHTML={{ __html: intro }} />
                </Col>
                <Col md={2}></Col>
            </Row>

            <Row className="show-grid">
                <Col md={2}></Col>
                <Col md={8}>
                    <div dangerouslySetInnerHTML={{ __html: min }} />
                    <TangramPlay url={examples.min} />
                    <div dangerouslySetInnerHTML={{ __html: min2 }} />
                    <TangramPlay url={examples.layers} />
                    <div dangerouslySetInnerHTML={{ __html: min3 }} />
                    <TangramPlay url={examples.layers2} />
                    <div dangerouslySetInnerHTML={{ __html: min4 }} />
                    <TangramPlay url={examples.layers3} />
                    <div dangerouslySetInnerHTML={{ __html: min5 }} />
                </Col>
                <Col md={2}></Col>
            </Row>

            <Row className="show-grid">
                <Col md={2}></Col>
                <Col md={8}>
                    <div dangerouslySetInnerHTML={{ __html: filters }} />
                </Col>
                <Col md={2}></Col>
            </Row>

            <Row className="show-grid">
                <Col md={2}></Col>
                <Col md={8}>
                    <div dangerouslySetInnerHTML={{ __html: tiles }} />
                    <div dangerouslySetInnerHTML={{ __html: conclusion }} />
                </Col>
                <Col md={2}></Col>
            </Row>
         </Grid>

        )}
});
