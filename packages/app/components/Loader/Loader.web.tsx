import { View, Text } from 'dripsy'
import Lottie from 'react-lottie'
import * as animationData from '../../assets/lottie/lottie_loader.json'
import React from 'react'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
}

const Loader = () => {
  return (
    <View
      sx={{
        height: '100vh',
      }}
    >
      <Lottie options={defaultOptions} />
    </View>
  )
}

export default Loader
