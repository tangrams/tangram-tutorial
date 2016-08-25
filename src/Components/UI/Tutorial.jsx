import 'babel-polyfill';
import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import SectionButtons from './SectionButtons';
import parseJSX from './helper';

let req = require.context('../../Assets/markdown/', true, /\.md$/);

// Load a markdown file's content into a variable
function getMarkdown (markdownFile) {
    let file;
    req.keys().forEach(function (key) {
        if (key === markdownFile) {
            file = req(key);
        }
    });

    return file;
}

// Convert markdown to JSX/HTML
function getJSX (file) {
    return parseJSX(file);
}

// Component that represents a given tutorial section content
export default class Tutorial extends React.Component {
    constructor (props) {
        super(props);

        let mdPath = './' + this.props.markdown;
        this.markdownFile = getMarkdown(mdPath);
        this.jsx = getJSX(this.markdownFile);
    }

    render () {
        return (
            <Row className='show-grid'>
                <Col xs={10} xsOffset={1}>
                    {/* Markdown content */}
                    {this.jsx}
                    {/* Previous and next buttons */}
                    <SectionButtons prev={this.props.prev} next={this.props.next} />
                </Col>
            </Row>
        );
    }
}

/**
 * Prop validation required by our linter
 */
Tutorial.propTypes = {
    prev: React.PropTypes.string,
    next: React.PropTypes.string,
    markdown: React.PropTypes.string
};
