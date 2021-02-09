import React from "react";
import { Button } from "antd";

const Home = () => (
    <div>
        <Button type="dashed" shape="round">
            Dashed
        </Button>
        <Button type="default" shape="round">
            Default
        </Button>
        <Button type="ghost" shape="round">
            Ghost
        </Button>
        <Button type="link" shape="round">
            Link
        </Button>
        <Button type="primary" shape="round">
            Primary
        </Button>
        <Button type="text" shape="round">
            Text
        </Button>
    </div>
);

export default Home;
