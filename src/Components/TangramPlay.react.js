import 'babel-polyfill';
import React from 'react';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Button from 'react-bootstrap/lib/Button';

/**
 * Represents an icon that receives a 'type' prop indicating how it should look
 * as well as an optional 'active' prop indicating whether icon should be active
 */
export default class TangramPlay extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            buttonRefresh: '',
            url: this.props.url
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick () {
        this.setState({
            buttonRefresh: 'bt-spin',
            url: ''
        });

        this.setState({
            buttonRefresh: 'bt-spin',
            url: this.state.url
        });
        // this.forceUpdate();
        setTimeout(() => { this.setState({ buttonRefresh: '' }); }, 2000);
    }

    /**
     * Official React lifecycle method
     * Called every time state or props are changed
     */
    render () {
        console.log(this.state.url);
        return (
            <div>
                <Button className='refresh-button' onClick={this.onClick}><Glyphicon className={this.state.buttonRefresh} glyph="refresh" /></Button>
                <iframe width="100%" height="700px" frameborder="0" allowfullscreen src={this.state.url}>
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

//<Icon type={this.state.geolocatorButton} />
