"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListLocales_1 = require("./../use-cases/list-locales/ListLocales");
const Command_1 = require("./../use-cases/list-locales/Command");
const FileSystemService_1 = require("./../services/file-system/FileSystemService");
function listLocales(path) {
    path = path || './';
    const listLocales = new ListLocales_1.ListLocales(new FileSystemService_1.FileSystemService());
    listLocales.execute(new Command_1.Command(path), {
        localesFound(files) {
            files.forEach(file => {
                console.log(file);
            });
        },
        cannotGetLocales(e) {
            console.log(e);
        }
    });
}
exports.listLocales = listLocales;
;
//# sourceMappingURL=list-locales.js.map