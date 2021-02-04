import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Layout } from "antd";
import TopNavs from "../../components/TopNavs";
import navList from "../../navList";
import Routes from "../../components/Routes";
import routes from "../../routes";
import "./defaultLayout.css";

const DefaultLayout = (props) => {
    const { Content, Footer, Sider, Header } = Layout;
    const { isLogin } = props;

    return (
        <Layout>
            <Sider className="sider" trigger={null}>
                <div className="logo" />
                <TopNavs navList={navList} isLogin={isLogin} />
            </Sider>
            <Layout>
                <Header className="site-layout-header"></Header>
                <Content className="site-layout-2">
                    <div className="site-layout-background">
                        <Routes routeList={routes} isLogin={isLogin} />
                    </div>
                </Content>
                <Footer className="site-layout-footer">
                    Rezipt ©2020 Developed by Great Deals E-Commerce Corp.
                </Footer>
            </Layout>
        </Layout>
    );
};

DefaultLayout.propTypes = {
    isLogin: PropTypes.bool.isRequired,
};

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(DefaultLayout);
