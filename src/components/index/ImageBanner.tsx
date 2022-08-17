import React from 'react';

type ImageBanner = {
  title: string;
  url: string
};
const ImageBanner = (props: ImageBanner) => (
  <div className='banner'>
    <img src={props.url}/>
  </div>
);

export { ImageBanner };
