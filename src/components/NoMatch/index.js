import React from "react";
import { Result, Button } from "antd";

const NoMatch = () => (
    <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <Button
                onClick={() => window.location.replace("/home")}
                type="primary"
                shape="round"
            >
                Back Home
            </Button>
        }
    />
);

export default NoMatch;
