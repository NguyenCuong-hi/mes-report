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
    getItem('Trang chủ', '1', <PieChartFilled />, null, '/'),
    getItem('Sản phẩm', '2', <PieChartFilled />, null, '/product'),
    getItem('Quản lý quy trình', '3', <DesktopOutlined />, null, 'menu/move-in'),
    getItem('Công đoạn', '4', <DesktopOutlined />, null, 'menu/move-in'),
    getItem('Quản lý trang thiết bị', '5', <FileOutlined />, null, '/move-in'),
    getItem('Trạng thái thiết bị', '6', <FileOutlined />, null, '/move-in'),
    getItem('Phụ kiện', '7', <FileOutlined />, null, '/move-in'),
    getItem('Quản lý nguyên liệu', '8', <FileOutlined />, null, '/move-in'),

];

const SideBar = () => {

    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);

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
            <Layout style={{ minHeight: '100vh', background:'light' }} >

                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <Menu onClick={onClickItem} theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>

                <Content style={{ margin: '16px 0' }}>
                    <div
                        style={{
                            padding: 10,
                            minHeight: '100vh',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                    </div>
                </Content>

            </Layout>
        </>
    )
};

export default SideBar;