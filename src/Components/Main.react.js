import 'babel-polyfill';
import React from 'react';
import { Link } from 'react-router';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Panel from 'react-bootstrap/lib/Panel';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Image from 'react-bootstrap/lib/Image';

import content from '../App.react';

// Implement active classname here http://stackoverflow.com/questions/34418254/is-there-a-way-using-react-router-to-set-an-active-class-on-the-wrapper-to-the-l

export default class Main extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            activeKey: '0'
        };

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(activeKey) {
       this.setState({ activeKey });
     }

  render () {
      require('../Assets/css/bootstrap.css');
      require('../Assets/css/styleguide.scss');
      require('../Assets/css/style.scss');

     return (
      <Grid className='grid-container'>
        <Row>
            <Col sm={2} md={2} className='sidebar'>
                <Row className='sidebar-title'>
                    <Image className='sidebar-title-logo' src={require('../Assets/images/logo.png')} responsive />
                </Row>
                <Row className='sidebar-toc'>
                    <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
                        {
                            // Iterating through each main section
                            content.map(function(c, i) {

                                // Iterating through each sub section
                                let subsections = c.sections.map((s, j) => {
                                    let isActive = this.context.router.isActive(s.path);
                                    let className = isActive ? 'background' : '';

                                    return <ListGroupItem key={j*i} className={className}>
                                                <Link to={{ pathname: s.path }} >{s.name}</Link>
                                           </ListGroupItem>
                                });

                                let mainsection = <Panel collapsible key={i} eventKey={i.toString()} header={c.title} >
                                                    {subsections}
                                                  </Panel>;

                                return mainsection ;
                            }, this)
                        }
                    </PanelGroup>
                </Row>
            </Col>
            <Col sm={10} md={10} className='content'>
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
}
