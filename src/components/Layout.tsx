import React from 'react';
import { Layout as LayoutAntd, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import "./Styles/LayoutStyle.css"
const { Content } = LayoutAntd;

const Layout: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <LayoutAntd className='Layout'>
            <Navigation />

            <hr />
            <Content className='Main'
                style={{
                    backgroundColor: 'black',
                    padding: '30px 48px',
                }}>
                <div
                    style={{
                        background: colorBgContainer,
                        padding: 24,
                        backgroundColor: 'darkgray',
                        borderRadius: borderRadiusLG,
                    }}>
                    {/* show component based on active link */}
                    <Outlet />
                </div>
            </Content>

            <Footer />
        </LayoutAntd>
    )
}

export default Layout;