"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListLocales_1 = require("./list-locales/ListLocales");
;
function emptyExecutor() {
    console.log('No executor found.');
}
exports.emptyExecutor = emptyExecutor;
;
const commands = new Map([
    ['ListLocales', new ListLocales_1.ListLocales()]
]);
exports.handleCommand = function (name) {
    return commands.get(name).execute || emptyExecutor;
};
//# sourceMappingURL=command-handler.js.map