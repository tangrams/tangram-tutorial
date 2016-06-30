var React = require('react');

var Header = require('./Components/Header');
var Content = require('./Components/Content');
var Favicon = require('react-favicon');

import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';


module.exports = React.createClass({
  displayName: 'App',

  render: function () {
    return (
         <Grid fluid>
            <Row className="show-grid">
                <Col md={2}></Col>
                <Col md={8} className='center title' >Tangram Tutorial</Col>
                <Col md={2}></Col>
            </Row>
            <Row className="show-grid">
                <Col md={2}></Col>
                <Col md={8} className='center'>
                    <iframe width="100%" height="700px" src="https://precog.mapzen.com/tangrams/tangram-play/tangram-tutorial/?scene=https%3A%2F%2Fcdn.rawgit.com%2Ftangrams%2Ftangram-sandbox%2F1d60a85ed384150d8a98c26fa30f5a4123c1224f%2Fstyles%2Fgrain-area.yaml#4/-7.28/-77.21/tutorial" frameborder="0" allowfullscreen>
                    </iframe>
                </Col>
                <Col md={2}></Col>
            </Row>
         </Grid>

        )}

});
