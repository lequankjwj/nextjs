import React from 'react';

type IHeaderTitle = {
  title: String;
};
const HeaderTitle = (props: IHeaderTitle) => (
  <div className="header-title">
    <h2 className='title'><a href="">{props.title}</a></h2>
    <div className='divided'>
      <span></span>
    </div>
  </div>
);

export { HeaderTitle };
