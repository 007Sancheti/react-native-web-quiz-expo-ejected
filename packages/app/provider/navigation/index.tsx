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
              'quiz-start': 'quiz-start',
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
