import React from "react";
import AcmeLogo from "./AcmeLogo";
import { Layout as LayoutAntd, Menu, MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, InfoCircleOutlined, ProductOutlined, UnorderedListOutlined } from '@ant-design/icons';
import "./Styles/NavStyle.css";

type MenuItem = Required<MenuProps>['items'][number];

const { Header: HeaderAntd } = LayoutAntd;
const menuItems: MenuItem[] = [
    {
        key: "/",
        label: <Link to="/">Home</Link>,
        icon: <HomeOutlined/>
    },
    {
        key: "/products",
        label: <Link to="/slots">Slots</Link>,
        icon: <ProductOutlined/>
    },
    {
        key: "/orders",
        label: <Link to="/">Orders</Link>,
        icon: <UnorderedListOutlined/>
    },
    {
        key: "/about",
        label: <Link to="/about">About</Link>,
        icon: <InfoCircleOutlined/>
    }
]
//Header
const Navigation: React.FC = () => {

    return (
        <HeaderAntd style={{ display: 'flex', alignItems: 'center', background: 'black' }}>
            <div className="logo-align">
                <AcmeLogo/>
            </div>
            <div className="vertical"/>
            <Menu
                style={{
                    background: 'black',
                }}
                theme="dark"
                mode="horizontal"
                items={menuItems}
            />
        </HeaderAntd>
    );
}

export default Navigation;

