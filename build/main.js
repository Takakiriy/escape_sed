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
                    return [4 /*yield*/, lib.input('lineNum> ')];
                case 1:
                    lineNum = _a.sent();
                    return [4 /*yield*/, lib.input('before> ')];
                case 2:
                    before = _a.sent();
                    return [4 /*yield*/, lib.input('after > ')];
                case 3:
                    after = _a.sent();
                    console.log('');
                    if (lineNum) {
                        console.log("# line: " + lineNum);
                        if (lineNum[0] === '+' || lineNum[0] === '-') {
                            lineNum = '$((${line_num} ' + lineNum[0] + ' ' + lineNum.substring(1) + '))';
                        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDJCQUE2QjtBQUM3Qiw2QkFBMkI7QUFFM0IsT0FBTztBQUNQLFNBQXVCLElBQUk7Ozs7OztvQkFDdkIsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0JBQ3RELElBQUksUUFBUSxJQUFJLHNCQUFjLEVBQUU7d0JBQzVCLE1BQU0sR0FBRyxzQkFBYyxDQUFDLE1BQU0sQ0FBQztxQkFDbEM7b0JBRWMscUJBQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBQTs7b0JBQXRDLE9BQU8sR0FBRyxTQUE0QjtvQkFDN0IscUJBQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBQTs7b0JBQXBDLE1BQU0sR0FBRyxTQUEyQjtvQkFDNUIscUJBQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBQTs7b0JBQW5DLEtBQUssR0FBRyxTQUEyQjtvQkFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxPQUFPLEVBQUU7d0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFXLE9BQVMsQ0FBQyxDQUFDO3dCQUNsQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQU0sT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTs0QkFDNUMsT0FBTyxHQUFHLGlCQUFpQixHQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRSxHQUFHLEdBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRSxJQUFJLENBQUM7eUJBQzVFO3dCQUNELE9BQU8sSUFBSSxHQUFHLENBQUM7cUJBQ2xCO29CQUNE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QUFRLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtRQUMvQixjQUFNLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNwQyxRQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7S0FDMUI7U0FBTTtRQUNILFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUN2QjtBQUNMLENBQUM7QUFWRCwwQkFVQztBQUNELElBQU8sVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7QUFDaEMsT0FBTyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7QUFFdEIsbUJBQW1CO0FBQ25CLDZCQUE2QjtBQUM3QixTQUF1QixnQkFBZ0IsQ0FBQyxVQUFxQixFQUFFLE9BQWtDOzs7OztvQkFDN0YsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDaEIsY0FBTSxHQUFHLEVBQUUsQ0FBQztvQkFDWixJQUFJLFVBQVUsRUFBRTt3QkFDWix3QkFBZ0IsR0FBRyxVQUFVLENBQUM7cUJBQ2pDO3lCQUFNO3dCQUNILHdCQUFnQixHQUFHLEVBQUUsQ0FBQztxQkFDekI7b0JBQ0QsSUFBSSxPQUFPLEVBQUU7d0JBQ1Qsc0JBQWMsR0FBRyxPQUFPLENBQUM7cUJBQzVCO3lCQUFNO3dCQUNILHNCQUFjLEdBQUcsRUFBRSxDQUFDO3FCQUN2QjtvQkFFRCxxQkFBTSxJQUFJLEVBQUUsRUFBQTs7b0JBQVosU0FBWSxDQUFDOzs7OztDQUNoQjtBQWZELDRDQWVDO0FBRUQsSUFBTyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ25CLElBQU8sUUFBUSxHQUFHLEtBQUssQ0FBQztBQUNaLFFBQUEsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNaLFFBQUEsZ0JBQWdCLEdBQWEsRUFBRSxDQUFDO0FBQ2hDLFFBQUEsY0FBYyxHQUF5QixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7ICAvLyBvciBwYXRoID0gcmVxdWlyZShcInBhdGhcIilcclxuaW1wb3J0ICogYXMgcmVhZGxpbmUgZnJvbSAncmVhZGxpbmUnO1xyXG5pbXBvcnQgKiBhcyBsaWIgZnJvbSBcIi4vbGliXCI7XHJcbmltcG9ydCB7IHBwIH0gZnJvbSBcIi4vbGliXCI7XHJcblxyXG4vLyBtYWluXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiAgbWFpbigpIHtcclxuICAgIGxvY2FsZSA9IEludGwuTnVtYmVyRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkubG9jYWxlO1xyXG4gICAgaWYgKCdsb2NhbGUnIGluIHByb2dyYW1PcHRpb25zKSB7XHJcbiAgICAgICAgbG9jYWxlID0gcHJvZ3JhbU9wdGlvbnMubG9jYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCAgbGluZU51bSA9IGF3YWl0IGxpYi5pbnB1dCgnbGluZU51bT4gJyk7XHJcbiAgICBsZXQgIGJlZm9yZSA9IGF3YWl0IGxpYi5pbnB1dCgnYmVmb3JlPiAnKTtcclxuICAgIGxldCAgYWZ0ZXIgPSBhd2FpdCBsaWIuaW5wdXQoJ2FmdGVyID4gJyk7XHJcbiAgICBjb25zb2xlLmxvZygnJyk7XHJcbiAgICBpZiAobGluZU51bSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAjIGxpbmU6ICR7bGluZU51bX1gKTtcclxuICAgICAgICBpZiAobGluZU51bVswXSA9PT0gJysnICB8fCAgbGluZU51bVswXSA9PT0gJy0nKSB7XHJcbiAgICAgICAgICAgIGxpbmVOdW0gPSAnJCgoJHtsaW5lX251bX0gJysgbGluZU51bVswXSArJyAnKyBsaW5lTnVtLnN1YnN0cmluZygxKSArJykpJztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGluZU51bSArPSAnICc7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhgIyBiZWZvcmU6ICR7YmVmb3JlfWApO1xyXG4gICAgY29uc29sZS5sb2coYCMgYWZ0ZXI6ICAke2FmdGVyfWApO1xyXG5cclxuICAgIGJlZm9yZSA9IGVzY2FwZUJlZm9yZShiZWZvcmUpO1xyXG4gICAgYWZ0ZXIgPSBlc2NhcGVBZnRlcihhZnRlcik7XHJcblxyXG4gICAgY29uc29sZS5sb2coYF9jPVwiJChzZWQgXCIke2xpbmVOdW19cy8ke2JlZm9yZX0vJHthZnRlcn0vZ1wiICBcIlxcJHtmaWxlX3BhdGh9XCIgKVwiOyAgZWNobyBcIiRfY1wiID4gXCJcXCR7ZmlsZV9wYXRofVwiOyAgdW5zZXQgX2NgKTtcclxufVxyXG5cclxuLy8gZXNjYXBlQmVmb3JlXHJcbmV4cG9ydCBmdW5jdGlvbiAgZXNjYXBlQmVmb3JlKHVuZXNjYXBlZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHZhciAgYmVmb3JlID0gdW5lc2NhcGVkO1xyXG4gICAgYmVmb3JlID0gYmVmb3JlLnJlcGxhY2UoL1xcXFwvZywgJ1xcXFxcXFxcXFxcXFxcXFwnKTsgIC8vIFxcID0+IFxcXFxcXFxcXHJcbiAgICBiZWZvcmUgPSBiZWZvcmUucmVwbGFjZSgvXFwvL2csICdcXFxcXFxcXC8nKTsgICAgIC8vIC8gPT4gXFxcXC9cclxuICAgIGJlZm9yZSA9IGJlZm9yZS5yZXBsYWNlKC9cXCQvZywgJ1xcXFwkJyk7ICAgIC8vICQgPT4gXFwkXHJcbiAgICBiZWZvcmUgPSBiZWZvcmUucmVwbGFjZSgvXCIvZywgICdcXFxcXCInKTsgICAgLy8gXCIgPT4gXFxcIlxyXG4gICAgYmVmb3JlID0gYmVmb3JlLnJlcGxhY2UoL1xcKi9nLCAnXFxcXConKTsgICAgLy8gKiA9PiBcXCpcclxuICAgIGJlZm9yZSA9IGJlZm9yZS5yZXBsYWNlKC9cXC4vZywgJ1xcXFxcXFxcLicpOyAgLy8gLiA9PiBcXFxcLlxyXG4gICAgYmVmb3JlID0gYmVmb3JlLnJlcGxhY2UoL1xcXi9nLCAnXFxcXFxcXFxeJyk7ICAvLyBeID0+IFxcXFxeXHJcbiAgICBiZWZvcmUgPSBiZWZvcmUucmVwbGFjZSgvXFxbL2csICdcXFxcXFxcXFsnKTsgIC8vIFsgPT4gXFxcXFtcclxuICAgIGJlZm9yZSA9IGJlZm9yZS5yZXBsYWNlKC9cXF0vZywgJ1xcXFxcXFxcXScpOyAgLy8gXSA9PiBcXFxcXVxyXG4gICAgY29uc3QgIGVzY2FwZWQgPSBiZWZvcmU7XHJcbiAgICByZXR1cm4gIGVzY2FwZWQ7XHJcbn1cclxuXHJcbi8vIGVzY2FwZUFmdGVyXHJcbmV4cG9ydCBmdW5jdGlvbiAgZXNjYXBlQWZ0ZXIodW5lc2NhcGVkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgdmFyICBhZnRlciA9IHVuZXNjYXBlZDtcclxuICAgIGFmdGVyID0gYWZ0ZXIucmVwbGFjZSgvXFxcXC9nLCAnXFxcXFxcXFxcXFxcXFxcXCcpOyAgLy8gXFwgPT4gXFxcXFxcXFxcclxuICAgIGFmdGVyID0gYWZ0ZXIucmVwbGFjZSgvXFwvL2csICdcXFxcXFxcXC8nKTsgICAgIC8vIC8gPT4gXFxcXC9cclxuICAgIGFmdGVyID0gYWZ0ZXIucmVwbGFjZSgvXFwkL2csICdcXFxcJCcpOyAgLy8gJCA9PiBcXCRcclxuICAgIGFmdGVyID0gYWZ0ZXIucmVwbGFjZSgvXCIvZywgICdcXFxcXCInKTsgIC8vIFwiID0+IFxcXCJcclxuICAgIGNvbnN0ICBlc2NhcGVkID0gYWZ0ZXI7XHJcbiAgICByZXR1cm4gIGVzY2FwZWQ7XHJcbn1cclxuXHJcbi8vIGdldFN0ZE91dFxyXG4vLyBFeGFtcGxlOlxyXG4vLyAgICB2YXIgZCA9IGdldFN0ZE91dCgpOyAgLy8gU2V0IGJyZWFrIHBvaW50IGhlcmUgYW5kIHdhdGNoIHRoZSB2YXJpYWJsZSBkXHJcbmZ1bmN0aW9uICBnZXRTdGRPdXQoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuICBzdGRvdXQuc3BsaXQoJ1xcbicpO1xyXG59XHJcblxyXG4vLyBwcmludGxuXHJcbi8vICNrZXl3b3JkOiBwcmludGxuLCBjb25zb2xlLmxvZywgY29uc29sZUxvZ1xyXG4vLyBPdXRwdXQgYW55IHRleHQgdG8gc3RhbmRhcmQgb3V0cHV0LlxyXG5leHBvcnQgZnVuY3Rpb24gIHByaW50bG4obWVzc2FnZTogYW55LCBkZWxheWVkRXhwYW5kaW5nOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ29iamVjdCcgJiYgIWRlbGF5ZWRFeHBhbmRpbmcpIHtcclxuICAgICAgICBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBpZiAod2l0aEplc3QgJiYgIWRlbGF5ZWRFeHBhbmRpbmcpIHtcclxuICAgICAgICBzdGRvdXQgKz0gbWVzc2FnZS50b1N0cmluZygpICsgJ1xcbic7XHJcbiAgICAgICAgcHAobWVzc2FnZS50b1N0cmluZygpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZUxvZyhtZXNzYWdlKTtcclxuICAgIH1cclxufVxyXG5jb25zdCAgY29uc29sZUxvZyA9IGNvbnNvbGUubG9nO1xyXG5jb25zb2xlLmxvZyA9IHByaW50bG47XHJcblxyXG4vLyBjYWxsTWFpbkZyb21KZXN0XHJcbi8vICNrZXl3b3JkOiBjYWxsTWFpbkZyb21KZXN0XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiAgY2FsbE1haW5Gcm9tSmVzdChwYXJhbWV0ZXJzPzogc3RyaW5nW10sIG9wdGlvbnM/OiB7W25hbWU6IHN0cmluZ106IHN0cmluZ30pIHtcclxuICAgIHdpdGhKZXN0ID0gdHJ1ZTtcclxuICAgIHN0ZG91dCA9ICcnO1xyXG4gICAgaWYgKHBhcmFtZXRlcnMpIHtcclxuICAgICAgICBwcm9ncmFtQXJndW1lbnRzID0gcGFyYW1ldGVycztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvZ3JhbUFyZ3VtZW50cyA9IFtdO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICBwcm9ncmFtT3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb2dyYW1PcHRpb25zID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgbWFpbigpO1xyXG59XHJcblxyXG52YXIgICAgbG9jYWxlID0gJyc7XHJcbnZhciAgICB3aXRoSmVzdCA9IGZhbHNlO1xyXG5leHBvcnQgdmFyICBzdGRvdXQgPSAnJztcclxuZXhwb3J0IHZhciAgcHJvZ3JhbUFyZ3VtZW50czogc3RyaW5nW10gPSBbXTtcclxuZXhwb3J0IHZhciAgcHJvZ3JhbU9wdGlvbnM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge307XHJcbiJdfQ==