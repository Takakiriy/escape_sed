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
        var returns, testCases, testCases_1, testCases_1_1, case_, answer, e_1_1;
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    testCases = [
                        {
                            name: 'lineNum',
                            inputLines: [
                                '12',
                                '\\n',
                                '\\r\\n'
                            ],
                            fileName: "1_first_1_ok_1_answer.txt"
                        },
                        {
                            name: 'without lineNum',
                            inputLines: [
                                '',
                                'abc',
                                'ABC'
                            ],
                            fileName: "2_without_lineNum_1_ok_1_answer.txt"
                        },
                        {
                            name: 'plus lineNum',
                            inputLines: [
                                '+0',
                                'abc',
                                'ABC'
                            ],
                            fileName: "3_plus_lineNum_1_ok_1_answer.txt"
                        },
                    ];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 8]);
                    testCases_1 = __values(testCases), testCases_1_1 = testCases_1.next();
                    _b.label = 2;
                case 2:
                    if (!!testCases_1_1.done) return [3 /*break*/, 5];
                    case_ = testCases_1_1.value;
                    console.log("TestCase: TestOfFirst >> " + case_.name);
                    return [4 /*yield*/, callChildProccess("node " + scriptPath + " --test --locale en-US", { inputLines: case_.inputLines })];
                case 3:
                    // Test Main
                    returns = _b.sent();
                    answer = fs.readFileSync(testFolderPath + case_.fileName)
                        .toString().substring(cutBOM);
                    // Check
                    if (returns.stdout !== answer) {
                        printDifferentPaths("_output.txt", case_.fileName);
                        fs.writeFileSync(testFolderPath + "_output.txt", returns.stdout);
                        throw new Error();
                    }
                    _b.label = 4;
                case 4:
                    testCases_1_1 = testCases_1.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (testCases_1_1 && !testCases_1_1.done && (_a = testCases_1["return"])) _a.call(testCases_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
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
                    var returnValue, childProcess, _a, _b, inputLine, e_2_1, e_3;
                    var e_2, _c;
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
                                e_2_1 = _d.sent();
                                e_2 = { error: e_2_1 };
                                return [3 /*break*/, 10];
                            case 9:
                                try {
                                    if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                                }
                                finally { if (e_2) throw e_2.error; }
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
                                e_3 = _d.sent();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYXBlX3NlZF90ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2VzY2FwZV9zZWRfdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUJBQXlCO0FBQ3pCLDZDQUErQztBQUMvQywyQkFBNkI7QUFDN0IsMkJBQTZCO0FBRTdCLElBQU8sVUFBVSxHQUFJLGlCQUFpQixDQUFDO0FBQ3ZDLElBQU8sY0FBYyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBRS9DLElBQU8sS0FBSyxHQUFHLEtBQUssQ0FBQztBQUVyQixTQUFnQixJQUFJOzs7Ozt5QkFDWixDQUFDLEtBQUssRUFBTix3QkFBTTtvQkFDTixxQkFBTSxXQUFXLEVBQUUsRUFBQTs7b0JBQW5CLFNBQW1CLENBQUM7O3dCQUVwQixxQkFBTSxXQUFXLEVBQUUsRUFBQTs7b0JBQW5CLFNBQW1CLENBQUM7OztvQkFFM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7Q0FDcEI7QUFFRCxjQUFjO0FBQ2QsU0FBZ0IsV0FBVzs7Ozs7OztvQkFFbkIsU0FBUyxHQUFHO3dCQUNsQjs0QkFDQyxJQUFJLEVBQUUsU0FBUzs0QkFDZixVQUFVLEVBQUU7Z0NBQ1gsSUFBSTtnQ0FDSixLQUFLO2dDQUNMLFFBQVE7NkJBQ1I7NEJBQ0QsUUFBUSxFQUFFLDJCQUEyQjt5QkFDckM7d0JBQ0Q7NEJBQ0MsSUFBSSxFQUFFLGlCQUFpQjs0QkFDdkIsVUFBVSxFQUFFO2dDQUNYLEVBQUU7Z0NBQ0YsS0FBSztnQ0FDTCxLQUFLOzZCQUNMOzRCQUNELFFBQVEsRUFBRSxxQ0FBcUM7eUJBQy9DO3dCQUNEOzRCQUNDLElBQUksRUFBRSxjQUFjOzRCQUNwQixVQUFVLEVBQUU7Z0NBQ1gsSUFBSTtnQ0FDSixLQUFLO2dDQUNMLEtBQUs7NkJBQ0w7NEJBQ0QsUUFB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QUVELElBQU8sa0JBQWtCLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBRSxZQUFVLGNBQWdCLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDeEYsSUFBTyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLElBQU8sUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JCLElBQUksRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgKiBhcyBjaGlsZF9wcm9jZXNzIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgKiBhcyBsaWIgZnJvbSAnLi9saWInO1xyXG5cclxuY29uc3QgIHNjcmlwdFBhdGggPSAgYC4uL2J1aWxkL2FwcC5qc2A7XHJcbmNvbnN0ICB0ZXN0Rm9sZGVyUGF0aCA9IGB0ZXN0X2RhdGFgICsgcGF0aC5zZXA7XHJcblxyXG5jb25zdCAgZGVidWcgPSBmYWxzZTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uICBtYWluKCkge1xyXG4gICAgaWYgKCFkZWJ1Zykge1xyXG4gICAgICAgIGF3YWl0IFRlc3RPZkZpcnN0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGF3YWl0IFRlc3RPZkZpcnN0KCk7XHJcbiAgICB9XHJcblx0Y29uc29sZS5sb2coJ1Bhc3MnKTtcclxufVxyXG5cclxuLy8gVGVzdE9mRmlyc3RcclxuYXN5bmMgZnVuY3Rpb24gIFRlc3RPZkZpcnN0KCkge1xyXG5cdGxldCAgcmV0dXJuczogUHJvY2Vzc1JldHVybnM7XHJcblx0Y29uc3QgIHRlc3RDYXNlcyA9IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2xpbmVOdW0nLFxyXG5cdFx0XHRpbnB1dExpbmVzOiBbXHJcblx0XHRcdFx0JzEyJyxcclxuXHRcdFx0XHQnXFxcXG4nLFxyXG5cdFx0XHRcdCdcXFxcclxcXFxuJ1xyXG5cdFx0XHRdLFxyXG5cdFx0XHRmaWxlTmFtZTogXCIxX2ZpcnN0XzFfb2tfMV9hbnN3ZXIudHh0XCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnd2l0aG91dCBsaW5lTnVtJyxcclxuXHRcdFx0aW5wdXRMaW5lczogW1xyXG5cdFx0XHRcdCcnLFxyXG5cdFx0XHRcdCdhYmMnLFxyXG5cdFx0XHRcdCdBQkMnXHJcblx0XHRcdF0sXHJcblx0XHRcdGZpbGVOYW1lOiBcIjJfd2l0aG91dF9saW5lTnVtXzFfb2tfMV9hbnN3ZXIudHh0XCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAncGx1cyBsaW5lTnVtJyxcclxuXHRcdFx0aW5wdXRMaW5lczogW1xyXG5cdFx0XHRcdCcrMCcsXHJcblx0XHRcdFx0J2FiYycsXHJcblx0XHRcdFx0J0FCQydcclxuXHRcdFx0XSxcclxuXHRcdFx0ZmlsZU5hbWU6IFwiM19wbHVzX2xpbmVOdW1fMV9va18xX2Fuc3dlci50eHRcIixcclxuXHRcdH0sXHJcblx0XTtcclxuXHRmb3IgKGNvbnN0IGNhc2VfIG9mIHRlc3RDYXNlcykge1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKGBUZXN0Q2FzZTogVGVzdE9mRmlyc3QgPj4gJHtjYXNlXy5uYW1lfWApO1xyXG5cclxuXHRcdC8vIFRlc3QgTWFpblxyXG5cdFx0cmV0dXJucyA9IGF3YWl0IGNhbGxDaGlsZFByb2NjZXNzKGBub2RlICR7c2NyaXB0UGF0aH0gLS10ZXN0IC0tbG9jYWxlIGVuLVVTYCxcclxuXHRcdFx0e2lucHV0TGluZXM6IGNhc2VfLmlucHV0TGluZXN9XHJcblx0XHQpO1xyXG5cdFx0Y29uc3QgIGFuc3dlciA9IGZzLnJlYWRGaWxlU3luYyh0ZXN0Rm9sZGVyUGF0aCArIGNhc2VfLmZpbGVOYW1lKVxyXG5cdFx0XHQudG9TdHJpbmcoKS5zdWJzdHJpbmcoY3V0Qk9NKTtcclxuXHJcblx0XHQvLyBDaGVja1xyXG5cdFx0aWYgKHJldHVybnMuc3Rkb3V0ICE9PSBhbnN3ZXIpIHtcclxuXHRcdFx0cHJpbnREaWZmZXJlbnRQYXRocyhgX291dHB1dC50eHRgLCBjYXNlXy5maWxlTmFtZSk7XHJcblx0XHRcdGZzLndyaXRlRmlsZVN5bmModGVzdEZvbGRlclBhdGggKyBcIl9vdXRwdXQudHh0XCIsIHJldHVybnMuc3Rkb3V0KTtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyBkZWxldGVGaWxlXHJcbmZ1bmN0aW9uICBkZWxldGVGaWxlKHBhdGg6IHN0cmluZykge1xyXG4gICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aCkpIHtcclxuICAgICAgICBmcy51bmxpbmtTeW5jKHBhdGgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBwcmludERpZmZlcmVudFBhdGhzXHJcbmZ1bmN0aW9uICBwcmludERpZmZlcmVudFBhdGhzKHBhdGgxOiBzdHJpbmcsIHBhdGgyOiBzdHJpbmcpIHtcclxuXHRjb25zb2xlLmxvZyhgRXJyb3I6IGRpZmZlcmVudCBiZXR3ZWVuIHRoZSBmb2xsb3dpbmcgZmlsZXNgKTtcclxuXHRjb25zb2xlLmxvZyhgICBQYXRoMTogJHt0ZXN0Rm9sZGVyRnVsbFBhdGggKyBwYXRoMX1gKTtcclxuXHRjb25zb2xlLmxvZyhgICBQYXRoMjogJHt0ZXN0Rm9sZGVyRnVsbFBhdGggKyBwYXRoMn1gKTtcclxufVxyXG5cclxuLy8gZGlmZlN0cmluZ3NcclxuZnVuY3Rpb24gIGRpZmZTdHJpbmdzKHJlc3VsdDogc3RyaW5nLCBhbnN3ZXI6IHN0cmluZykge1xyXG5cdGNvbnN0ICByZXN1bHRGaWxlUGF0aCA9ICdfb3V0cHV0LnR4dCc7XHJcblx0Y29uc3QgIGFuc3dlckZpbGVQYXRoID0gJ19hbnN3ZXIudHh0JztcclxuXHJcblx0ZnMud3JpdGVGaWxlU3luYyh0ZXN0Rm9sZGVyRnVsbFBhdGggKyByZXN1bHRGaWxlUGF0aCwgcmVzdWx0KTtcclxuXHRmcy53cml0ZUZpbGVTeW5jKHRlc3RGb2xkZXJGdWxsUGF0aCArIGFuc3dlckZpbGVQYXRoLCBhbnN3ZXIpO1xyXG5cclxuXHRwcmludERpZmZlcmVudFBhdGhzKHJlc3VsdEZpbGVQYXRoLCBhbnN3ZXJGaWxlUGF0aCk7XHJcbn1cclxuXHJcbi8vIGNhbGxDaGlsZFByb2NjZXNzXHJcbmFzeW5jIGZ1bmN0aW9uICBjYWxsQ2hpbGRQcm9jY2Vzcyhjb21tYW5kTGluZTogc3RyaW5nLCAgb3B0aW9uPzogUHJvY2Vzc09wdGlvbik6IFByb21pc2U8UHJvY2Vzc1JldHVybnM+IHtcclxuXHRyZXR1cm4gICBuZXcgUHJvbWlzZSggYXN5bmMgKHJlc29sdmVGdW5jdGlvbiwgcmVqZWN0RnVuY3Rpb24pID0+IHtcclxuXHRcdGNvbnN0ICByZXR1cm5WYWx1ZSA9IG5ldyBQcm9jZXNzUmV0dXJucygpO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgIGNoaWxkUHJvY2VzcyA9IGNoaWxkX3Byb2Nlc3MuZXhlYyggY29tbWFuZExpbmUsXHJcblxyXG5cdFx0XHRcdC8vIG9uIGNsb3NlIHRoZSBcImNoaWxkUHJvY2Vzc1wiICgyKVxyXG5cdFx0XHRcdChlcnJvcjogY2hpbGRfcHJvY2Vzcy5FeGVjRXhjZXB0aW9uIHwgbnVsbCwgc3Rkb3V0OiBzdHJpbmcsIHN0ZGVycjogc3RyaW5nKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm5WYWx1ZS5zdGRvdXQgPSBzdGRvdXQ7XHJcblx0XHRcdFx0XHRyZXR1cm5WYWx1ZS5zdGRlcnIgPSBzdGRlcnI7XHJcblx0XHRcdFx0XHRyZXNvbHZlRnVuY3Rpb24ocmV0dXJuVmFsdWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdFx0aWYgKG9wdGlvbiAmJiBjaGlsZFByb2Nlc3Muc3RkaW4pIHtcclxuXHJcblx0XHRcdFx0aWYgKG9wdGlvbi5pbnB1dExpbmVzKSB7XHJcblx0XHRcdFx0XHRhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMzAwKSk7XHJcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGlucHV0TGluZSBvZiBvcHRpb24uaW5wdXRMaW5lcykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhpbnB1dExpbmUpO1xyXG5cdFx0XHRcdFx0XHRjaGlsZFByb2Nlc3Muc3RkaW4ud3JpdGUoaW5wdXRMaW5lICsgXCJcXG5cIik7XHJcblx0XHRcdFx0XHRcdGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAyMDApKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2hpbGRQcm9jZXNzLnN0ZGluLmVuZCgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBvbiBjbG9zZSB0aGUgXCJjaGlsZFByb2Nlc3NcIiAoMSlcclxuXHRcdFx0Y2hpbGRQcm9jZXNzLm9uKCdjbG9zZScsIChleGl0Q29kZTogbnVtYmVyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuVmFsdWUuZXhpdENvZGUgPSBleGl0Q29kZTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGNoaWxkUHJvY2Vzcy5vbignZXhpdCcsIChleGl0Q29kZTogbnVtYmVyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuVmFsdWUuZXhpdENvZGUgPSBleGl0Q29kZTtcclxuXHRcdFx0fSk7XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdHRocm93IEVycm9yKGBFcnJvciBpbiB0aGUgY29tbWFuZCBsaW5lICR7Y29tbWFuZExpbmV9YCk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbi8vIFByb2Nlc3NPcHRpb25cclxuY2xhc3MgUHJvY2Vzc09wdGlvbiB7XHJcblx0aW5wdXRMaW5lcz86IHN0cmluZ1tdO1xyXG59XHJcblxyXG4vLyBQcm9jZXNzUmV0dXJuc1xyXG5jbGFzcyBQcm9jZXNzUmV0dXJucyB7XHJcblx0ZXhpdENvZGU6IG51bWJlciA9IDA7XHJcblx0c3Rkb3V0OiBzdHJpbmcgPSAnJztcclxuXHRzdGRlcnI6IHN0cmluZyA9ICcnO1xyXG59XHJcblxyXG5jb25zdCAgdGVzdEZvbGRlckZ1bGxQYXRoID0gbGliLmdldEZ1bGxQYXRoKCBgLi4vc3JjLyR7dGVzdEZvbGRlclBhdGh9YCwgcHJvY2Vzcy5jd2QoKSk7XHJcbmNvbnN0ICBjdXRCT00gPSAxO1xyXG5jb25zdCAgbm90Rm91bmQgPSAtMTtcclxubWFpbigpO1xyXG4iXX0=