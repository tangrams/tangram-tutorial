import 'babel-polyfill';
import React from 'react';
import { Link } from 'react-router';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Panel from 'react-bootstrap/lib/Panel';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Image from 'react-bootstrap/lib/Image';

import content from './content';

// React class that contains our main page elements, a sidebar and main tutorial content
export default class Main extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            activeKey: ''
        };

        this.handleSelect = this.handleSelect.bind(this);
        this.onClickPanel = this.onClickPanel.bind(this);
    }

    handleSelect (activeKey) {
        this.setState({ activeKey });
    }

    // Helper function to find a section mame based on the path of the page
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

    // If user clicks on 'Next section' and navigates to another major section, we need to open the panel manually by setting a key to indicate it is active
    componentWillReceiveProps (nextProps) {
        let activeSection = this.findSectionBasedOnPath(nextProps.location.pathname); // Returns a string because this.state.activeKey is a string
        let activeKey = this.state.activeKey;

        if (activeSection !== activeKey) {
            this.setState({ activeKey: activeSection });
        }
    }

    // Every time we click on a main panel name, we'd like to render the first page in the section by default
    onClickPanel (i, e) {
        let activeSection = this.findSectionBasedOnPath(this.props.location.pathname);
        let activeKey = i;

        if (activeSection !== activeKey.toString()) {
            let c = content[i];
            let page = c.sections[0].path; // Get the first page of a section
            page = '#' + page;
            window.location = page;
        }
    }

    render () {
        require('../Assets/css/bootstrap.css');
        require('../Assets/css/mapzen/styleguide.scss');
        require('../Assets/css/style.scss');

        return (
            <Grid className='grid-container'>
            <Row>
                {/* Sidebar is set to take up 2 bootstrap rows */}
                <Col sm={2} md={2} className='sidebar'>
                    {/* Sidebar logo */}
                    <Row className='sidebar-title'>
                        <div className='sidebar-image-container'>
                            <Link to='/' >
                                <Image className='sidebar-title-logo' src={require('../Assets/images/logo.png')} responsive/>
                            </Link>
                        </div>
                    </Row>
                    {/* Sidebar table of contents */}
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
                                    let mainsection = <Panel collapsible key={i} eventKey={i.toString()} header={c.title} className={classNamePanel} onClick={this.onClickPanel.bind(this, i)}>
                                                            {subsections}
                                                      </Panel>;

                                    return mainsection;
                                }, this)
                            }
                        </PanelGroup>
                    </Row>
                </Col>
                {/* Tutorial content section is set to take up 10 bootstrap columns */}
                <Col sm={10} md={10} className='content'>
                    {/* Main title */}
                    <Row className='menu-bar'>
                        <Col xs={10} xsOffset={1}>
                            <h1 className='title'>Tangram Tutorial</h1>
                        </Col>
                    </Row>
                    {/* Tutorial content */}
                    <Row className='content-child documentation-content'>
                        <Grid>
                            {this.props.children}
                        </Grid>
                    </Row>
                </Col>
            </Row>
            </Grid>
        );
    }
}

// Router allows us to query whether a particular path is active through this.context.router.isActive(s.path);
Main.contextTypes = {
    router: React.PropTypes.object.isRequired
};

/**
 * Prop validation required by our linter
 */
Main.propTypes = {
    children: React.PropTypes.object,
    location: React.PropTypes.object
};
