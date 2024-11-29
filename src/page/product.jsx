import { Button, Col, Layout, Row } from "antd";
import TableProduct from "../layouts/table/tableproduct";
import ProductAction from "../layouts/actions/productaction";

const Product = () => {

    const rowLayout = {
        justify: "center",
        align: "middle",
    };


    const fetchLabel = async () => {
        const zplcode = `
            ^XA
    
                ^FX Top section with logo, name and address.
                ^CF0,60
                ^FO50,50^GB100,100,100^FS
                ^FO75,75^FR^GB100,100,100^FS
                ^FO93,93^GB40,40,40^FS
                ^FO220,50^FDIntershipping, Inc.^FS
                ^CF0,30
                ^FO220,115^FD1000 Shipping Lane^FS
                ^FO220,155^FDShelbyville TN 38102^FS
                ^FO220,195^FDUnited States (USA)^FS
                ^FO50,250^GB700,3,3^FS
                ^XZ
            `;
        const formdata = new FormData();
        formdata.append(
            'file', zplcode
        );


        const options = {
            method: 'POST',
            body: formdata,
        };

        console.log(formdata);

        const response = await fetch(
            `https://api.labelary.com/v1/printers/6dpmm/labels/6x2/0/`,
            options
        );
        const imageUrl = await response.blob();

        return URL.createObjectURL(imageUrl);
    };

    const constbtn = async () => {

        const objectUrls = await Promise.all([fetchLabel(), fetchLabel(), fetchLabel()]);

        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        const doc = iframe.contentDocument || iframe.contentWindow.document;

        doc.open();
        doc.write(`
        <style>
            @page {
                size: 6cm 2cm;
                margin: 0;
            }
            body {
                margin: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .label {
                width: 6cm;
                height: 2cm;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0;
                page-break-after: always;
            }
            img {
                width: 100%;
                height: 100%;
            }
        </style>
    `);

        objectUrls.forEach((url) => {
            doc.write(`
            <div class="label">
                <img src="${url}" alt="Label">
            </div>
        `);
        });

        doc.close();

        iframe.onload = () => {
            iframe.contentWindow.focus();
            iframe.contentWindow.print();

            setTimeout(() => {
                document.body.removeChild(iframe);
                objectUrls.forEach((url) => URL.revokeObjectURL(url));
            }, 1000);
        };


    };

    return (
        <>

            <Layout className="product" style={{ minHeight: "100vh", background: "#f7f9fc" }}>
                <Row justify={rowLayout.justify} align={rowLayout.align} style={{ minHeight: "20vh" }}>
                    <Col xs={22} sm={16} md={12} lg={8} className="welcome-section">

                        <ProductAction />

                        <Button onClick={constbtn}>Print</Button>
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