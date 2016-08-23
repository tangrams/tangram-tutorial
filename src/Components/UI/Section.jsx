import 'babel-polyfill';
import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import SectionButtons from './SectionButtons';

export default class Section extends React.Component {
    render () {
        return (
            <Row className='show-grid'>
                <Col xs={10} xsOffset={1}>
                    {this.props.children}
                    <SectionButtons prev={this.props.prev} next={this.props.next} />
                </Col>
            </Row>
        );
    }
}

/**
 * Prop validation required by our linter
 */
Section.propTypes = {
    children: React.PropTypes.array,
    prev: React.PropTypes.string,
    next: React.PropTypes.string
};
