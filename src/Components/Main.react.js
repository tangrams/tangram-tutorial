import 'babel-polyfill';
import React from 'react';
import { Link } from 'react-router';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Panel from 'react-bootstrap/lib/Panel';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Image from 'react-bootstrap/lib/Image';

import content from '../App.react';

export default class Main extends React.Component {
  render () {
      require('../Assets/css/bootstrap.css');
      require('../Assets/css/style.scss');

     return (
      <Grid className='grid-container'>
        <Row>
            <Col md={2} className='sidebar'>
                <Row className='sidebar-title'>
                    <Image className='sidebar-title-logo' src={require('../Assets/images/logo.png')} responsive />
                </Row>
                <Row className='sidebar-toc'>
                    <ListGroup fill>
                        {
                            // Iterating through each main section
                            content.map(function(c, i) {
                                // Iterating through each sub section
                                let subsections = c.sections.map(function(s, j) {
                                    return <ListGroupItem key={j}><Link to={s.path}>{s.name}</Link></ListGroupItem>
                                })

                                let mainsection = <Panel collapsible key={i} header={c.title} >
                                                    {subsections}
                                                  </Panel>;

                                return mainsection ;
                            })
                        }
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
