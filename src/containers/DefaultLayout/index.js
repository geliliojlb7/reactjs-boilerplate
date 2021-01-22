import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import TopNavs from '../../components/TopNavs';
import navList from '../../navList';
import Routes from '../../components/Routes';
import routes from '../../routes';
import "./defaultLayout.css";
// import TempLogo from "../../assets/temp-logo";
// import { logout } from "../Login/actions";

const DefaultLayout = (props) => {
  const { Content, Footer, Sider, Header } = Layout;
  const { isLogin } = props;
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = () => {
	setCollapsed(prevState => !prevState)
  }

  return (
    <Layout>
      <Sider className="sider" trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <TopNavs navList={navList} isLogin={isLogin} />
      </Sider>
      <Layout>
        <Header className="site-layout-header">
            {/* {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: toggleMenu,
              },
            )} */}
        </Header>
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
