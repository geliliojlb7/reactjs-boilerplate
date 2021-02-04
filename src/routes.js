import React from "react";
import Loadable from "react-loadable";

// put your routes inside this array.
const routes = [
    {
        name: "Dashboard",
        path: "/dashboard",
        restricted: true,
        authMode: "public",
        exact: true,
        component: Loadable({
            loader: () => import("./containers/Dashboard"),
            loading: () => <div>Loading...</div>,
        }),
    },
    {
        name: "Home",
        path: "/home",
        restricted: true,
        authMode: "private",
        exact: true,
        component: Loadable({
            loader: () => import("./containers/Home"),
            loading: () => <div>Loading...</div>,
        }),
    },
];

export default routes;
