import React from 'react';
import { Discography } from '../components/index/Discography';
import { FanClub } from '../components/index/Fanclub';
import { GoodItem } from '../components/index/GoodItem';

import { HeaderTitle } from '../components/index/HeaderTitle';
import { ImageBanner } from '../components/index/ImageBanner';
import { ImageBannerMedia } from '../components/index/ImageBannerMedia';
import { ImageTop } from '../components/index/ImageTop';
import { Profile } from '../components/index/Profile';
import { SliderEvent } from '../components/index/SliderEvent';
import { TableInfomation } from '../components/index/TableInfomation';
import { Content } from '../layout/child-layout/content/Content';
import { Main } from '../layout/public/Main';
import { Meta } from '../layout/public/Meta';
import { AppConfig } from '../utils/AppConfig';

const Index = () => (
  <Main
    meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
  >
    <Content>
      <div className="slider w-100">
        <ImageTop></ImageTop>
      </div>
      <div className="container-fluid padding-10rem">
        <div className="event padding-10rem-bottom">
          <HeaderTitle title={'Event'} />
          <SliderEvent></SliderEvent>
        </div>
        <div className="information">
          <HeaderTitle title={'Infomation'} />
          <TableInfomation></TableInfomation>
        </div>
      </div>
      <div className='banner-image'>
        <ImageBanner title='' url='./assets/images/banner-index.png'/>
      </div>
      <div className="container-fluid padding-10rem">
        <div className="profile padding-10rem-bottom">
          <HeaderTitle title={'Profile'} />
          <Profile/>
        </div>
        <div className="discography padding-10rem">
          <HeaderTitle title={'Discography'} />
          <Discography/>
        </div>
      </div>
      <div className='banner-image'>
        <ImageBannerMedia title='Media' url='./assets/images/media-angle.png'/>
      </div>
      <div className="container-fluid pt-14 padding-10rem-bottom">
        <div className="goods">
          <HeaderTitle title={`TOMA's Goods`} />
          <GoodItem/>
        </div>
      </div>
      <div className='fan-club'>
        <FanClub/>
      </div>
    </Content>
  </Main>
);

export default Index;
