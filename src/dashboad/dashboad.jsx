import { Carousel, Col, Layout, Row } from "antd";

const DashBoad = () => {
    const rowLayout = {
        justify: 'top',
        align: 'center',
        style: {
            minHeight: '100vh'
        }
    };

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        
        <Layout className="dashboad" style={{ minHeight: '100vh', background: '#f7f9fc' }}>

            <Row justify={rowLayout.justify} align={rowLayout.align} style={{minHeight: '100vh'}}>
                <Col xs={22} sm={16} md={12} lg={8} className="wellcome-section">
                    <Carousel autoplay>

                        <div>
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>3</h3>
                        </div>

                    </Carousel>
                </Col>
            </Row>

        </Layout>
    );
}

export default DashBoad;