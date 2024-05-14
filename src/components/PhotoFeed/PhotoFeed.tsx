import React, { useState, useEffect } from 'react'
import { createApi } from 'unsplash-js'

import { type UnsplashPhoto } from './types'

const unsplash = createApi({
  accessKey: `${process.env.UNSPLASH_ACCESS_KEY}`
})

const NewPhotosButton = ({
  onNewPhotosClick
}: {
  onNewPhotosClick: () => void
}): React.ReactNode => {
  return (
    <button
      onClick={onNewPhotosClick}
      style={{
        margin: '20px auto',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer'
      }}
    >
      New ones
    </button>
  )
}

const PhotoFeed = (): React.ReactNode => {
  const [photos, setPhotos] = useState<any>([])

  const getPhotos = async (): Promise<void> => {
    await unsplash.photos
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
      .catch((error) => {
        console.error('Fetch error:', error)
      })
  }

  const handleFetchError = (err: Error): void => {
    console.log('Error while fetching photos', err.message)
  }

  useEffect(() => {
    getPhotos().catch(handleFetchError)
  }, [])

  const onNewPhotosClick = (): void => {
    getPhotos().catch(handleFetchError)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <NewPhotosButton onNewPhotosClick={onNewPhotosClick} />
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
              alt={photo.alt_description ?? 'Unsplash photo'}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        ))}
      </div>
      <NewPhotosButton onNewPhotosClick={onNewPhotosClick} />
    </div>
  )
}

export default PhotoFeed
