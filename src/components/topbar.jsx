import { UserOutlined } from "@ant-design/icons";
import { Avatar, Typography } from "antd";
import { Header } from "antd/es/layout/layout";



const { Text } = Typography;
const TopBar = () => {

    return (
        <div className="top-bar">
            <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor:'#58b5e4' }}>
                <div style={{ color: "white", fontSize: "1rem", fontWeight: "bold" }}>MES REPORT SYSTEM</div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Avatar icon={<UserOutlined />} />
                    <Text style={{ color: "white" }}> Admin</Text>
                </div>
            </Header>
        </div>
    )

};

export default TopBar;