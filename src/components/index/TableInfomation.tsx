import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import * as request from '../../api/infomation/InfomationServices';
import * as formatData from '../../utils/FormatData'
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
const TableInfomation = () => {
  const router = useRouter()
  const [infos, setInfos] = useState([])
  let totalItem = 0
  const openNewTab = () => {
    window.open('/infomation', "_self")
  }
  useEffect(() => {
    const getInfomations = async () => {
      const result = await request.getInfomations(`information`, {
        params: {
          limit: 4,
          offset: 0,
          orders: '-publishedAt'
        }
      })
      if (result?.contents) {
        setInfos(result.contents)
        totalItem = result.totalCount ? result.totalCount : 0
        console.log(totalItem)
      }
    }
    getInfomations()
  }, [])
  return (
    <div className='list-info-data'>
      {
        infos.map((info: IInfos) => {
          return (<div className="item flex" key={info.id} onClick={() => { router.push('infomation/' + info.id)}}>
            <p className="flex-1 time">{formatData.FormatDate(info.publishedAt)}</p>
            <p className="flex-1 type">LIVE</p>
            <p className="flex-1 title">{info.title}</p>
          </div>)
        })
      }

      <div className='button-group pt-14'>
        <button onClick={openNewTab}>View All</button>
      </div>
    </div>
  )
};

export { TableInfomation };
