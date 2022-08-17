import React from 'react';
import { GroupEventPost } from '../../components/event/GroupEventPost';
import { LeftSideMenu } from '../../components/event/LeftSideMenu';

import { Content } from '../../layout/child-layout/content/Content';
import { VintageHeader } from '../../layout/child-layout/vintage-header/VintageHeader';
import { Main } from '../../layout/public/Main';
import { Meta } from '../../layout/public/Meta';
import { AppConfig } from '../../utils/AppConfig';

const Event = () => (
  <Main
    meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
  >
    <Content>
      <div className="container-fluid other-page flex">
        <div className='left-side'>
          <VintageHeader title='Event' />
          <LeftSideMenu />
        </div>
        <div className='right-side'>
          <GroupEventPost />
        </div>
      </div>
    </Content>
  </Main>
);

export default Event;
