import { useState, useEffect } from 'react'
import { createApi } from 'unsplash-js'

import { UnsplashPhoto } from './types'

const unsplash = createApi({
  accessKey: ''
})

const PhotoFeed = () => {
  const [photos, setPhotos] = useState<any>([])

  const getPhotos = () =>
    unsplash.photos
      .getRandom({ count: 20 })
      .then((result) => {
        if (result.type === 'success') {
          // Normalize data to always be an array
          const photoData = Array.isArray(result.response)
            ? result.response
            : [result.response]
          setPhotos(photoData)
        } else {
          console.error('Error fetching photos:', result.errors)
        }
      })
      .catch((error) => console.error('Fetch error:', error))

  useEffect(() => {
    getPhotos()
  }, [])

  return (
    <div style={{ textAlign: 'center' }}>
      <button
        onClick={getPhotos}
        style={{
          margin: '20px auto',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        New ones
      </button>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', // Creates columns that fill the space, with each column at least 240px wide
          gap: '10px',
          padding: '10px',
          maxWidth: '1000px',
          margin: 'auto'
        }}
      >
        {photos.map((photo: UnsplashPhoto) => (
          <div
            key={photo.id}
            style={{ width: '100%', height: '300px', overflow: 'hidden' }}
          >
            <img
              src={photo.urls.small}
              alt={photo.alt_description || 'Unsplash photo'}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        ))}
      </div>
      <button
        onClick={getPhotos}
        style={{
          margin: '20px auto',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        New ones
      </button>
    </div>
  )
}

export default PhotoFeed
