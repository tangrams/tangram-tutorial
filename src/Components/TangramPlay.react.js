import 'babel-polyfill';
import React from 'react';

/**
 * Represents an icon that receives a 'type' prop indicating how it should look
 * as well as an optional 'active' prop indicating whether icon should be active
 */
export default class TangramPlay extends React.Component {
    /**
     * Official React lifecycle method
     * Called every time state or props are changed
     */
    render () {
        return (
            <div>
                <iframe width="100%" height="700px" frameborder="0" allowfullscreen src={this.props.url}>
                </iframe>
            </div>
        );
    }
}

/**
 * Prop validation required by React
 */
TangramPlay.propTypes = {
    url: React.PropTypes.string,
};
