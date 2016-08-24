import 'babel-polyfill';
import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import { Link } from 'react-router';

export default class SectionButtons extends React.Component {
    render () {
        let prev;
        if (this.props.prev === '') {
            prev = <div className='pagination-empty'></div>;
        }
        else {
            prev =
                <Link to={this.props.prev} className='pagination-link pagination-previous'>
                    <i className='fa fa-fw fa-angle-left'></i>
                    <span className='pagination-link-text'>Previous section</span>
                </Link>;
        }

        let next;
        if (this.props.next === '') {
            next = null;
        }
        else {
            next =
                <Link to={this.props.next} className='pagination-link pagination-next'>
                    <i className='fa fa-fw fa-angle-right'></i>
                    <span className='pagination-link-text'>Next section</span>
                </Link>;
        }

        return (
            <Row className='pagination pagination-alt hidden-print'>
                {prev}
                {next}
            </Row>
        );
    }
}

/**
 * Prop validation required by our linter
 */
SectionButtons.propTypes = {
    prev: React.PropTypes.string,
    next: React.PropTypes.string
};
