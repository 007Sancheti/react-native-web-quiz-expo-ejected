import LottieView from "lottie-react-native";
import { View } from 'dripsy'
import React from 'react'

const Loader = () => {

  return (
    <View sx={{
      flex: 1,
    }}>
      <LottieView
        source={require('../../assets/lottie/lottie_loader.json')}
        loop 
        autoPlay
      />
    </View>
  )
}

export default Loader
