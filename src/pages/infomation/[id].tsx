import { Main } from '../../layout/public/Main';
import { Content } from "../../layout/child-layout/content/Content";
import { VintageHeader } from "../../layout/child-layout/vintage-header/VintageHeader";
import { Meta } from "../../layout/public/Meta";
import { AppConfig } from "../../utils/AppConfig";
import { InfomationGetDetail } from '../../components/infomation/InfomationGetDetail';
import {useRouter} from 'next/router'

const InfomationDetail = () => {
  const router = useRouter()
  const { id } = router.query
  return (
  <Main
    meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
  >
    <Content>
      <div className="container-fluid other-page flex">
        <div className='left-side'>
          <VintageHeader title='Infomation Detail' />
        </div>
        <div className='right-side'>
          {
            id && <InfomationGetDetail id={id as string}/>
          }
        </div>
      </div>
    </Content>
  </Main>
  )
  
  };

export default InfomationDetail;
