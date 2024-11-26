import { DesktopOutlined, FileOutlined, PieChartFilled, TeamOutlined, UserOutlined } from "@ant-design/icons";
import {Layout, Menu, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const getItem = (label, key, icon, children, path) => ({

    key,
    icon,
    children,
    label,
    path,

});
const items = [
    getItem('Move In', '1', <PieChartFilled />, null, 'menu/move-in'),
    getItem('Move Out', '2', <DesktopOutlined />, null, 'menu/move-in'),
    getItem('Kitting', 'sub1', <UserOutlined />, [
        getItem('Tom', '3', null, null, '/move-in'),
        getItem('Bill', '4', null, null, '/move-in'),
        getItem('Alex', '5', null, null, '/move-in'),
    ], null),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6', null, null, '/move-in'), getItem('Team 2', '8', null, null, '/move-in')], null),
    getItem('Files', '9', <FileOutlined />, null, '/move-in'),
];

const SideBar = () => {

    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(true);

    const onClickItem = ({ key }) => {
        const menuItem = items.find((item) => item.key === key || (item.children || []).find((child) => child.key === key));
        if (menuItem?.path) {
            navigate(menuItem.path);
        }
    };

    const {
        token: { colorBgContainer, borderRadiusLG }
    } = theme.useToken();



    return (
        <>
            <Layout style={{ minHeight: '100vh' }} >

                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <Menu onClick={onClickItem} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>

                <Content style={{ margin: '16px 0' }}>
                    <div
                        style={{
                            padding: 10,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>

            </Layout>
        </>
    )
};

export default SideBar;