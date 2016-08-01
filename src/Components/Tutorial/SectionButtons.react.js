import 'babel-polyfill';
var React = require('react');

import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router';

export default class SectionButtons extends React.Component {
  render () {
      let prev ;
      if (this.props.prev == '') {
          prev = null;
      }
      else {
          prev = <Button bsSize="small"><Link to={this.props.prev}>Previous section</Link></Button>;
      }

      let next ;
      if (this.props.next == '') {
          next = null;
      }
      else {
          next = <Button bsSize="small" className='button-next'><Link to={this.props.next}>Next section</Link></Button>;
      }


    return (
            <Row>
                {prev}
                {next}
            </Row>
        );
    }
}
