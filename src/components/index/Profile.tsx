import React from 'react';

const Profile = () => (
  <div className='profile-info flex'>
    <div className='flex-1 avatar'>
      <a href="">
        <img src="./assets/images/profile-avatar.png" alt="" />
      </a>
      <p>about Toma</p>
    </div>
    <div className='flex-1 infomation'>
      <div className='item'>
        <div className='vintage-frame'>
          <p>超次元トリッパー★イシュタール</p>
        </div>
        <div className='mask-frame'>
          <p>Shinshoku</p>
        </div>
      </div>
      <div className='item'>
        <div className='vintage-frame'>
          <p>カミムスヒ</p>
        </div>
        <div className='mask-frame'>
          <p>エメラルドタブレット</p>
        </div>
      </div>
    </div>
  </div>
);

export { Profile };
