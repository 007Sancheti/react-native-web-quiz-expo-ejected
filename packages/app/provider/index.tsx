import { Dripsy } from './dripsy'
import { View } from 'dripsy'
import { NavigationProvider } from './navigation'
import { QueryProvider } from './react-query'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <QueryProvider>
        <Dripsy>
          <View
            sx={{
              flex: 1,
              backgroundColor: '$background',
            }}
          >
            {children}
          </View>
        </Dripsy>
      </QueryProvider>
    </NavigationProvider>
  )
}
