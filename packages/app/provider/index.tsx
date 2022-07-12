import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'
import { QueryProvider } from './react-query'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <QueryProvider>
        <Dripsy>{children}</Dripsy>
      </QueryProvider>
    </NavigationProvider>
  )
}
