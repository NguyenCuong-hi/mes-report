import Search from "antd/es/transfer/search";

const ProductAction = () => {

    return (
        <>
            <Search
                placeholder="Search"
                onSearch={(value) => console.log(value)}
                enterButton
            />

        </>
    )
};

export default ProductAction;