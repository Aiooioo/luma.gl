import React from 'react';
import AnimationLoopExamplePage from '../../src/components/animation-loop-example-page';
import AnimationLoop from '../../../examples/lessons/03/app';

export default class Example extends React.Component {
  render() {
    return (
      <AnimationLoopExamplePage AnimationLoop={AnimationLoop} exampleConfig={this.props.pageContext.exampleConfig} />
    );
  }
}
