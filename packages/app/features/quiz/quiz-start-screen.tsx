import PrimaryButtonLink from 'app/components/PrimaryButtonLink'
import { View } from 'dripsy'
import { useEffect } from 'react'
import { userLogin } from 'app/api/authService'

export function QuizStartScreen({ navigation }) {
  useEffect(() => {
    userLogin({
      mobileNumber: '8010369252',
    })
  }, [])

  return (
    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    >
      <PrimaryButtonLink href="/quiz" as="/quiz">
        Start The Quiz
      </PrimaryButtonLink>
      <PrimaryButtonLink
        href="/how-is-this-video-made"
        as="/how-is-this-video-made"
      >
        How is this video made
      </PrimaryButtonLink>
      <PrimaryButtonLink href="/trusted-by" as="/trusted-by">
        Trusted By
      </PrimaryButtonLink>
      <PrimaryButtonLink href="/welcome" as="/welcome">
        Welcome
      </PrimaryButtonLink>
      <PrimaryButtonLink href="/welcome-to-truefan" as="/welcome-to-truefan">
        Welcome to truefan
      </PrimaryButtonLink>
      <PrimaryButtonLink href="/video-for" as="/video-for">
        Who is this Video Message For
      </PrimaryButtonLink>
      <PrimaryButtonLink href="/send-via-whatsapp" as="/send-via-whatsapp">
      We will send your Video Via WhatsApp
      </PrimaryButtonLink>
      <PrimaryButtonLink href="/we-are-sure" as="/we-are-sure">
      We are sure Devika will Love It
      </PrimaryButtonLink>

      {/* <Button title="Play Sound" onPress={playSound} /> */}

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
