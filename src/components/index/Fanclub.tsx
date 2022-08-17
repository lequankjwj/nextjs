import React from 'react';

const FanClub = () => (
  <div className="fanclub-infomation">
    <div className="container-fluid">
      <h3 className="title">TOMA SOURCE  OFFICIAL FAN CLUB</h3>
      <img src="./assets/images/toma-box-lg.png" alt="" className='mt-5 pc-bt-lg'/>
      <img src="./assets/images/toma-bt-lg-mobile.png" alt="" className='mt-5 mb-bt-lg'/>
      <p className='description'>總水とおまと “あなた” を繋ぐオフィシャルファンクラブです！
        ご入会いただくと、専用サイトへのアクセスをはじめとする、
        様々な特典をご利用いただけます。</p>
      <div className="group-button flex">
        <div className="flex-1">
          <button>TOMA BOX特典紹介・入会</button>
        </div>
        <div className="flex-1">
          <button>ログイン</button>
        </div>
      </div>
    </div>
  </div>
);

export { FanClub };
