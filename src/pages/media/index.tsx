import React from 'react';
import { GroupMediaPost } from '../../components/media/GroupMediaPost';

import { Content } from '../../layout/child-layout/content/Content';
import { VintageHeader } from '../../layout/child-layout/vintage-header/VintageHeader';
import { Main } from '../../layout/public/Main';
import { Meta } from '../../layout/public/Meta';
import { AppConfig } from '../../utils/AppConfig';

const Media = () => (
  <Main
    meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
  >
    <Content>
      <div className="container-fluid other-page flex">
        <div className='left-side'>
          <VintageHeader title='Media' />
        </div>
        <div className='right-side'>
          <GroupMediaPost />
        </div>
      </div>
    </Content>
  </Main>
);

export default Media;
