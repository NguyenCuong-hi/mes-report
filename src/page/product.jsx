import { Col, Layout, Row } from "antd";
import TableProduct from "../layouts/table/tableproduct";
import ProductAction from "../layouts/actions/productaction";

const Product = () => {

    const rowLayout = {
        justify: "center",
        align: "middle",
      };

    return (
        <>

            <Layout className="product" style={{ minHeight: "100vh", background: "#f7f9fc" }}>
                <Row justify={rowLayout.justify} align={rowLayout.align} style={{ minHeight: "20vh" }}>
                    <Col xs={22} sm={16} md={12} lg={8} className="welcome-section">
                        
                        <ProductAction />
                    </Col>
                </Row>

                <Row justify={rowLayout.justify} align={rowLayout.align} style={{ minHeight: "80vh" }}>
                    <Col xs={22} sm={20} md={18} lg={16}>
                        <TableProduct />
                    </Col>
                </Row>
            </Layout>
        </>

    )
}

export default Product;