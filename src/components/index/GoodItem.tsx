import React from 'react';

const GoodItem = () => (
  <div>
    <div className="good-list flex mt-14">
      <a href="">
        <div className="item flex-1">
          <img src="./assets/images/good1.png" alt="" />
          <p className="title">月刊とおま−２</p>
          <p className="price">¥2,200（税込）</p>
        </div>
      </a>
      <a href="">
        <div className="item flex-1">
          <img src="./assets/images/good2.png" alt="" />
          <p className="title">超次元トリッパー☆イシュ
            タール オリジナルペンライト</p>
          <p className="price">¥2,500（税込）</p>
        </div>
      </a>
      <a href="">
        <div className="item flex-1">
          <img src="./assets/images/good3.png" alt="" />
          <p className="title">超次元トリッパー☆イシュ
            タール ライブタオル</p>
          <p className="price">¥2,500（税込）</p>
        </div>
      </a>
      <a href="">
        <div className="item flex-1">
          <img src="./assets/images/good4.png" alt="" />
          <p className="title">Shinshoku ライブタオル</p>
          <p className="price">¥2,500（税込）</p>
        </div>
      </a>
    </div>
    <div className='button-group mt-14'>
      <button>View All</button>
    </div>
  </div>
);

export { GoodItem };
