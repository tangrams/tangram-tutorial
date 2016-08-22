import 'babel-polyfill';

var React = require('react');

import Row from 'react-bootstrap/lib/Row';
import TangramPlay from '../UI/TangramPlay.react';
import Section from './Section.react';

import examples from './links';

import styling from '../../Assets/markdown/styling.md';
var sections = styling.split('[section]');

export class Tutorial31 extends React.Component {
  render () {
    return (
        <Section prev={this.props.route.prev} next={this.props.route.next}>
            <div dangerouslySetInnerHTML={{ __html: sections[0] }} />
            <TangramPlay url={examples.styling} />
        </Section>
        )}
}

export class Tutorial32 extends React.Component {
  render () {
    return (
        <Section prev={this.props.route.prev} next={this.props.route.next}>
            <div dangerouslySetInnerHTML={{ __html: sections[1] }} />
            <TangramPlay url={examples.styling2} />
        </Section>
        )}
}

export class Tutorial33 extends React.Component {
  render () {
    return (
        <Section prev={this.props.route.prev} next={this.props.route.next}>
            <div dangerouslySetInnerHTML={{ __html: sections[2] }} />
            <TangramPlay url={examples.colors} />
        </Section>
        )}
}

export class Tutorial34 extends React.Component {
  render () {
    return (
        <Section prev={this.props.route.prev} next={this.props.route.next}>
            <div dangerouslySetInnerHTML={{ __html: sections[3] }} />
            <TangramPlay url={examples.styling3} />
            <div dangerouslySetInnerHTML={{ __html: sections[4] }} />
            <TangramPlay url={examples.styling4} />
        </Section>
        )}
}

export class Tutorial35 extends React.Component {
  render () {
    return (
        <Section prev={this.props.route.prev} next={this.props.route.next}>
            <div dangerouslySetInnerHTML={{ __html: sections[5] }} />
            <TangramPlay url={examples.styling5} />
        </Section>
        )}
}
