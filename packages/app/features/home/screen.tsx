import PrimaryButton from 'app/components/PrimaryButtonLink'
import { useSx, View, Text } from 'dripsy'
import { Audio } from 'expo-av'
import { useEffect, useState } from 'react'
import { Button } from 'react-native'

export function HomeScreen() {

  return (
    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    >
      <Text> HI </Text>
    </View>
  )
}
