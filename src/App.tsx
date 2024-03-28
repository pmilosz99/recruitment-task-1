import { QueryClientProvider } from '@tanstack/react-query'
import { TagsOverview } from './components/tags-overview'
import { ThemeProvider } from '@emotion/react'

import { theme } from './shared/theme'
import { queryClient } from './shared/react-query'

function App() {
  return (
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <TagsOverview />
        </QueryClientProvider>
      </ThemeProvider>
  )
}

export default App
