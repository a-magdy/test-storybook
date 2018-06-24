import React from 'react';

const PhotoItem = ({ photo }) => (
  <li>
    <p>{photo.title}</p>
    <img style={{ width: '200px', height: '200px' }}  src={photo.url} />
  </li>
)

export default ({ photoList }) => {
  console.log({photoList});
  return (
  <ul>
    {
      photoList &&
        photoList.map((photo) => <PhotoItem photo={photo} />)
    }
  </ul>
)
}