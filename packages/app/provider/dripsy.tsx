import { DripsyProvider, makeTheme } from 'dripsy'

const theme = makeTheme({
  colors: {
    $text: 'rgba(255, 255, 255, 1)',
    $background: 'rgba(10, 7, 16, 1)',
    $primary: 'tomato',
  },
  // https://www.dripsy.xyz/usage/theming/create
  text: {
    p: {
      fontSize: 16,
    },
  },
})

export function Dripsy({ children }: { children: React.ReactNode }) {
  return (
    <DripsyProvider
      theme={theme}
      // this disables SSR, since react-native-web doesn't have support for it (yet)
      ssr
    >
      {children}
    </DripsyProvider>
  )
}
