import React, { Component } from 'react'
import { Gradient } from '@dripsy/gradient';

export class GradientHelper extends Component {
  render() {
    const { color1, color2, ...props } = this.props
    return (
      <Gradient
        colors={[color1, color2]}
        {...props}
      />
    )
  }
}
