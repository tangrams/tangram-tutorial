import 'babel-polyfill';
import React from 'react';
import Section from './Section';
import parseJSX from './helper';

let req = require.context('../../Assets/markdown/', true, /\.md$/);

function getMarkdown (markdownFile) {
    let file;
    req.keys().forEach(function (key) {
        if (key === markdownFile) {
            file = req(key);
        }
    });

    return file;
}

function getJSX (file) {
    return parseJSX(file);
}

export default class Tutorial extends React.Component {
    constructor (props) {
        super(props);

        let mdPath = './' + this.props.markdown;
        this.markdownFile = getMarkdown(mdPath);
        this.jsx = getJSX(this.markdownFile);
    }

    render () {
        return (
            <Section prev={this.props.prev} next={this.props.next}>
                {this.jsx}
            </Section>
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
