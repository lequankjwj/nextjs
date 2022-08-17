import React from 'react';

const LeftSideMenu = () => (
    <div className="side-menu">
        <div className="list-menu">
            <a href="">TOMA LIVE 2022</a>
            <a href="">共鳴ボイスワークショップ</a>
            <a href="">TOMAの謎解きタイム</a>
            <a href="">トライノルン</a>
            <a href="">ALL EVENT</a>
            <a href="">終了したイベント</a>
        </div>
        <div className="share">
            <span>share</span>
            <div className="social">
                <div className="social-item">
                    <img src="/assets/images/twiter-lg-bl.png" alt="" />
                </div>
                <div className="social-item">
                    <img src="/assets/images/fb-lg-bl.png" alt="" />
                </div>
            </div>
        </div>
    </div>
);

export { LeftSideMenu };
