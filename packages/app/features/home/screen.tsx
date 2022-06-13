import PrimaryButton from 'app/components/PrimaryButton'
import { useSx, View } from 'dripsy'
import { Audio } from 'expo-av'
import { useEffect, useState } from 'react'
import { Button } from 'react-native'

export function HomeScreen() {
  const [sound, setSound] = useState()
  const sx = useSx()
  async function playSound() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('../../../../assets/audio/1.mp3')
    )
    setSound(sound)

    console.log('Playing Sound')
    await sound.setStatusAsync({ shouldPlay: true })
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound')
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  return (
    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    >
      <PrimaryButton>Start The Quiz</PrimaryButton>
      <Button title="Play Sound" onPress={playSound} />

      {/* <H1 sx={{ fontWeight: '800' }}>Welcome to Solito.</H1>
      <View sx={{ maxWidth: 600 }}>
        <P sx={{ textAlign: 'center' }}>
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </P>
        <P sx={{ textAlign: 'center' }}>
          Solito is made by{' '}
          <A
            href="https://twitter.com/fernandotherojo"
            // @ts-expect-error react-native-web only types
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
            sx={{ color: 'blue' }}
          >
            Fernando Rojo
          </A>
          .
        </P>
      </View>
      <View sx={{ height: 32 }} />
      <Row>
        <TextLink
          href="/user/fernando"
          textProps={{
            style: sx({ fontSize: 16, fontWeight: 'bold', color: 'blue' }),
          }}
        >
          Regular Link
        </TextLink>
        <View sx={{ width: 32 }} />
        <MotiLink
          href="/user/fernando"
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text
            selectable={false}
            sx={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
          >
            Moti Link
          </Text>
        </MotiLink>
      </Row> */}
    </View>
  )
}
