import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Menu } from "antd";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const TopNavs = (props) => {
    const [selectedMenu, setSelectedMenu] = useState(props.location.pathname);
    const { navList, isLogin } = props;
    const { SubMenu } = Menu;

    const authAccess = isLogin ? "private" : "public";

    useEffect(() => {
        setSelectedMenu(props.location.pathname);
    }, [props.location.pathname]);

    return (
        <>
            <Menu
                mode="inline"
                style={{ lineHeight: "64px", background: "transparent" }}
                // theme="dark"
                selectedKeys={selectedMenu}
                onClick={({ key }) => setSelectedMenu(key)}
            >
                {navList
                    .filter((item) => item.auth === authAccess)
                    .map((item) => {
                        const { name, path, icon, ...rest } = item;

                        if (!_.has(item, "path") && _.has(item, "children")) {
                            const { children } = item;
                            return (
                                <SubMenu title={name}>
                                    {children.map((item) => {
                                        const { name, path, ...rest } = item;
                                        return (
                                            <Menu.Item key={path}>
                                                <NavLink
                                                    to={path}
                                                    {...rest}
                                                    activeClassName="activeLink"
                                                >
                                                    {name}
                                                </NavLink>
                                            </Menu.Item>
                                        );
                                    })}
                                </SubMenu>
                            );
                        }

                        return (
                            <Menu.Item key={path}>
                                <NavLink
                                    to={path}
                                    {...rest}
                                    activeClassName="activeLink"
                                >
                                    {name}
                                </NavLink>
                            </Menu.Item>
                        );
                    })}
            </Menu>
        </>
    );
};

TopNavs.propTypes = {
    navList: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLogin: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
};

export default withRouter(connect(null)(TopNavs));
