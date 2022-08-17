import { useCallback, useEffect, useState } from 'react';
import * as request from '../../api/infomation/InfomationServices';
import * as formatData from '../../utils/FormatData'
import { useRouter } from 'next/router'
import { Overlay } from '../../layout/child-layout/overlay/Overlay';


type IInfos = {
  category: string,
  content: string,
  createdAt: string,
  id: string,
  publishedAt: string,
  revisedAt: string,
  title: string,
  updatedAt: Date,
}

const TableInfoList = () => {
  const router = useRouter()
  const [infos, setInfos] = useState([] as IInfos[])
  const [buttonText, setButtonText] = useState('Click');
  const [totalItem, setTotalItem] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const pageSize = 20
  const loadMoreItem = () => {
    if (localStorage.getItem('scrollInfo'))
    localStorage.removeItem('scrollInfo')
    getInfomations(pageSize + 20)
  }
  const onScroll = useCallback(() => {
    localStorage.setItem("scrollInfo", window.pageYOffset.toString());
  }, []);
  const getInfomations = async (limit: Number) => {
    setButtonText('Loading')
    const result = await request.getInfomations(`information`, {
      params: {
        limit: limit,
        offset: 0,
        orders: '-publishedAt'
      }
    }).finally(() => {
      setButtonText('View more')
      setIsLoading(false)

      if (localStorage.getItem("scrollInfo")) {
        var scroolY = localStorage.getItem("scrollInfo")?.toString()
        setTimeout(() => scroolTo(scroolY), 250)
      }
    })
    if (result?.contents) {
      setInfos(result.contents)
      setTotalItem(result.totalCount ? result.totalCount : 0)
    }
  }
  const scroolTo = (position: any) => {
    window.scrollTo({
      top: Number(position ? position : 0),
      behavior: 'smooth',
    });
  }
  useEffect(() => {
    setIsLoading(true)
    getInfomations(pageSize);
  }, [])
  return (
    <div className='tb-infomation margin-negative-5rem'>
      <div id="info-list-tb" className='list-info-data'>
        {
          infos.map((info: IInfos) => {
            return (<div className="item flex" key={info.id} onClick={() => { router.push('infomation/' + info.id); onScroll() }}>
              <p className="flex-1 time">{formatData.FormatDate(info.publishedAt)}</p>
              <p className="flex-1 type">LIVE</p>
              <p className="flex-1 title">{info.title}</p>
            </div>)
          })
        }
        <div className={'button-group pt-14' + (infos.length == totalItem ? ' hidden' : '')}>
          <button onClick={loadMoreItem}>{buttonText}</button>
        </div>
      </div>
      <Overlay isLoading={isLoading} />
    </div>
  )
};

export { TableInfoList };
