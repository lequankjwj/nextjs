import React from 'react';
type IHeaderSubcript = {
 logoUrl: string,
 bannerUrl: string
}
const HeaderSubcriptLogo = (props: IHeaderSubcript) => (
  <div className="header-toma-subcription">
    <img src={props.logoUrl} alt="" className="logo mb-10" />
    <img src={props.bannerUrl} alt="" className="banner" />
  </div>
);

export { HeaderSubcriptLogo };
