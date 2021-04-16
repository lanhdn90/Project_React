import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Dropdown, Button, message } from 'antd';
import { LoginOutlined, ProfileOutlined , UserOutlined } from '@ant-design/icons';


import "./header.css"
import history from '../../../utils/history';
import { ROUTERS } from '../../../constants/router';

function Header(props) {
    
    function handleMenuClick(e) {
        const path = `${e.key}`;
        console.log("🚀 ~ file: Header.jsx ~ line 15 ~ handleMenuClick ~ path", path)
        history.push(path);
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key={ROUTERS.INFORMATION} name="1" icon={<ProfileOutlined  />}>
                1st menu item
            </Menu.Item>
            <Menu.Item key={ROUTERS.LOGIN} name="2" icon={<LoginOutlined  />}>
                Login Out
            </Menu.Item>
        </Menu>
    );

    const { Header } = Layout;
    return (
        <Header className="header_nav">
            <div className="logo" />
            <Dropdown   overlay={menu}>
                <Button className="userName" placement="bottomRight" icon={<UserOutlined />}>
                    Lanhdn90@gmail.com
                </Button>
            </Dropdown>
        </Header>
    );
}

export default Header;