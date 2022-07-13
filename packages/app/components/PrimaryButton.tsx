import { Text, useSx, SxProp } from 'dripsy'
import React from 'react'
import { MotiPressable, MotiPressableProps } from 'moti/interactions'
import { GradientHelper } from '../helpers/GradientHelper'
import { Animated } from 'react-native'
import CrossSvg from 'app/assets/icons/red_cross.svg'
import TickSvg from 'app/assets/icons/icon_tick.svg'
import { MotiView } from 'moti'

type PrimaryButtonProps = MotiPressableProps & {
  children: React.ReactNode
  buttonStyle?: SxProp
  gradientColor1?: string
  gradientColor2?: string
  animating?: string
}

const AnimatedGradientHelper = Animated.createAnimatedComponent(GradientHelper)

const PrimaryButton = ({
  animating,
  children,
  gradientColor1 = '#BA58E8',
  gradientColor2 = '#6258E8',
  buttonStyle,
  ...props
}: PrimaryButtonProps) => {
  const tweener = new Animated.Value(0)
  const color1 = tweener.interpolate({
    inputRange: [0, 1],
    outputRange: [gradientColor1, gradientColor2],
  })

  const sx = useSx()
  return (
    <MotiPressable
      containerStyle={sx({
        width: '100%',
        ...buttonStyle,
      })}
      onHoverIn={() => {
        Animated.timing(tweener, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start()
      }}
      onHoverOut={() => {
        Animated.timing(tweener, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start()
      }}
      onPressIn={() => {
        Animated.timing(tweener, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }).start()
      }}
      onPressOut={() => {
        Animated.timing(tweener, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }).start()
      }}
      {...props}
    >
      <AnimatedGradientHelper
        color1={color1}
        color2={gradientColor2}
        start={[0, 0]}
        end={[1, 1]}
        style={sx({
          width: '100%',
          borderRadius: 20,
          padding: 15,
          alignItems: 'center',
        })}
      >
        {animating === 'correct' && (
          <MotiView
            key="correct"
            from={{
              top: 0,
              opacity: 1,
            }}
            animate={{
              top: -100,
              opacity: 0,
            }}
            style={{
              width: '100%',
              alignItems: 'center',
              position: 'absolute',
              zIndex: 2,
            }}
            transition={{
              type: 'timing',
              duration: 1000,
            }}
          >
            <TickSvg />
          </MotiView>
        )}
        {animating === 'incorrect' && (
          <MotiView
            key="incorrect"
            from={{
              top: 0,
              opacity: 1,
            }}
            animate={{
              top: -100,
              opacity: 0,
            }}
            style={{
              width: '100%',
              alignItems: 'center',
              position: 'absolute',
              zIndex: 2,
            }}
            transition={{
              type: 'timing',
              duration: 1000,
            }}
          >
            <CrossSvg />
          </MotiView>
        )}
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
