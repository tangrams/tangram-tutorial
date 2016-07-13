import 'babel-polyfill';
var React = require('react');

import Row from 'react-bootstrap/lib/Row';

import intro from '../../Markdown/intro.md';

export default class Tutorial1 extends React.Component {
  render () {
    return (
            <Row className="show-grid">
                <div dangerouslySetInnerHTML={{ __html: intro }} />
            </Row>
        )}
}
