import React, { ReactNode } from 'react';
import { Footer } from './Footer';

import { Header } from './Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-3 md:px-0">
    {props.meta}
    <div className="body">
      <Header></Header>
      <div className="text-xl margin-top-64">{props.children}</div>
      <Footer></Footer>
    </div>
  </div>
);

export { Main };
