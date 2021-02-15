import React, { useState } from "react";
import {
    Button,
    Typography,
    Table,
    Input,
    Radio,
    Select,
    DatePicker,
    Modal,
    message,
} from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";

const { Title } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;
const dataSource = [
    {
        key: "1",
        name: "Mike",
        age: 32,
        address: "10 Downing Street",
    },
    {
        key: "2",
        name: "John",
        age: 42,
        address: "10 Downing Street",
    },
];

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address",
    },
];

const Home = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const success = () => {
        message.success("This is a success message");
    };

    const error = () => {
        message.error("This is an error message");
    };

    const warning = () => {
        message.warning("This is a warning message");
    };
    return (
        <div>
            <Button type="dashed" shape="round">
                Dashed
            </Button>
            <Button type="dashed" danger shape="round">
                Dashed
            </Button>
            <Button type="default" shape="round">
                Default
            </Button>
            <Button type="default" danger shape="round">
                Default
            </Button>
            <Button type="ghost" shape="round">
                Ghost
            </Button>
            <Button type="ghost" danger shape="round">
                Ghost
            </Button>
            <Button type="link" shape="round">
                Link
            </Button>
            <Button type="link" danger shape="round">
                Link
            </Button>
            <Button type="primary" shape="round" onClick={showModal}>
                Primary
            </Button>
            <Button type="primary" danger shape="round">
                Danger
            </Button>
            <Button type="text" shape="round">
                Text
            </Button>
            <Button type="text" danger shape="round">
                Text
            </Button>
            <br />
            <br />
            <Title>h1. Ant Design</Title>
            <Title level={2}>h2. Ant Design</Title>
            <Title level={3}>h3. Ant Design</Title>
            <Title level={4}>h4. Ant Design</Title>
            <Title level={5}>h5. Ant Design</Title>
            <Checkbox>Test</Checkbox>
            <Checkbox disabled>Test</Checkbox>
            <Radio>Test</Radio>
            <Radio disabled>Test</Radio>
            <Radio disabled checked>
                Test
            </Radio>
            <Input placeholder="test" />
            <Input placeholder="test" disabled />
            <Select style={{ width: "250px" }}>
                <Option>Test1</Option>
                <Option disabled>Test2</Option>
                <Option>Test3</Option>
            </Select>
            <DatePicker showTime />
            <RangePicker
                showTime={{ format: "HH:mm" }}
                format="YYYY-MM-DD HH:mm"
            />
            <Button onClick={success}>Success</Button>
            <Button onClick={error}>Error</Button>
            <Button onClick={warning}>Warning</Button>
            <Table dataSource={dataSource} columns={columns} size="small" />
            <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    );
};

export default Home;
