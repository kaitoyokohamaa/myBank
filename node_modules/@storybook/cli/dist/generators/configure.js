"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

var _fsExtra = _interopRequireDefault(require("fs-extra"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureMain(addons, custom) {
  const prefix = _fsExtra.default.existsSync('./src') ? '../src' : '../stories';
  const config = Object.assign({
    stories: [`${prefix}/**/*.stories.mdx`, `${prefix}/**/*.stories.@(js|jsx|ts|tsx)`],
    addons
  }, custom);
  const stringified = `module.exports = ${JSON.stringify(config, null, 2)}`;

  _fsExtra.default.ensureDirSync('./.storybook');

  _fsExtra.default.writeFileSync('./.storybook/main.js', stringified, {
    encoding: 'utf8'
  });
}

function configurePreview(framework) {
  const parameters = `
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}`;
  const preview = framework === 'angular' ? `
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

${parameters}` : parameters;

  _fsExtra.default.writeFileSync('./.storybook/preview.js', preview, {
    encoding: 'utf8'
  });
}

function configure(framework, addons, custom) {
  _fsExtra.default.ensureDirSync('./.storybook');

  configureMain(addons, custom);
  configurePreview(framework);
}