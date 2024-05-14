import { createRoot } from 'react-dom/client'

import App from './App'

// Clear the existing HTML content
document.body.innerHTML = '<div id="root"></div>'

const rootElement = document.getElementById('root')
if (rootElement !== null) {
  const root = createRoot(rootElement)
  root.render(<App />)
} else {
  console.error('Failed to find the root element')
}
