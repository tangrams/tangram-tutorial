import 'babel-polyfill';
import React from 'react';

// Represents and embedded Tangram Play iframe
export default class TangramPlay extends React.Component {
    render () {
        return (
            <div>
                <iframe width='100%' height='700px' src={this.props.url}>
                </iframe>
            </div>
        );
    }
}

/**
 * Prop validation required by our linter
 */
TangramPlay.propTypes = {
    url: React.PropTypes.string
};
