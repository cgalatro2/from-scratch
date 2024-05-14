import React from 'react'
import PhotoFeed from './components/PhotoFeed/PhotoFeed'

const App: React.FC = () => {
  const title = 'Unsplash Rando Photos'

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{title}</h1>
      <PhotoFeed />
    </div>
  )
}

export default App
