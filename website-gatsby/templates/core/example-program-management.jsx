import React from 'react';
import AnimationLoopExamplePage from '../../src/components/animation-loop-example-page';
import AnimationLoop from '../../../examples/core/program-management/app';

export default class Example extends React.Component {
  render() {
    return (
      <AnimationLoopExamplePage AnimationLoop={AnimationLoop} exampleConfig={this.props.pageContext.exampleConfig} />
    );
  }
}
