const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      // -------- Colors -----------
      '@info-color': '@primary-color',
      '@success-color': '@green-6',
      '@processing-color': '@blue-6',
      '@error-color': '@red-5',
      '@highlight-color': '@red-5',
      '@warning-color': '@gold-6',
      '@normal-color': '#d9d9d9',
      '@white': '#fff',
      '@black': '#000',
      '@primary-color': '#abc4ff',
      '@active-color': '#edf2fb',

      '@text-color': 'fade(@black, 85%)',
      '@text-color-secondary': 'fade(@black, 35%)',
      '@text-color-inverse': '@white',
      '@icon-color': 'inherit',
      '@icon-color-hover': 'fade(@black, 75%)',
      '@heading-color': 'fade(@black, 85%)',
      '@text-color-dark': 'fade(@white, 85%)',
      '@text-color-secondary-dark': 'fade(@white, 65%)',

      // Background color for `<body>`
      '@body-background': '#f0f2f5',
      // Base background color for most components
      '@component-background': '#f0f2f5',
      // Popover background color
      '@popover-background': '@component-background',

      // Descriptions
      '@descriptions-bg': '#9fb1bc',

      // Menu
      // ---
      '@menu-inline-toplevel-item-height': '40px',
      '@menu-item-height': '30px',
      '@menu-item-group-height': '@line-height-base',
      '@menu-collapsed-width': '80px',
      '@menu-bg': '@component-background',
      '@menu-popup-bg': '@component-background',
      '@menu-item-color': '@text-color-secondary',
      '@menu-highlight-color': '@primary-color',
      '@menu-highlight-danger-color': '@error-color',
      '@menu-item-active-bg': '@active-color',
      '@menu-item-active-danger-bg': '@red-1',
      '@menu-item-active-border-width': '0px',
      '@menu-item-group-title-color': '@text-color-secondary',
      '@menu-item-vertical-margin': '4px',
      '@menu-item-font-size': '@font-size-base',
      '@menu-item-boundary-margin': '8px',
      '@menu-item-padding': '0 20px',
      '@menu-horizontal-line-height': '46px',
      '@menu-icon-margin-right': '10px',
      '@menu-icon-size': '@menu-item-font-size',
      '@menu-icon-size-lg': '@font-size-lg',
      '@menu-item-group-title-font-size': '@menu-item-font-size',
    },
  }),
);
