const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            "@font-family":
                "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','Noto Color Emoji'",
            // -------- Colors -----------
            "@info-color": "@primary-color",
            "@success-color": "@green-6",
            "@processing-color": "@blue-6",
            "@error-color": "@red-3",
            "@highlight-color": "@red-5",
            "@warning-color": "@gold-6",
            "@normal-color": "#d9d9d9",
            "@white": "#fff",
            "@black": "#4e4c67",
            "@primary-color": "#abc4ff",
            "@active-color": "#edf2fb",

            "@text-color": "fade(@black, 85%)",
            "@text-color-secondary": "fade(@black, 35%)",
            "@text-color-inverse": "@white",
            "@icon-color": "inherit",
            "@icon-color-hover": "fade(@black, 75%)",
            "@heading-color": "fade(@black, 85%)",
            "@text-color-dark": "fade(@white, 85%)",
            "@text-color-secondary-dark": "fade(@white, 65%)",

            // Color used by default to control hover and active backgrounds and for
            // alert info backgrounds.
            "@primary-1": "color(~`colorPalette('@{primary-color}', 1) `)", // replace tint(@primary-color, 90%)
            "@primary-2": "color(~`colorPalette('@{primary-color}', 2) `)", // replace tint(@primary-color, 80%)
            "@primary-3": "color(~`colorPalette('@{primary-color}', 3) `)", // unused
            "@primary-4": "color(~`colorPalette('@{primary-color}', 4) `)", // unused
            "@primary-5": "color(~`colorPalette('@{primary-color}', 5) `)", // color used to control the text color in many active and hover states, replace tint(@primary-color, 20%)
            "@primary-6": "@primary-color", // color used to control the text color of active buttons, don't use, use @primary-color
            "@primary-7": "color(~`colorPalette('@{primary-color}', 7) `)", // replace shade(@primary-color, 5%)
            "@primary-8": "color(~`colorPalette('@{primary-color}', 8) `)", // unused
            "@primary-9": "color(~`colorPalette('@{primary-color}', 9) `)", // unused
            "@primary-10": "color(~`colorPalette('@{primary-color}', 10) `)", // unused

            // Disabled states
            "@disabled-color": "fade(#000, 25%)",
            "@disabled-bg": "@background-color-base",
            "@disabled-color-dark": "fade(#fff, 35%)",

            // LINK
            "@link-color": "@primary-color",
            "@link-hover-color": "color(~`colorPalette('@{link-color}', 5) `)",
            "@link-active-color": "color(~`colorPalette('@{link-color}', 7) `)",

            "@border-color-base": "hsv(0, 0, 85%)", // base border outline a component
            "@border-color-split": "hsv(0, 0, 94%)", // split border inside a component
            "@border-color-inverse": "@white",
            "@border-width-base": "1px", // width of the border for a component
            "@border-style-base": "solid", // style of a components border

            // Background color for `<body>`
            "@body-background": "#f8f7ff",
            // Base background color for most components
            "@component-background": "#f8f7ff",
            // Popover background color
            "@popover-background": "@component-background",

            // Descriptions
            "@descriptions-bg": "#9fb1bc",

            // Menu
            // ---
            "@menu-inline-toplevel-item-height": "40px",
            "@menu-item-height": "30px",
            "@menu-item-group-height": "@line-height-base",
            "@menu-collapsed-width": "80px",
            "@menu-bg": "@component-background",
            "@menu-popup-bg": "@component-background",
            "@menu-item-color": "@text-color-secondary",
            "@menu-highlight-color": "@primary-color",
            "@menu-highlight-danger-color": "@error-color",
            "@menu-item-active-bg": "@active-color",
            "@menu-item-active-danger-bg": "@red-1",
            "@menu-item-active-border-width": "0px",
            "@menu-item-group-title-color": "@text-color-secondary",
            "@menu-item-vertical-margin": "4px",
            "@menu-item-font-size": "@font-size-base",
            "@menu-item-boundary-margin": "8px",
            "@menu-item-padding": "0 20px",
            "@menu-horizontal-line-height": "46px",
            "@menu-icon-margin-right": "10px",
            "@menu-icon-size": "@menu-item-font-size",
            "@menu-icon-size-lg": "@font-size-lg",
            "@menu-item-group-title-font-size": "@menu-item-font-size",

            // Buttons
            "@btn-font-weight": "400",
            "@btn-border-radius-base": "@border-radius-base",
            "@btn-border-radius-sm": "@border-radius-base",
            "@btn-border-width": "@border-width-base",
            "@btn-border-style": "@border-style-base",
            "@btn-shadow": "0 2px 0 rgba(0, 0, 0, 0.015)",
            "@btn-primary-shadow": "0 2px 0 rgba(0, 0, 0, 0.045)",
            "@btn-text-shadow": "0 -1px 0 rgba(0, 0, 0, 0.12)",

            "@btn-primary-color": "#fff",
            "@btn-primary-bg": "@primary-color",

            "@btn-default-color": "@text-color",
            "@btn-default-bg": "@component-background",
            "@btn-default-border": "@border-color-base",

            "@btn-danger-color": "#fff",
            "@btn-danger-bg": "@error-color",
            "@btn-danger-border": "@error-color",

            "@btn-disable-color": "@disabled-color",
            "@btn-disable-bg": "@disabled-bg",
            "@btn-disable-border": "@border-color-base",

            "@btn-default-ghost-color": "@component-background",
            "@btn-default-ghost-bg": "transparent",
            "@btn-default-ghost-border": "@component-background",

            // Table
            // --
            "@table-bg": "@component-background",
            "@table-header-bg": "@background-color-light",
            "@table-header-color": "@heading-color",
            "@table-header-sort-bg": "@background-color-base",
            "@table-body-sort-bg": "#fafafa",
            "@table-row-hover-bg": "@background-color-light",
            "@table-selected-row-color": "inherit",
            "@table-selected-row-bg": "@primary-1",
            "@table-body-selected-sort-bg": "@table-selected-row-bg",
            "@table-selected-row-hover-bg":
                "darken(@table-selected-row-bg, 2%)",
            "@table-expanded-row-bg": "#fbfbfb",
            "@table-border-color": "@border-color-split",
            "@table-border-radius-base": "@border-radius-base",
        },
    }),
);
