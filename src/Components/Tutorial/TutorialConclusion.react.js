import 'babel-polyfill';
import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Image from 'react-bootstrap/lib/Image';
// import TangramPlay from '../UI/TangramPlay.react';
import Section from '../UI/Section.react';

// import examples from './examples';
import conclusion from '../../Assets/markdown/conclusion.md';
const sections = conclusion.split('[section]');

export class TutorialConclusion extends React.Component {
    render () {
        return (
            <Section prev={this.props.route.prev} next={this.props.route.next}>
                <div dangerouslySetInnerHTML={{ __html: sections[0] }} />
                <Row className='image-row'>
                    <Image width='40%' src={require('../../Assets/images/js.png')} responsive />
                    <Image width='40%' src={require('../../Assets/images/es.png')} responsive />
                </Row>
                <div dangerouslySetInnerHTML={{ __html: sections[1] }} />
                <Image width='70%' src={require('../../Assets/images/tangramplay.png')} responsive />
            </Section>
        );
    }
}

/**
 * Prop validation required by our linter
 */
TutorialConclusion.propTypes = {
    route: React.PropTypes.object
};
