import React from 'react';

const AboutProfile = () => (
  <div className="profile-infomation flex">
    <div className='image flex-1'>
    <a href=""><img src="/assets/images/profile-avatar.png" alt="" /></a>
    </div>
    <div className='detail flex-1'>
      <div className='detail-info'>
        <div className="title"><a href="">總水とおま / Toma Source</a></div>
        <div className="major">歌手・女優・声優</div>
        <div className="description">幼少期から持つ霊的な感性を使い、「見えない世界」からの依頼を受けながら全国各地を回っている。その際に、各土地で感じるエネルギーからインスピレーションを受けて音楽を制作し、６つの音楽プロジェクトをプロデュース。
          神社や寺院、国内外のイベントにて演奏を行う。2015 年から今まで日本全国を回り、2017 年からハワイ、イギリ ス、バリなど海外にも活動の場を広げている。
          その他、CMナレーションやキャラクターボイス、ゲーム音楽などにも携わっている
        </div>
      </div>
    </div>
  </div>
);

export { AboutProfile };
