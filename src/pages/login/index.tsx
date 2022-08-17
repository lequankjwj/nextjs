import React from 'react';
import { Content } from '../../layout/child-layout/content/Content';
import { MainPrivate } from '../../layout/private/MainPrivate';
import { Meta } from '../../layout/public/Meta';
import { AppConfig } from '../../utils/AppConfig';

const Login = () => (
    <MainPrivate
        meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
    >
        <Content>
            <div className='login container-fluid'>
                <div className="logo">
                    <p className="slogan">TOMA SOURCE  OFFICIAL FAN CLUB</p>
                    <img src="/assets/images/toma-box-lg.png" alt="" />
                </div>
                <div className="form-login">
                    <form action="">
                        <input className='form-control' type="text" placeholder='ログインID' />
                        <input className='form-control' type="password" placeholder='パスワード' />
                        <p><a href="">パスワードを忘れた方はこちら</a></p>
                        <div className="group-button">
                            <button className='login-btn'>ログイン</button>
                            <button className='regis-btn'>新規ご入会の方はこちら</button>
                        </div>
                    </form>
                </div>
            </div>
        </Content>
    </MainPrivate>
);

export default Login;
