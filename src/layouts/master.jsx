import { Content } from "antd/es/layout/layout";
import SideBar from "../components/sidebar";
import { Outlet } from "react-router-dom";
import TopBar from '../components/topbar';
import { Layout } from "antd";
const MasterLayout = () => {

    return (
        <>
            <TopBar />
            <SideBar />
                <div className='app-main flex-column flex-row-fluid justify-content-between' id='kt_app_main'>
                    <div className='d-flex flex-column flex-column-fluid'>
                        <Content>
                            <Outlet />
                        </Content>
                    </div>

                </div>

        </>
    )
};

export default MasterLayout;