import React from 'react';
import { AboutProfile } from '../../components/profile/AboutProfile';
import { DividedLine } from '../../components/profile/DividedLine';
import { ProfileItems } from '../../components/profile/ProfileItems';

import { Content } from '../../layout/child-layout/content/Content';
import { VintageHeader } from '../../layout/child-layout/vintage-header/VintageHeader';
import { Main } from '../../layout/public/Main';
import { Meta } from '../../layout/public/Meta';
import { AppConfig } from '../../utils/AppConfig';

const Profile = () => (
  <Main
    meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
  >
    <Content>
      <div className="container-fluid other-page flex">
        <div className='left-side'>
          <VintageHeader title='Profile' />
        </div>
        <div className='right-side'>
          <AboutProfile/>
        </div>
      </div>
      <DividedLine/>
      <div className="container-fluid other-page list-profile-items flex">
        <div className='left-side'>
        </div>
        <div className='right-side'>
          <div className="group-item">
            <div className="item">
              <ProfileItems/>
            </div>
          </div>
        </div>
      </div>
    </Content>
  </Main>
);

export default Profile;
