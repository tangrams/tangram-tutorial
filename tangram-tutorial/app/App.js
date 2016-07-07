var React = require('react');

import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import TangramPlay from './Components/TangramPlay.react';

import intro from './Markdown/intro.md';
import min from './Markdown/min.md';
import min2 from './Markdown/min2.md';
import tiles from './Markdown/tiles.md';
import conclusion from './Markdown/conclusion.md';

let baseurl = 'https://precog.mapzen.com/tangrams/tangram-play/tangram-tutorial/?scene=';

let examples = {
    first: baseurl + 'https%3A%2F%2Fcdn.rawgit.com%2Ftangrams%2Ftangram-sandbox%2F1d60a85ed384150d8a98c26fa30f5a4123c1224f%2Fstyles%2Fgrain-area.yaml#4/-7.28/-77.21/tutorial',
    min: baseurl + 'https://tangrams.github.io/tangram-tutorial/tangram-tutorial-scene-files/min.yaml'
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
