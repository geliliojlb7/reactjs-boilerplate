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

            "@background-color-light": "hsv(0, 0, 98%)", // background of header and selected item
            "@background-color-base": "fade(@active-color, 50%)", // Default grey background color

            // The background colors for active and hover states for things like
            // list items or table cells.
            "@item-active-bg": "@primary-1",
            "@item-hover-bg": "fade(@active-color, 15%)",

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

            // Input
            // ---
            "@input-placeholder-color": "fade(@text-color-secondary, 25%)",
            "@input-color": "@text-color",
            "@input-icon-color": "@input-color",
            "@input-border-color": "@border-color-base",
            "@input-bg": "@component-background",
            "@input-number-hover-border-color": "@input-hover-border-color",
            "@input-number-handler-active-bg": "#f4f4f4",
            "@input-number-handler-hover-bg": "@primary-5",
            "@input-number-handler-bg": "@component-background",
            "@input-number-handler-border-color": "@border-color-base",
            "@input-addon-bg": "@background-color-light",
            "@input-hover-border-color": "@primary-5",
            "@input-disabled-bg": "@disabled-bg",
            "@input-outline-offset": "0 0",
            "@input-icon-hover-color": "fade(@black, 85%)",
            "@input-disabled-color": "@disabled-color",

            // Checkbox
            "@checkbox-size": "16px",
            "@checkbox-color": "@primary-color",
            "@checkbox-check-color": "@component-background",
            "@checkbox-check-bg": "@checkbox-check-color",
            "@checkbox-border-width": "@border-width-base",
            "@checkbox-group-item-margin-right": "8px",

            // Radio
            "@radio-size": "16px",
            "@radio-top": "0px",
            "@radio-border-width": "1px",
            "@radio-dot-size": "@radio-size - 8px",
            "@radio-dot-color": "@primary-color",
            "@radio-dot-disabled-color": "fade(@black, 20%)",
            "@radio-solid-checked-color": "@component-background",

            // Radio buttons
            "@radio-button-bg": "@btn-default-bg",
            "@radio-button-checked-bg": "@btn-default-bg",
            "@radio-button-color": "@btn-default-color",
            "@radio-button-hover-color": "@primary-5",
            "@radio-button-active-color": "@primary-7",
            "@radio-disabled-button-checked-bg": "tint(@black, 90%)",
            "@radio-disabled-button-checked-color": "@disabled-color",
            "@radio-wrapper-margin-right": "8px",

            // Select
            // ---
            "@select-border-color": "@border-color-base",
            "@select-item-selected-color": "@text-color",
            "@select-dropdown-bg": "@component-background",
            "@select-item-selected-bg": "@primary-1",
            "@select-item-active-bg": "@item-hover-bg",
            "@select-background": "@component-background",
            "@select-clear-background": "@select-background",
            "@select-selection-item-bg": "@background-color-base",
            "@select-selection-item-border-color": "@border-color-split",
            "@select-multiple-disabled-background": "@input-disabled-bg",
            "@select-multiple-item-disabled-color": "#bfbfbf",
            "@select-multiple-item-disabled-border-color":
                "@select-border-color",

            // TimePicker
            // ---
            "@picker-bg": "@component-background",
            "@picker-basic-cell-hover-color": "@item-hover-bg",
            "@picker-basic-cell-active-with-range-color": "@primary-1",
            "@picker-basic-cell-hover-with-range-color":
                "lighten(@primary-color, 35%)",
            "@picker-basic-cell-disabled-bg": "@disabled-bg",
            "@picker-border-color": "@border-color-split",
            "@picker-date-hover-range-border-color":
                "lighten(@primary-color, 20%)",
            "@picker-date-hover-range-color":
                "@picker-basic-cell-hover-with-range-color",

            // Modal
            // --
            "@modal-header-padding-vertical": "@padding-md",
            "@modal-header-padding-horizontal": "@padding-lg",
            "@modal-body-padding": "@padding-lg",
            "@modal-header-bg": "@component-background",
            "@modal-header-padding":
                "@modal-header-padding-vertical @modal-header-padding-horizontal",
            "@modal-header-border-width": "@border-width-base",
            "@modal-header-border-style": "@border-style-base",
            "@modal-header-title-line-height": "22px",
            "@modal-header-title-font-size": "@font-size-lg",
            "@modal-header-border-color-split": "@border-color-split",
            "@modal-header-close-size": "56px",
            "@modal-content-bg": "@component-background",
            "@modal-heading-color": "@heading-color",
            "@modal-close-color": "@text-color-secondary",
            "@modal-footer-bg": "transparent",
            "@modal-footer-border-color-split": "@border-color-split",
            "@modal-footer-border-style": "@border-style-base",
            "@modal-footer-padding-vertical": "10px",
            "@modal-footer-padding-horizontal": "16px",
            "@modal-footer-border-width": "@border-width-base",
            "@modal-mask-bg": "fade(@black, 45%)",
            "@modal-confirm-body-padding": "32px 32px 24px",

            // Message
            // ---
            "@message-notice-content-padding": "10px 16px",
            "@message-notice-content-bg": "@component-background",
        },
    }),
);
