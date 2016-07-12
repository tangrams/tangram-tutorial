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
     return (
      <Grid className='test'>
        <Row className='row-menu'>
            <Col md={2}>
            </Col>
            <Col md={10}>
                <h1 className='title'>Tangram Tutorial</h1><br></br><br></br>
            </Col>
        </Row>

        <Row className='full-height row-content'>
            <Col md={2} className='full-column-height'>
                <ListGroup fill>
                    <Panel bsStyle="primary" collapsible defaultExpanded header="Intro" onClick={() => {this.context.router.push('/intro')}}>
                    </Panel>
                    <Panel bsStyle="primary" collapsible defaultExpanded header="A Basic Map">
                        <ListGroupItem><Link to="/minimum-map/min">A minimum map</Link></ListGroupItem>
                        <ListGroupItem><Link to="/minimum-map/data">Data interpretation and styling</Link></ListGroupItem>
                     </Panel>
                     <Panel bsStyle="primary" collapsible defaultExpanded header="Styling" onClick={() => {this.context.router.push('/styling')}}>
                     </Panel>
                     <Panel bsStyle="primary" collapsible defaultExpanded header="Filters" onClick={() => {this.context.router.push('/filters')}}>
                     </Panel>
                     <Panel bsStyle="primary" collapsible defaultExpanded header="Conclusion" onClick={() => {this.context.router.push('/conclusion')}}>
                     </Panel>
                </ListGroup>
            </Col>
            <Col md={10} className='style-column'>
                <Grid className='content'>
                    {this.props.children}
                </Grid>
            </Col>
        </Row>
    </Grid>
    )}
}

Main.contextTypes = {
  router: React.PropTypes.object.isRequired
};

// onClick={() => {this.context.router.push('/minimum-map')}
