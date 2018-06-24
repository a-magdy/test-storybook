import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from '../src/Photos/component';


const photosListStaticOneItem = [
  {
    "title": "more text", 
    "url": "http://placehold.it/600/92c952",
  }
];


const photosListStaticThreeItems = [
  {
    "albumId": 1,
    "id": 1,
    "title": "bla bla bla",
    "url": "http://placehold.it/600/92c952",
    "thumbnailUrl": "http://placehold.it/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "http://placehold.it/600/771796",
    "thumbnailUrl": "http://placehold.it/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "http://placehold.it/600/24f355",
    "thumbnailUrl": "http://placehold.it/150/24f355"
  }
];

storiesOf('PhotoList', module)
  .add('no items', () => <Component photoList={[]} />)
  .add('3 items', () => <Component photoList={photosListStaticThreeItems} />)