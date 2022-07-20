import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { QuizStartScreen } from '../../features/quiz/quiz-start-screen'
import { QuizScreen } from '../../features/quiz/quiz-screen'
import { HowIsThisVideoMade } from 'app/features/quiz/how-is-video-made'
import { TrustedBy } from 'app/features/quiz/trusted-by'
import { Welcome } from 'app/features/quiz/welcome'
import { WelcomeToTruefan } from 'app/features/quiz/welcome-to-truefan'
import { VideoFor } from 'app/features/quiz/video-for'
import { SendViaWhatsapp } from 'app/features/quiz/send-via-whatsapp'
import { WeAreSure } from 'app/features/quiz/we-are-sure'

const Stack = createNativeStackNavigator<{
  home: undefined
  'quiz-start': {
    id: string
  }
  'quiz': {
    id: string
  }
  'how-is-this-video-made': {
    id: string
  }
  'trusted-by': {
    id: string
  }
  'welcome': {
    id: string
  }
  'video-for': {
    id: string
  }
  'send-via-whatsapp': {
    id: string
  }
  'we-are-sure': {
    id: string
  }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="quiz-start"
        component={QuizStartScreen}
        options={{
          title: 'Quiz Start',
        }}
      />
      <Stack.Screen
        name="quiz"
        component={QuizScreen}
        options={{
          title: 'Quiz',
        }}
      />
      <Stack.Screen
        name="how-is-this-video-made"
        component={HowIsThisVideoMade}
        options={{
          title: 'How Is This Video Made',
        }}
      />
      <Stack.Screen
        name="trusted-by"
        component={TrustedBy}
        options={{
          title: 'Trusted by Superstars Loved By Fans',
        }}
      />
      <Stack.Screen
        name="welcome"
        component={Welcome}
        options={{
          title: 'Welcome',
        }}
      />
      <Stack.Screen
        name="welcome-to-truefan"
        component={WelcomeToTruefan}
        options={{
          title: 'Welcome to truefan',
        }}
      />
      <Stack.Screen
        name="video-for"
        component={VideoFor}
        options={{
          title: 'Who is this Video Message For',
        }}
      />
      <Stack.Screen
        name="send-via-whatsapp"
        component={SendViaWhatsapp}
        options={{
          title: 'We will send your Video Via WhatsApp',
        }}
      />
      <Stack.Screen
        name="we-are-sure"
        component={WeAreSure}
        options={{
          title: 'We are sure Devika will Love It',
        }}
      />
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
    </Stack.Navigator>
  )
}
