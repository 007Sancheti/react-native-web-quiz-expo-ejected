import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { QuizStartScreen } from '../../features/quiz/quiz-start-screen'
import { QuizScreen } from '../../features/quiz/quiz-screen'

const Stack = createNativeStackNavigator<{
  home: undefined
  'quiz-start': {
    id: string
  }
  'quiz': {
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
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
    </Stack.Navigator>
  )
}
