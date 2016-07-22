import 'babel-polyfill';
import React from 'react';
import { Link } from 'react-router';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Panel from 'react-bootstrap/lib/Panel';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

export default class Main extends React.Component {
  render () {
      require('../Assets/css/bootstrap.css');
      require('../Assets/css/style.scss');

//className='full-height row-content'
//className='full-column-height'
     return (
      <Grid className='grid-container'>
        <Row>
            <Col md={2} className='sidebar'>
                <Row className='sidebar-title'>
                    <div className='sidebar-title-logo'>Mapzen</div>
                </Row>
                <Row className='sidebar-toc'>
                    <ListGroup fill>
                        <Panel collapsible defaultExpanded header="Intro" onClick={() => {this.context.router.push('/intro')}}>
                        </Panel>
                        <Panel collapsible defaultExpanded header="A Basic Map">
                            <ListGroupItem><Link to="/minimum-map/min">A minimum map</Link></ListGroupItem>
                            <ListGroupItem><Link to="/minimum-map/data">Layers and Data Import</Link></ListGroupItem>
                         </Panel>
                         <Panel collapsible defaultExpanded header="Styling">
                             <ListGroupItem><Link to="/styling/lines">Lines</Link></ListGroupItem>
                             <ListGroupItem><Link to="/styling/order">Order</Link></ListGroupItem>
                             <ListGroupItem><Link to="/styling/labels">Labels</Link></ListGroupItem>
                         </Panel>
                         <Panel collapsible defaultExpanded header="Filters" onClick={() => {this.context.router.push('/filters')}}>
                         </Panel>
                         <Panel collapsible defaultExpanded header="Conclusion" onClick={() => {this.context.router.push('/conclusion')}}>
                         </Panel>
                    </ListGroup>
                </Row>
            </Col>
            <Col md={10} className='content'>
                <Row className='menu-bar'>
                    <div className='title'>Tangram Tutorial</div>
                </Row>
                <Row className='content-child'>
                    <Col md={12}>
                        <Grid>
                            {this.props.children}
                        </Grid>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Grid>
    )}
}

Main.contextTypes = {
  router: React.PropTypes.object.isRequired
};

// onClick={() => {this.context.router.push('/minimum-map')}
