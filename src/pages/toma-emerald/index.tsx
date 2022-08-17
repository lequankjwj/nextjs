import React from 'react';
import { EventSubcription } from '../../components/tomabox-subcription/Event';
import { HeaderSubcriptLogo } from '../../components/tomabox-subcription/HeaderSubcriptLogo';
import { PhotoGallery } from '../../components/tomabox-subcription/PhotoGallery';
import { QuestionAndAnswer } from '../../components/tomabox-subcription/QuestionAndAnswer';
import { WatchOnline } from '../../components/tomabox-subcription/WatchOnline';
import { Content } from '../../layout/child-layout/content/Content';
import { MainPrivate } from '../../layout/private/MainPrivate';
import { Meta } from '../../layout/public/Meta';
import { AppConfig } from '../../utils/AppConfig';

const TomaEmerald = () => (
    <MainPrivate
        meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
    >
        <Content>
            <div className='light-black-bg toma-subcription'>
                <HeaderSubcriptLogo logoUrl='/assets/images/toma-emerald-lg.png' bannerUrl='/assets/images/toma-emerald.png' />
                <WatchOnline />
                <PhotoGallery />
                <EventSubcription/>
                <QuestionAndAnswer />
            </div>
        </Content>
    </MainPrivate>
);

export default TomaEmerald;
