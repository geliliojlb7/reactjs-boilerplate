import React from "react";
import { Button, Typography } from "antd";

const { Title } = Typography;
const Home = () => (
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
        <Button type="primary" shape="round">
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
    </div>
);

export default Home;
