import React from 'react';
import { EventSubcription } from '../../components/tomabox-subcription/Event';
import { HeaderSubcriptLogo } from '../../components/tomabox-subcription/HeaderSubcriptLogo';
import { PhotoGallery } from '../../components/tomabox-subcription/PhotoGallery';
import { QuestionAndAnswer } from '../../components/tomabox-subcription/QuestionAndAnswer';
import { TableListInfomationSubcription } from '../../components/tomabox-subcription/TableListInfomationSubcription';
import { Content } from '../../layout/child-layout/content/Content';
import { MainPrivate } from '../../layout/private/MainPrivate';
import { Meta } from '../../layout/public/Meta';
import { AppConfig } from '../../utils/AppConfig';

const TomaSapphire = () => (
    <MainPrivate
        meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
    >
        <Content>
            <div className='light-black-bg toma-subcription'>
                <HeaderSubcriptLogo logoUrl='/assets/images/toma-sapphire-lg.png' bannerUrl='/assets/images/tom-sapphire.png' />
                <TableListInfomationSubcription />
                <PhotoGallery />
                <EventSubcription/>
                <QuestionAndAnswer />
            </div>
        </Content>
    </MainPrivate>
);

export default TomaSapphire;
