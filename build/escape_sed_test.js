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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
exports.__esModule = true;
var fs = require("fs");
var child_process = require("child_process");
var path = require("path");
var lib = require("./lib");
var scriptPath = "../build/app.js";
var testFolderPath = "test_data" + path.sep;
var debug = false;
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!debug) return [3 /*break*/, 2];
                    return [4 /*yield*/, TestOfFirst()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, TestOfFirst()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    console.log('Pass');
                    return [2 /*return*/];
            }
        });
    });
}
// TestOfFirst
function TestOfFirst() {
    return __awaiter(this, void 0, void 0, function () {
        var returns, answer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("TestCase: TestOfFirst");
                    return [4 /*yield*/, callChildProccess("node " + scriptPath + " --test --locale en-US", { inputLines: [
                                '12',
                                '\\n',
                                '\\r\\n'
                            ] })];
                case 1:
                    // Test Main
                    returns = _a.sent();
                    answer = fs.readFileSync(testFolderPath + "1_first_1_ok_1_answer.txt")
                        .toString().substring(cutBOM);
                    // Check
                    if (returns.stdout !== answer) {
                        printDifferentPaths("_output.txt", '1_first_1_ok_1_answer.txt');
                        fs.writeFileSync(testFolderPath + "_output.txt", returns.stdout);
                        throw new Error();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// deleteFile
function deleteFile(path) {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
}
// printDifferentPaths
function printDifferentPaths(path1, path2) {
    console.log("Error: different between the following files");
    console.log("  Path1: " + (testFolderFullPath + path1));
    console.log("  Path2: " + (testFolderFullPath + path2));
}
// diffStrings
function diffStrings(result, answer) {
    var resultFilePath = '_output.txt';
    var answerFilePath = '_answer.txt';
    fs.writeFileSync(testFolderFullPath + resultFilePath, result);
    fs.writeFileSync(testFolderFullPath + answerFilePath, answer);
    printDifferentPaths(resultFilePath, answerFilePath);
}
// callChildProccess
function callChildProccess(commandLine, option) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolveFunction, rejectFunction) { return __awaiter(_this, void 0, void 0, function () {
                    var returnValue, childProcess, _a, _b, inputLine, e_1_1, e_2;
                    var e_1, _c;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                returnValue = new ProcessReturns();
                                _d.label = 1;
                            case 1:
                                _d.trys.push([1, 12, , 13]);
                                childProcess = child_process.exec(commandLine, 
                                // on close the "childProcess" (2)
                                function (error, stdout, stderr) {
                                    returnValue.stdout = stdout;
                                    returnValue.stderr = stderr;
                                    resolveFunction(returnValue);
                                });
                                if (!(option && childProcess.stdin)) return [3 /*break*/, 11];
                                if (!option.inputLines) return [3 /*break*/, 10];
                                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 300); })];
                            case 2:
                                _d.sent();
                                _d.label = 3;
                            case 3:
                                _d.trys.push([3, 8, 9, 10]);
                                _a = __values(option.inputLines), _b = _a.next();
                                _d.label = 4;
                            case 4:
                                if (!!_b.done) return [3 /*break*/, 7];
                                inputLine = _b.value;
                                console.log(inputLine);
                                childProcess.stdin.write(inputLine + "\n");
                                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 200); })];
                            case 5:
                                _d.sent();
                                _d.label = 6;
                            case 6:
                                _b = _a.next();
                                return [3 /*break*/, 4];
                            case 7: return [3 /*break*/, 10];
                            case 8:
                                e_1_1 = _d.sent();
                                e_1 = { error: e_1_1 };
                                return [3 /*break*/, 10];
                            case 9:
                                try {
                                    if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                                }
                                finally { if (e_1) throw e_1.error; }
                                return [7 /*endfinally*/];
                            case 10:
                                childProcess.stdin.end();
                                _d.label = 11;
                            case 11:
                                // on close the "childProcess" (1)
                                childProcess.on('close', function (exitCode) {
                                    returnValue.exitCode = exitCode;
                                });
                                childProcess.on('exit', function (exitCode) {
                                    returnValue.exitCode = exitCode;
                                });
                                return [3 /*break*/, 13];
                            case 12:
                                e_2 = _d.sent();
                                throw Error("Error in the command line " + commandLine);
                            case 13: return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}
