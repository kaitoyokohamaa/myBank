module.exports = {
  stories: ["../src/**/**/*.stories.tsx"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    'storybook-css-modules-preset',
    "@storybook/addon-docs",
    "@storybook/addon-knobs",
    "@storybook/addon-viewport",
    '@storybook/preset-typescript',
    "@storybook/addon-a11y"
  ]
};
