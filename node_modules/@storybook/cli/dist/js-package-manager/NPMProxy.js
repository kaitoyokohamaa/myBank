"use strict";

require("core-js/modules/es.array.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NPMProxy = void 0;

var _JsPackageManager = require("./JsPackageManager");

class NPMProxy extends _JsPackageManager.JsPackageManager {
  constructor(...args) {
    super(...args);
    this.type = 'npm';
  }

  initPackageJson() {
    return this.executeCommand('npm', ['init', '-y']);
  }

  getRunStorybookCommand() {
    return 'npm run storybook';
  }

  getRunCommand(command) {
    return `npm run ${command}`;
  }

  runInstall() {
    this.executeCommand('npm', ['install'], 'inherit');
  }

  runAddDeps(dependencies, installAsDevDependencies) {
    let args = [...dependencies];

    if (installAsDevDependencies) {
      args = ['-D', ...args];
    }

    this.executeCommand('npm', ['install', ...args], 'inherit');
  }

  runGetVersions(packageName, fetchAllVersions) {
    const args = [fetchAllVersions ? 'versions' : 'version', '--json'];
    const commandResult = this.executeCommand('npm', ['info', packageName, ...args]);

    try {
      const parsedOutput = JSON.parse(commandResult);

      if (parsedOutput.error) {
        // FIXME: improve error handling
        throw new Error(parsedOutput.error.summary);
      } else {
        return parsedOutput;
      }
    } catch (e) {
      throw new Error(`Unable to find versions of ${packageName} using yarn`);
    }
  }

}

exports.NPMProxy = NPMProxy;