// ProcessOption
var ProcessOption = /** @class */ (function () {
    function ProcessOption() {
    }
    return ProcessOption;
}());
// ProcessReturns
var ProcessReturns = /** @class */ (function () {
    function ProcessReturns() {
        this.exitCode = 0;
        this.stdout = '';
        this.stderr = '';
    }
    return ProcessReturns;
}());
var testFolderFullPath = lib.getFullPath("../src/" + testFolderPath, process.cwd());
var cutBOM = 1;
var notFound = -1;
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYXBlX3NlZF90ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2VzY2FwZV9zZWRfdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUJBQXlCO0FBQ3pCLDZDQUErQztBQUMvQywyQkFBNkI7QUFDN0IsMkJBQTZCO0FBRTdCLElBQU8sVUFBVSxHQUFJLGlCQUFpQixDQUFDO0FBQ3ZDLElBQU8sY0FBYyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBRS9DLElBQU8sS0FBSyxHQUFHLEtBQUssQ0FBQztBQUVyQixTQUFnQixJQUFJOzs7Ozt5QkFDWixDQUFDLEtBQUssRUFBTix3QkFBTTtvQkFDTixxQkFBTSxXQUFXLEVBQUUsRUFBQTs7b0JBQW5CLFNBQW1CLENBQUM7O3dCQUVwQixxQkFBTSxXQUFXLEVBQUUsRUFBQTs7b0JBQW5CLFNBQW1CLENBQUM7OztvQkFFM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7Q0FDcEI7QUFFRCxjQUFjO0FBQ2QsU0FBZ0IsV0FBVzs7Ozs7O29CQUd2QixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7b0JBRzNCLHFCQUFNLGlCQUFpQixDQUFDLFVBQVEsVUFBVSwyQkFBd0IsRUFDeEUsRUFBQyxVQUFVLEVBQUU7Z0NBQ2xCLElBQUk7Z0NBQ0ssS0FBSztnQ0FDTCxRQUFROzZCQUNYLEVBQUMsQ0FDTCxFQUFBOztvQkFQRCxZQUFZO29CQUNaLE9BQU8sR0FBRyxTQU1ULENBQUM7b0JBQ0ssTUFBTSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsY0FBYyxHQUFHLDJCQUEyQixDQUFDO3lCQUN4RSxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBRWxDLFFBQVE7b0JBQ1IsSUFBSSxPQUFPLENBQUMs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QU8sRUFBRSxVQUFDLFFBQWdCO29DQUN6QyxXQUFXLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQ0FDakMsQ0FBQyxDQUFDLENBQUM7Z0NBQ0gsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxRQUFnQjtvQ0FDeEMsV0FBVyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0NBQ2pDLENBQUMsQ0FBQyxDQUFDOzs7O2dDQUVILE1BQU0sS0FBSyxDQUFDLCtCQUE2QixXQUFhLENBQUMsQ0FBQzs7OztxQkFFekQsQ0FBQyxFQUFDOzs7Q0FDSDtBQUVELGdCQUFnQjtBQUNoQjtJQUFBO0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFFRCxpQkFBaUI7QUFDakI7SUFBQTtRQUNDLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixXQUFNLEdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBRUQsSUFBTyxrQkFBa0IsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFFLFlBQVUsY0FBZ0IsRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUN4RixJQUFPLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDbEIsSUFBTyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDckIsSUFBSSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCAqIGFzIGNoaWxkX3Byb2Nlc3MgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCAqIGFzIGxpYiBmcm9tICcuL2xpYic7XHJcblxyXG5jb25zdCAgc2NyaXB0UGF0aCA9ICBgLi4vYnVpbGQvYXBwLmpzYDtcclxuY29uc3QgIHRlc3RGb2xkZXJQYXRoID0gYHRlc3RfZGF0YWAgKyBwYXRoLnNlcDtcclxuXHJcbmNvbnN0ICBkZWJ1ZyA9IGZhbHNlO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gIG1haW4oKSB7XHJcbiAgICBpZiAoIWRlYnVnKSB7XHJcbiAgICAgICAgYXdhaXQgVGVzdE9mRmlyc3QoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXdhaXQgVGVzdE9mRmlyc3QoKTtcclxuICAgIH1cclxuXHRjb25zb2xlLmxvZygnUGFzcycpO1xyXG59XHJcblxyXG4vLyBUZXN0T2ZGaXJzdFxyXG5hc3luYyBmdW5jdGlvbiAgVGVzdE9mRmlyc3QoKSB7XHJcblx0bGV0ICByZXR1cm5zOiBQcm9jZXNzUmV0dXJucztcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgVGVzdENhc2U6IFRlc3RPZkZpcnN0YCk7XHJcblxyXG4gICAgLy8gVGVzdCBNYWluXHJcbiAgICByZXR1cm5zID0gYXdhaXQgY2FsbENoaWxkUHJvY2Nlc3MoYG5vZGUgJHtzY3JpcHRQYXRofSAtLXRlc3QgLS1sb2NhbGUgZW4tVVNgLFxyXG4gICAgICAgIHtpbnB1dExpbmVzOiBbXHJcblx0XHRcdCcxMicsXHJcbiAgICAgICAgICAgICdcXFxcbicsXHJcbiAgICAgICAgICAgICdcXFxcclxcXFxuJ1xyXG4gICAgICAgIF19XHJcbiAgICApO1xyXG4gICAgY29uc3QgIGFuc3dlciA9IGZzLnJlYWRGaWxlU3luYyh0ZXN0Rm9sZGVyUGF0aCArIFwiMV9maXJzdF8xX29rXzFfYW5zd2VyLnR4dFwiKVxyXG4gICAgICAgIC50b1N0cmluZygpLnN1YnN0cmluZyhjdXRCT00pO1xyXG5cclxuICAgIC8vIENoZWNrXHJcbiAgICBpZiAocmV0dXJucy5zdGRvdXQgIT09IGFuc3dlcikge1xyXG4gICAgICAgIHByaW50RGlmZmVyZW50UGF0aHMoYF9vdXRwdXQudHh0YCwgJzFfZmlyc3RfMV9va18xX2Fuc3dlci50eHQnKTtcclxuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHRlc3RGb2xkZXJQYXRoICsgXCJfb3V0cHV0LnR4dFwiLCByZXR1cm5zLnN0ZG91dCk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGRlbGV0ZUZpbGVcclxuZnVuY3Rpb24gIGRlbGV0ZUZpbGUocGF0aDogc3RyaW5nKSB7XHJcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoKSkge1xyXG4gICAgICAgIGZzLnVubGlua1N5bmMocGF0aCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIHByaW50RGlmZmVyZW50UGF0aHNcclxuZnVuY3Rpb24gIHByaW50RGlmZmVyZW50UGF0aHMocGF0aDE6IHN0cmluZywgcGF0aDI6IHN0cmluZykge1xyXG5cdGNvbnNvbGUubG9nKGBFcnJvcjogZGlmZmVyZW50IGJldHdlZW4gdGhlIGZvbGxvd2luZyBmaWxlc2ApO1xyXG5cdGNvbnNvbGUubG9nKGAgIFBhdGgxOiAke3Rlc3RGb2xkZXJGdWxsUGF0aCArIHBhdGgxfWApO1xyXG5cdGNvbnNvbGUubG9nKGAgIFBhdGgyOiAke3Rlc3RGb2xkZXJGdWxsUGF0aCArIHBhdGgyfWApO1xyXG59XHJcblxyXG4vLyBkaWZmU3RyaW5nc1xyXG5mdW5jdGlvbiAgZGlmZlN0cmluZ3MocmVzdWx0OiBzdHJpbmcsIGFuc3dlcjogc3RyaW5nKSB7XHJcblx0Y29uc3QgIHJlc3VsdEZpbGVQYXRoID0gJ19vdXRwdXQudHh0JztcclxuXHRjb25zdCAgYW5zd2VyRmlsZVBhdGggPSAnX2Fuc3dlci50eHQnO1xyXG5cclxuXHRmcy53cml0ZUZpbGVTeW5jKHRlc3RGb2xkZXJGdWxsUGF0aCArIHJlc3VsdEZpbGVQYXRoLCByZXN1bHQpO1xyXG5cdGZzLndyaXRlRmlsZVN5bmModGVzdEZvbGRlckZ1bGxQYXRoICsgYW5zd2VyRmlsZVBhdGgsIGFuc3dlcik7XHJcblxyXG5cdHByaW50RGlmZmVyZW50UGF0aHMocmVzdWx0RmlsZVBhdGgsIGFuc3dlckZpbGVQYXRoKTtcclxufVxyXG5cclxuLy8gY2FsbENoaWxkUHJvY2Nlc3NcclxuYXN5bmMgZnVuY3Rpb24gIGNhbGxDaGlsZFByb2NjZXNzKGNvbW1hbmRMaW5lOiBzdHJpbmcsICBvcHRpb24/OiBQcm9jZXNzT3B0aW9uKTogUHJvbWlzZTxQcm9jZXNzUmV0dXJucz4ge1xyXG5cdHJldHVybiAgIG5ldyBQcm9taXNlKCBhc3luYyAocmVzb2x2ZUZ1bmN0aW9uLCByZWplY3RGdW5jdGlvbikgPT4ge1xyXG5cdFx0Y29uc3QgIHJldHVyblZhbHVlID0gbmV3IFByb2Nlc3NSZXR1cm5zKCk7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCAgY2hpbGRQcm9jZXNzID0gY2hpbGRfcHJvY2Vzcy5leGVjKCBjb21tYW5kTGluZSxcclxuXHJcblx0XHRcdFx0Ly8gb24gY2xvc2UgdGhlIFwiY2hpbGRQcm9jZXNzXCIgKDIpXHJcblx0XHRcdFx0KGVycm9yOiBjaGlsZF9wcm9jZXNzLkV4ZWNFeGNlcHRpb24gfCBudWxsLCBzdGRvdXQ6IHN0cmluZywgc3RkZXJyOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0XHRcdHJldHVyblZhbHVlLnN0ZG91dCA9IHN0ZG91dDtcclxuXHRcdFx0XHRcdHJldHVyblZhbHVlLnN0ZGVyciA9IHN0ZGVycjtcclxuXHRcdFx0XHRcdHJlc29sdmVGdW5jdGlvbihyZXR1cm5WYWx1ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRpZiAob3B0aW9uICYmIGNoaWxkUHJvY2Vzcy5zdGRpbikge1xyXG5cclxuXHRcdFx0XHRpZiAob3B0aW9uLmlucHV0TGluZXMpIHtcclxuXHRcdFx0XHRcdGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAzMDApKTtcclxuXHRcdFx0XHRcdGZvciAoY29uc3QgaW5wdXRMaW5lIG9mIG9wdGlvbi5pbnB1dExpbmVzKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGlucHV0TGluZSk7XHJcblx0XHRcdFx0XHRcdGNoaWxkUHJvY2Vzcy5zdGRpbi53cml0ZShpbnB1dExpbmUgKyBcIlxcblwiKTtcclxuXHRcdFx0XHRcdFx0YXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDIwMCkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjaGlsZFByb2Nlc3Muc3RkaW4uZW5kKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIG9uIGNsb3NlIHRoZSBcImNoaWxkUHJvY2Vzc1wiICgxKVxyXG5cdFx0XHRjaGlsZFByb2Nlc3Mub24oJ2Nsb3NlJywgKGV4aXRDb2RlOiBudW1iZXIpID0+IHtcclxuXHRcdFx0XHRyZXR1cm5WYWx1ZS5leGl0Q29kZSA9IGV4aXRDb2RlO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y2hpbGRQcm9jZXNzLm9uKCdleGl0JywgKGV4aXRDb2RlOiBudW1iZXIpID0+IHtcclxuXHRcdFx0XHRyZXR1cm5WYWx1ZS5leGl0Q29kZSA9IGV4aXRDb2RlO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0dGhyb3cgRXJyb3IoYEVycm9yIGluIHRoZSBjb21tYW5kIGxpbmUgJHtjb21tYW5kTGluZX1gKTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuLy8gUHJvY2Vzc09wdGlvblxyXG5jbGFzcyBQcm9jZXNzT3B0aW9uIHtcclxuXHRpbnB1dExpbmVzPzogc3RyaW5nW107XHJcbn1cclxuXHJcbi8vIFByb2Nlc3NSZXR1cm5zXHJcbmNsYXNzIFByb2Nlc3NSZXR1cm5zIHtcclxuXHRleGl0Q29kZTogbnVtYmVyID0gMDtcclxuXHRzdGRvdXQ6IHN0cmluZyA9ICcnO1xyXG5cdHN0ZGVycjogc3RyaW5nID0gJyc7XHJcbn1cclxuXHJcbmNvbnN0ICB0ZXN0Rm9sZGVyRnVsbFBhdGggPSBsaWIuZ2V0RnVsbFBhdGgoIGAuLi9zcmMvJHt0ZXN0Rm9sZGVyUGF0aH1gLCBwcm9jZXNzLmN3ZCgpKTtcclxuY29uc3QgIGN1dEJPTSA9IDE7XHJcbmNvbnN0ICBub3RGb3VuZCA9IC0xO1xyXG5tYWluKCk7XHJcbiJdfQ==