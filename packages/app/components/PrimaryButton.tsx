import { Text, useSx } from 'dripsy'
import React from 'react'
import { MotiPressable } from 'moti/interactions'
import { GradientHelper } from '../helpers/GradientHelper'
import { Animated } from 'react-native'

type PrimaryButtonProps = {
  children: React.ReactNode
  props: React.ComponentProps<typeof MotiPressable>
}

const AnimatedGradientHelper = Animated.createAnimatedComponent(GradientHelper)

const PrimaryButton = ({ children, props }: PrimaryButtonProps) => {
  const tweener = new Animated.Value(0)
  const color1 = tweener.interpolate({
    inputRange: [0, 1],
    outputRange: ['#BA58E8', '#6258E8'],
  })

  const sx = useSx()
  return (
    <MotiPressable
      containerStyle={sx({
        width: '100%',
      })}
      onHoverIn={() => {
        Animated.timing(tweener, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start()
      }}
      onHoverOut={() => {
        Animated.timing(tweener, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start()
      }}
      onPressIn={() => {
        Animated.timing(tweener, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false,
        }).start()
      }}
      onPressOut={() => {
        Animated.timing(tweener, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }).start()
      }}
      {...props}
    >
      <AnimatedGradientHelper
        color1={color1}
        color2={'#6258E8'}
        start={[0, 0]}
        end={[1, 1]}
        style={sx({
          width: '100%',
          borderRadius: 20,
          padding: 15,
          alignItems: 'center',
        })}
      >
        <Text
          sx={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          {children}
        </Text>
      </AnimatedGradientHelper>
    </MotiPressable>
  )
}

export default PrimaryButton
