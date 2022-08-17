import React from 'react';
import { DiscographyItems } from '../../components/discography/DiscographyItems';

import { Content } from '../../layout/child-layout/content/Content';
import { VintageHeader } from '../../layout/child-layout/vintage-header/VintageHeader';
import { Main } from '../../layout/public/Main';
import { Meta } from '../../layout/public/Meta';
import { AppConfig } from '../../utils/AppConfig';

const Discography = () => (
  <Main
    meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
  >
    <Content>
      <div className="container-fluid discography-div other-page">
        <VintageHeader title='Discography' />
        <DiscographyItems/>
      </div>
    </Content>
  </Main>
);

export default Discography;
