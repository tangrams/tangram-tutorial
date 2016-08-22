import 'babel-polyfill';
import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import SectionButtons from './SectionButtons.react';

export default class Section extends React.Component {
  render () {
    return (
            <Row className="show-grid">
                {this.props.children}
                <SectionButtons prev={this.props.prev} next={this.props.next} />
            </Row>
        );
    }
}
