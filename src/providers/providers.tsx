import { PropsWithChildren } from 'react'
import GlobalStyle from '@/config/globalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/config/theme'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
