import React from 'react';
import { HeaderLogo } from './HeaderLogo';

const ListPromo = () => (
  <div className="list-toma-infomation">
    <HeaderLogo />
    <div className='list-info'>
    <div className="item subcription right flex">
      <div className="image flex-1">
        <img src="/assets/images/toma-box-2.png" alt="" />
        <img src="/assets/images/toma-box-2.png" alt="" />
      </div>
      <div className="content flex-1">
        <div className="title">会員専用サイトへのアクセス</div>
        <div className="devided"></div>
        <div className="detail">
          会員だけの特別サイト。總水とおまのライブフォトや、ライブ情報、オリジナルコンテンツをご用意しています。
        </div>
      </div>
    </div>
    <div className="item subcription left flex">
      <div className="content flex-1">
        <div className="title">オリジナルグッズプレゼント！</div>
        <div className="devided"></div>
        <div className="detail">
          会員だけの特別サイト。總水とおまのライブフォトや、ライブ情報、オリジナルコンテンツをご用意しています。
        </div>
      </div>
      <div className="image flex-1">
        <img src="/assets/images/toma-box-4.png" alt="" />
      </div>
    </div>
    <div className="item avatar right flex">
      <div className="image avatar flex-1">
        <img src="/assets/images/toma-box-5.png" alt="" />
      </div>
      <div className="content flex-1">
        <div className="title">ファンミーティング参加権</div>
        <div className="devided"></div>
        <div className="detail">
        年に２回予定しているファンミーティング。普段は語られないライブの裏話しや謎解きが聞けるチャンス。總水とおまと深くて楽しい時間を過ごしましょう。
        </div>
      </div>
    </div>
    </div>
    <div className='footer-list-toma'>その他、特典がいっぱいのTOMA BOX！
下記のプランからお選びください。</div>
  </div>
);

export { ListPromo };
