import 'babel-polyfill';
import React from 'react';
import {browserHistory} from 'react-router';
import { Link } from 'react-router';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Panel from 'react-bootstrap/lib/Panel';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Image from 'react-bootstrap/lib/Image';

import content from './content';

export default class Main extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            activeKey: '0'
        };

        this.handleSelect = this.handleSelect.bind(this);
        this.onClickPanel = this.onClickPanel.bind(this);
    }

    handleSelect (activeKey) {
        this.setState({ activeKey });
    }

    findSectionBasedOnPath (path) {
        let i = 0;

        for (let c of content) {
            let sections = c.sections;

            for (let s of sections) {
                if (s.path === path) {
                    return i.toString(); // Have to convert to a string in order to compare to the active panel key activeKey
                }
            }
            i = i + 1;
        }
    }

    onClickPanel (i, e) {
        let c = content[i];
        let page = c.sections[0].path; // Get the first page of a section
        page = '#' + page;
        window.location = page;
    }

    onClickNextPage (i) {
        console.log(i);
    }

    render () {
        require('../Assets/css/bootstrap.css');
        require('../Assets/css/mapzen/styleguide.scss');
        require('../Assets/css/style.scss');

        let activeSection = this.findSectionBasedOnPath(this.props.location.pathname); // This is a number
        let activeKey = this.state.activeKey; // This is a string

        console.log(activeSection, activeKey);

        if (activeSection !== activeKey) {
            activeKey = activeSection;
        }

        return (
            <Grid className='grid-container'>
            <Row>
                <Col sm={2} md={2} className='sidebar'>
                    <Row className='sidebar-title'>
                        <div className='sidebar-image-container'>
                            <Image className='sidebar-title-logo' src={require('../Assets/images/logo.png')} responsive/>
                        </div>
                    </Row>
                    <Row className='sidebar-toc'>
                        <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
                            {
                                // Iterating through each main section
                                content.map(function (c, i) {
                                    // Iterating through each sub section
                                    let subsections = c.sections.map((s, j) => {
                                        let isActive = this.context.router.isActive(s.path);
                                        let className = isActive ? 'background' : '';

                                        return (
                                            <ListGroupItem key={j * i} className={className}>
                                                <Link to={{ pathname: s.path }} >{s.name}</Link>
                                            </ListGroupItem>
                                        );
                                    });

                                    let classNamePanel = (this.state.activeKey === i.toString()) ? 'background-panel' : '';
                                    let mainsection = <Panel collapsible key={i} eventKey={i.toString()} header={c.title} className={classNamePanel} onEntering={this.onClickPanel.bind(this, i)}>
                                                            {subsections}
                                                      </Panel>;

                                    return mainsection;
                                }, this)
                            }
                        </PanelGroup>
                    </Row>
                </Col>
                <Col sm={10} md={10} className='content'>
                    <Row className='menu-bar'>
                        <h1 className='title'>Tangram Tutorial</h1>
                    </Row>
                    <Row className='content-child documentation-content'>
                        <Col md={12}>
                            <Grid>
                                {this.props.children}
                            </Grid>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </Grid>
        );
    }
}

Main.contextTypes = {
    router: React.PropTypes.object.isRequired
};

/**
 * Prop validation required by our linter
 */
Main.propTypes = {
    children: React.PropTypes.object
};
