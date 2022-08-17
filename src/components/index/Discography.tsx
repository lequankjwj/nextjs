import React from 'react';

const Discography = () => (
  <div className='discography-infomation'>
    <div className='flex'>
      <div className='flex-1 infomation'>
        <div className="title"><a href="">Shinshoku</a></div>
        <div className="short-des">逆針 SAKABARI
          2022.6.15  Release</div>
        <div className="description">Shinshokuの初のCD。簡単なここに入れます。簡単なここに入れます。簡単なここに入れます。簡単なここに入れます。簡単なここに入れます。簡単なここに入れます。簡単なここに入れます。簡単なここに入れます。簡単なここに入れます。簡単なここに入れます。</div>
      </div>
      <div className='flex-1 image'>
        <div className="avatar">
          <a href="">
            <img src="./assets/images/pride.png" alt="" />
          </a>
          <span>NEW</span>
        </div>
      </div>
    </div>
    <div className='button-group'>
      <button>View All</button>
    </div>
  </div>
);

export { Discography };
