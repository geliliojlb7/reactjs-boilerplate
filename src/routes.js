import React from "react";
import Loadable from "react-loadable";

// put your routes inside this array.
const routes = [
    // {
    //     name: "Landing",
    //     path: "/",
    //     restricted: true,
    //     authMode: "public",
    //     exact: true,
    //     component: Loadable({
    //         loader: () => import("./containers/Landing"),
    //         loading: () => <div>Loading...</div>,
    //     }),
    // },
    {
        name: "Login",
        path: "/login",
        restricted: true,
        authMode: "public",
        exact: true,
        component: Loadable({
            loader: () => import("./containers/Login"),
            loading: () => <div>Loading...</div>,
        }),
    },
];

export default routes;
