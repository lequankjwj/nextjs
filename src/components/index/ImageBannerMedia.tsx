import React from 'react';
import { HeaderTitle } from './HeaderTitle';

type ImageBannerMedia = {
  title: string;
  url: string;
};
const ImageBannerMedia = (props: ImageBannerMedia) => (
  <div className='banner-media'>
    <div className="content">
      <HeaderTitle title={props.title}/>
    <img src={props.url}/>
    </div> 
  </div>
);

export { ImageBannerMedia };
