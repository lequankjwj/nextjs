import { useEffect, useState } from 'react';
import * as request from '../../api/infomation/InfomationServices';
import { Overlay } from '../../layout/child-layout/overlay/Overlay';
import * as formatData from '../../utils/FormatData'
import ReactHtmlParser from 'react-html-parser';
import { useRouter } from 'next/router'

type Request = {
  id: string
}
type IInfo = {
  category: string,
  content: string,
  createdAt: string,
  id: string,
  publishedAt: string,
  revisedAt: string,
  title: string,
  updatedAt: Date,
  index: number,
}

const InfomationGetDetail = (props: Request) => {
  const router = useRouter()
  const [preInfoId, setpreInfoId] = useState(null)
  const [nextInfoId, setnextInfoId] = useState(null)
  const [info, setInfo] = useState({} as IInfo)
  const [isLoading, setIsLoading] = useState(false)
  const backToListPage = () => {
    router.push('/infomation')
  }
  const nextInfo = (id: string) => {
    window.open('/infomation/' + id, "_self")
  }
  const getInfomation = async () => {
    setIsLoading(true)
    const result = await request.getInfomations(`information`, {
      params: {
        limit: 9999,
        offset: 0,
        orders: '-publishedAt'
      }
    }).finally(() => {
      setIsLoading(false)
    })
    if (result?.contents && result.contents.length > 0) {
      (result.contents as IInfo[]).map((item, index) => {
        if (item.id === props.id) {
          setInfo({
            ...item,
            index: index
          })
          if (index > 0)
            setpreInfoId(result.contents[index - 1].id)
          if (index < result.contents.length - 1)
            setnextInfoId(result.contents[index + 1].id)
        }
      })
    }
  }
  useEffect(() => {
    getInfomation()
  }, [])
  return (
    <div className={'tb-infomation'}>
      <div id="info-list-dt" className='detail-infomation'>
        <h2>{info?.title}</h2>
        <div><span className='time'>{info?.publishedAt ? formatData.FormatDate(info.publishedAt) : ''}</span><span className='tag'>LIVE</span></div>
        <div className='html-detail'>
          {ReactHtmlParser(info.content)}
        </div>
        <div className='navigate flex'>
          <div className='previous flex-1'>
            <span onClick={() => preInfoId && nextInfo(preInfoId)}>{preInfoId ? '<前の記事' : ''} </span>
          </div>
          <div className='back-to-info text-center flex-1'>
            <span onClick={backToListPage}>一覧</span>
          </div>
          {
            nextInfoId &&
            <div className='next flex-1'>
              <span onClick={() => nextInfo(nextInfoId)}>{nextInfoId ? '次の記事>' : ''}</span>
            </div>
          }
        </div>
      </div>
      <Overlay isLoading={isLoading} />
    </div>
  )
};

export { InfomationGetDetail };
