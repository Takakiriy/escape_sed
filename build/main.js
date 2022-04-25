"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.programOptions = exports.programArguments = exports.stdout = exports.callMainFromJest = exports.println = exports.escapeAfter = exports.escapeBefore = exports.main = void 0;
var lib = require("./lib");
var lib_1 = require("./lib");
// main
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var lineNum, before, after;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    locale = Intl.NumberFormat().resolvedOptions().locale;
                    if ('locale' in exports.programOptions) {
                        locale = exports.programOptions.locale;
                    }
                    return [4 /*yield*/, lib.input('lineNum>')];
                case 1:
                    lineNum = _a.sent();
                    return [4 /*yield*/, lib.input('before>')];
                case 2:
                    before = _a.sent();
                    return [4 /*yield*/, lib.input('after>')];
                case 3:
                    after = _a.sent();
                    console.log('');
                    if (lineNum) {
                        console.log("# line: " + lineNum);
                        lineNum += ' ';
                    }
                    console.log("# before: " + before);
                    console.log("# after:  " + after);
                    before = escapeBefore(before);
                    after = escapeAfter(after);
                    console.log("_c=\"$(sed \"" + lineNum + "s/" + before + "/" + after + "/g\"  \"${file_path}\" )\";  echo \"$_c\" > \"${file_path}\";  unset _c");
                    return [2 /*return*/];
            }
        });
    });
}
exports.main = main;
// escapeBefore
function escapeBefore(unescaped) {
    var before = unescaped;
    before = before.replace(/\\/g, '\\\\\\\\'); // \ => \\\\
    before = before.replace(/\//g, '\\\\/'); // / => \\/
    before = before.replace(/\$/g, '\\$'); // $ => \$
    before = before.replace(/"/g, '\\"'); // " => \"
    before = before.replace(/\*/g, '\\*'); // * => \*
    before = before.replace(/\./g, '\\\\.'); // . => \\.
    before = before.replace(/\^/g, '\\\\^'); // ^ => \\^
    before = before.replace(/\[/g, '\\\\['); // [ => \\[
    before = before.replace(/\]/g, '\\\\]'); // ] => \\]
    var escaped = before;
    return escaped;
}
exports.escapeBefore = escapeBefore;
// escapeAfter
function escapeAfter(unescaped) {
    var after = unescaped;
    after = after.replace(/\\/g, '\\\\\\\\'); // \ => \\\\
    after = after.replace(/\//g, '\\\\/'); // / => \\/
    after = after.replace(/\$/g, '\\$'); // $ => \$
    after = after.replace(/"/g, '\\"'); // " => \"
    var escaped = after;
    return escaped;
}
exports.escapeAfter = escapeAfter;
// getStdOut
// Example:
//    var d = getStdOut();  // Set break point here and watch the variable d
function getStdOut() {
    return exports.stdout.split('\n');
}
// println
// #keyword: println, console.log, consoleLog
// Output any text to standard output.
function println(message, delayedExpanding) {
    if (delayedExpanding === void 0) { delayedExpanding = false; }
    if (typeof message === 'object' && !delayedExpanding) {
        message = JSON.stringify(message);
    }
    if (withJest && !delayedExpanding) {
        exports.stdout += message.toString() + '\n';
        lib_1.pp(message.toString());
    }
    else {
        consoleLog(message);
    }
}
exports.println = println;
var consoleLog = console.log;
console.log = println;
// callMainFromJest
// #keyword: callMainFromJest
function callMainFromJest(parameters, options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    withJest = true;
                    exports.stdout = '';
                    if (parameters) {
                        exports.programArguments = parameters;
                    }
                    else {
                        exports.programArguments = [];
                    }
                    if (options) {
                        exports.programOptions = options;
                    }
                    else {
                        exports.programOptions = {};
                    }
                    return [4 /*yield*/, main()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.callMainFromJest = callMainFromJest;
var locale = '';
var withJest = false;
exports.stdout = '';
exports.programArguments = [];
exports.programOptions = {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDJCQUE2QjtBQUM3Qiw2QkFBMkI7QUFFM0IsT0FBTztBQUNQLFNBQXVCLElBQUk7Ozs7OztvQkFDdkIsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0JBQ3RELElBQUksUUFBUSxJQUFJLHNCQUFjLEVBQUU7d0JBQzVCLE1BQU0sR0FBRyxzQkFBYyxDQUFDLE1BQU0sQ0FBQztxQkFDbEM7b0JBRWMscUJBQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBQTs7b0JBQXJDLE9BQU8sR0FBRyxTQUEyQjtvQkFDNUIscUJBQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBQTs7b0JBQW5DLE1BQU0sR0FBRyxTQUEwQjtvQkFDM0IscUJBQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBQTs7b0JBQWpDLEtBQUssR0FBRyxTQUF5QjtvQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxPQUFPLEVBQUU7d0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFXLE9BQVMsQ0FBQyxDQUFDO3dCQUNsQyxPQUFPLElBQUksR0FBRyxDQUFDO3FCQUNsQjtvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWEsTUFBUSxDQUFDLENBQUM7b0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBYSxLQUFPLENBQUMsQ0FBQztvQkFFbEMsTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDOUIsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFFM0IsT0FBTyxDQUFDLEdBQUcsQ0FB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QUFPLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQ2hDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO0FBRXRCLG1CQUFtQjtBQUNuQiw2QkFBNkI7QUFDN0IsU0FBdUIsZ0JBQWdCLENBQUMsVUFBcUIsRUFBRSxPQUFrQzs7Ozs7b0JBQzdGLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ2hCLGNBQU0sR0FBRyxFQUFFLENBQUM7b0JBQ1osSUFBSSxVQUFVLEVBQUU7d0JBQ1osd0JBQWdCLEdBQUcsVUFBVSxDQUFDO3FCQUNqQzt5QkFBTTt3QkFDSCx3QkFBZ0IsR0FBRyxFQUFFLENBQUM7cUJBQ3pCO29CQUNELElBQUksT0FBTyxFQUFFO3dCQUNULHNCQUFjLEdBQUcsT0FBTyxDQUFDO3FCQUM1Qjt5QkFBTTt3QkFDSCxzQkFBYyxHQUFHLEVBQUUsQ0FBQztxQkFDdkI7b0JBRUQscUJBQU0sSUFBSSxFQUFFLEVBQUE7O29CQUFaLFNBQVksQ0FBQzs7Ozs7Q0FDaEI7QUFmRCw0Q0FlQztBQUVELElBQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNuQixJQUFPLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDWixRQUFBLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDWixRQUFBLGdCQUFnQixHQUFhLEVBQUUsQ0FBQztBQUNoQyxRQUFBLGNBQWMsR0FBeUIsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiOyAgLy8gb3IgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpXHJcbmltcG9ydCAqIGFzIHJlYWRsaW5lIGZyb20gJ3JlYWRsaW5lJztcclxuaW1wb3J0ICogYXMgbGliIGZyb20gXCIuL2xpYlwiO1xyXG5pbXBvcnQgeyBwcCB9IGZyb20gXCIuL2xpYlwiO1xyXG5cclxuLy8gbWFpblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gIG1haW4oKSB7XHJcbiAgICBsb2NhbGUgPSBJbnRsLk51bWJlckZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLmxvY2FsZTtcclxuICAgIGlmICgnbG9jYWxlJyBpbiBwcm9ncmFtT3B0aW9ucykge1xyXG4gICAgICAgIGxvY2FsZSA9IHByb2dyYW1PcHRpb25zLmxvY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgIGxpbmVOdW0gPSBhd2FpdCBsaWIuaW5wdXQoJ2xpbmVOdW0+Jyk7XHJcbiAgICBsZXQgIGJlZm9yZSA9IGF3YWl0IGxpYi5pbnB1dCgnYmVmb3JlPicpO1xyXG4gICAgbGV0ICBhZnRlciA9IGF3YWl0IGxpYi5pbnB1dCgnYWZ0ZXI+Jyk7XHJcbiAgICBjb25zb2xlLmxvZygnJyk7XHJcbiAgICBpZiAobGluZU51bSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAjIGxpbmU6ICR7bGluZU51bX1gKTtcclxuICAgICAgICBsaW5lTnVtICs9ICcgJztcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGAjIGJlZm9yZTogJHtiZWZvcmV9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhgIyBhZnRlcjogICR7YWZ0ZXJ9YCk7XHJcblxyXG4gICAgYmVmb3JlID0gZXNjYXBlQmVmb3JlKGJlZm9yZSk7XHJcbiAgICBhZnRlciA9IGVzY2FwZUFmdGVyKGFmdGVyKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgX2M9XCIkKHNlZCBcIiR7bGluZU51bX1zLyR7YmVmb3JlfS8ke2FmdGVyfS9nXCIgIFwiXFwke2ZpbGVfcGF0aH1cIiApXCI7ICBlY2hvIFwiJF9jXCIgPiBcIlxcJHtmaWxlX3BhdGh9XCI7ICB1bnNldCBfY2ApO1xyXG59XHJcblxyXG4vLyBlc2NhcGVCZWZvcmVcclxuZXhwb3J0IGZ1bmN0aW9uICBlc2NhcGVCZWZvcmUodW5lc2NhcGVkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgdmFyICBiZWZvcmUgPSB1bmVzY2FwZWQ7XHJcbiAgICBiZWZvcmUgPSBiZWZvcmUucmVwbGFjZSgvXFxcXC9nLCAnXFxcXFxcXFxcXFxcXFxcXCcpOyAgLy8gXFwgPT4gXFxcXFxcXFxcclxuICAgIGJlZm9yZSA9IGJlZm9yZS5yZXBsYWNlKC9cXC8vZywgJ1xcXFxcXFxcLycpOyAgICAgLy8gLyA9PiBcXFxcL1xyXG4gICAgYmVmb3JlID0gYmVmb3JlLnJlcGxhY2UoL1xcJC9nLCAnXFxcXCQnKTsgICAgLy8gJCA9PiBcXCRcclxuICAgIGJlZm9yZSA9IGJlZm9yZS5yZXBsYWNlKC9cIi9nLCAgJ1xcXFxcIicpOyAgICAvLyBcIiA9PiBcXFwiXHJcbiAgICBiZWZvcmUgPSBiZWZvcmUucmVwbGFjZSgvXFwqL2csICdcXFxcKicpOyAgICAvLyAqID0+IFxcKlxyXG4gICAgYmVmb3JlID0gYmVmb3JlLnJlcGxhY2UoL1xcLi9nLCAnXFxcXFxcXFwuJyk7ICAvLyAuID0+IFxcXFwuXHJcbiAgICBiZWZvcmUgPSBiZWZvcmUucmVwbGFjZSgvXFxeL2csICdcXFxcXFxcXF4nKTsgIC8vIF4gPT4gXFxcXF5cclxuICAgIGJlZm9yZSA9IGJlZm9yZS5yZXBsYWNlKC9cXFsvZywgJ1xcXFxcXFxcWycpOyAgLy8gWyA9PiBcXFxcW1xyXG4gICAgYmVmb3JlID0gYmVmb3JlLnJlcGxhY2UoL1xcXS9nLCAnXFxcXFxcXFxdJyk7ICAvLyBdID0+IFxcXFxdXHJcbiAgICBjb25zdCAgZXNjYXBlZCA9IGJlZm9yZTtcclxuICAgIHJldHVybiAgZXNjYXBlZDtcclxufVxyXG5cclxuLy8gZXNjYXBlQWZ0ZXJcclxuZXhwb3J0IGZ1bmN0aW9uICBlc2NhcGVBZnRlcih1bmVzY2FwZWQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICB2YXIgIGFmdGVyID0gdW5lc2NhcGVkO1xyXG4gICAgYWZ0ZXIgPSBhZnRlci5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXFxcXFxcXFxcJyk7ICAvLyBcXCA9PiBcXFxcXFxcXFxyXG4gICAgYWZ0ZXIgPSBhZnRlci5yZXBsYWNlKC9cXC8vZywgJ1xcXFxcXFxcLycpOyAgICAgLy8gLyA9PiBcXFxcL1xyXG4gICAgYWZ0ZXIgPSBhZnRlci5yZXBsYWNlKC9cXCQvZywgJ1xcXFwkJyk7ICAvLyAkID0+IFxcJFxyXG4gICAgYWZ0ZXIgPSBhZnRlci5yZXBsYWNlKC9cIi9nLCAgJ1xcXFxcIicpOyAgLy8gXCIgPT4gXFxcIlxyXG4gICAgY29uc3QgIGVzY2FwZWQgPSBhZnRlcjtcclxuICAgIHJldHVybiAgZXNjYXBlZDtcclxufVxyXG5cclxuLy8gZ2V0U3RkT3V0XHJcbi8vIEV4YW1wbGU6XHJcbi8vICAgIHZhciBkID0gZ2V0U3RkT3V0KCk7ICAvLyBTZXQgYnJlYWsgcG9pbnQgaGVyZSBhbmQgd2F0Y2ggdGhlIHZhcmlhYmxlIGRcclxuZnVuY3Rpb24gIGdldFN0ZE91dCgpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gIHN0ZG91dC5zcGxpdCgnXFxuJyk7XHJcbn1cclxuXHJcbi8vIHByaW50bG5cclxuLy8gI2tleXdvcmQ6IHByaW50bG4sIGNvbnNvbGUubG9nLCBjb25zb2xlTG9nXHJcbi8vIE91dHB1dCBhbnkgdGV4dCB0byBzdGFuZGFyZCBvdXRwdXQuXHJcbmV4cG9ydCBmdW5jdGlvbiAgcHJpbnRsbihtZXNzYWdlOiBhbnksIGRlbGF5ZWRFeHBhbmRpbmc6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSAnb2JqZWN0JyAmJiAhZGVsYXllZEV4cGFuZGluZykge1xyXG4gICAgICAgIG1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIGlmICh3aXRoSmVzdCAmJiAhZGVsYXllZEV4cGFuZGluZykge1xyXG4gICAgICAgIHN0ZG91dCArPSBtZXNzYWdlLnRvU3RyaW5nKCkgKyAnXFxuJztcclxuICAgICAgICBwcChtZXNzYWdlLnRvU3RyaW5nKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlTG9nKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0ICBjb25zb2xlTG9nID0gY29uc29sZS5sb2c7XHJcbmNvbnNvbGUubG9nID0gcHJpbnRsbjtcclxuXHJcbi8vIGNhbGxNYWluRnJvbUplc3RcclxuLy8gI2tleXdvcmQ6IGNhbGxNYWluRnJvbUplc3RcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uICBjYWxsTWFpbkZyb21KZXN0KHBhcmFtZXRlcnM/OiBzdHJpbmdbXSwgb3B0aW9ucz86IHtbbmFtZTogc3RyaW5nXTogc3RyaW5nfSkge1xyXG4gICAgd2l0aEplc3QgPSB0cnVlO1xyXG4gICAgc3Rkb3V0ID0gJyc7XHJcbiAgICBpZiAocGFyYW1ldGVycykge1xyXG4gICAgICAgIHByb2dyYW1Bcmd1bWVudHMgPSBwYXJhbWV0ZXJzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9ncmFtQXJndW1lbnRzID0gW107XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgIHByb2dyYW1PcHRpb25zID0gb3B0aW9ucztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvZ3JhbU9wdGlvbnMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBtYWluKCk7XHJcbn1cclxuXHJcbnZhciAgICBsb2NhbGUgPSAnJztcclxudmFyICAgIHdpdGhKZXN0ID0gZmFsc2U7XHJcbmV4cG9ydCB2YXIgIHN0ZG91dCA9ICcnO1xyXG5leHBvcnQgdmFyICBwcm9ncmFtQXJndW1lbnRzOiBzdHJpbmdbXSA9IFtdO1xyXG5leHBvcnQgdmFyICBwcm9ncmFtT3B0aW9uczoge1trZXk6IHN0cmluZ106IGFueX0gPSB7fTtcclxuIl19