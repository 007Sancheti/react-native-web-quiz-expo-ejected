import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgba(10, 7, 16, 1)',
  },
}

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NavigationContainer
      theme={MyTheme}
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'quiz-start',
            screens: {
              home: '',
              'how-is-this-video-made': 'how-is-this-video-made',
              welcome: 'welcome',
              'welcome-to-truefan': 'welcome-to-truefan',
              'video-for': 'video-for',
              'trusted-by': 'trusted-by',
              'quiz-start': 'quiz-start',
              'send-via-whatsapp': 'send-via-whatsapp',
              'we-are-sure': 'we-are-sure',
              quiz: 'quiz',
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
