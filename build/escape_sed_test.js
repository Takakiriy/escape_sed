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
                                '\\n',
                                '\\r\\n'
                            ] })];
                case 1:
                    // Test Main
                    returns = _a.sent();
                    answer = fs.readFileSync(testFolderPath + "1_first_1_ok_1_answer.txt")
                        .toString().substr(cutBOM);
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
                    var returnValue, childProcess, _i, _a, inputLine, e_1;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                returnValue = new ProcessReturns();
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 8, , 9]);
                                childProcess = child_process.exec(commandLine, 
                                // on close the "childProcess" (2)
                                function (error, stdout, stderr) {
                                    returnValue.stdout = stdout;
                                    returnValue.stderr = stderr;
                                    resolveFunction(returnValue);
                                });
                                if (!(option && childProcess.stdin)) return [3 /*break*/, 7];
                                if (!option.inputLines) return [3 /*break*/, 6];
                                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 300); })];
                            case 2:
                                _b.sent();
                                _i = 0, _a = option.inputLines;
                                _b.label = 3;
                            case 3:
                                if (!(_i < _a.length)) return [3 /*break*/, 6];
                                inputLine = _a[_i];
                                console.log(inputLine);
                                childProcess.stdin.write(inputLine + "\n");
                                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 200); })];
                            case 4:
                                _b.sent();
                                _b.label = 5;
                            case 5:
                                _i++;
                                return [3 /*break*/, 3];
                            case 6:
                                childProcess.stdin.end();
                                _b.label = 7;
                            case 7:
                                // on close the "childProcess" (1)
                                childProcess.on('close', function (exitCode) {
                                    returnValue.exitCode = exitCode;
                                });
                                childProcess.on('exit', function (exitCode) {
                                    returnValue.exitCode = exitCode;
                                });
                                return [3 /*break*/, 9];
                            case 8:
                                e_1 = _b.sent();
                                throw Error("Error in the command line " + commandLine);
                            case 9: return [2 /*return*/];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYXBlX3NlZF90ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2VzY2FwZV9zZWRfdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVCQUF5QjtBQUN6Qiw2Q0FBK0M7QUFDL0MsMkJBQTZCO0FBQzdCLDJCQUE2QjtBQUU3QixJQUFPLFVBQVUsR0FBSSxpQkFBaUIsQ0FBQztBQUN2QyxJQUFPLGNBQWMsR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUUvQyxJQUFPLEtBQUssR0FBRyxLQUFLLENBQUM7QUFFckIsU0FBZ0IsSUFBSTs7Ozs7eUJBQ1osQ0FBQyxLQUFLLEVBQU4sd0JBQU07b0JBQ04scUJBQU0sV0FBVyxFQUFFLEVBQUE7O29CQUFuQixTQUFtQixDQUFDOzt3QkFFcEIscUJBQU0sV0FBVyxFQUFFLEVBQUE7O29CQUFuQixTQUFtQixDQUFDOzs7b0JBRTNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7O0NBQ3BCO0FBRUQsY0FBYztBQUNkLFNBQWdCLFdBQVc7Ozs7OztvQkFHdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO29CQUczQixxQkFBTSxpQkFBaUIsQ0FBQyxVQUFRLFVBQVUsMkJBQXdCLEVBQ3hFLEVBQUMsVUFBVSxFQUFFO2dDQUNULEtBQUs7Z0NBQ0wsUUFBUTs2QkFDWCxFQUFDLENBQ0wsRUFBQTs7b0JBTkQsWUFBWTtvQkFDWixPQUFPLEdBQUcsU0FLVCxDQUFDO29CQUNLLE1BQU0sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLGNBQWMsR0FBRywyQkFBMkIsQ0FBQzt5QkFDeEUsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUUvQixRQUFRO29CQUNSLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQUU7d0JB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QUFFLFVBQUMsUUFBZ0I7b0NBQ3pDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2dDQUNqQyxDQUFDLENBQUMsQ0FBQztnQ0FDSCxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLFFBQWdCO29DQUN4QyxXQUFXLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQ0FDakMsQ0FBQyxDQUFDLENBQUM7Ozs7Z0NBRUgsTUFBTSxLQUFLLENBQUMsK0JBQTZCLFdBQWEsQ0FBQyxDQUFDOzs7O3FCQUV6RCxDQUFDLEVBQUM7OztDQUNIO0FBRUQsZ0JBQWdCO0FBQ2hCO0lBQUE7SUFFQSxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUVELGlCQUFpQjtBQUNqQjtJQUFBO1FBQ0MsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFdBQU0sR0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFFRCxJQUFPLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUUsWUFBVSxjQUFnQixFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3hGLElBQU8sTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNsQixJQUFPLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyQixJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0ICogYXMgY2hpbGRfcHJvY2VzcyBmcm9tICdjaGlsZF9wcm9jZXNzJztcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0ICogYXMgbGliIGZyb20gJy4vbGliJztcclxuXHJcbmNvbnN0ICBzY3JpcHRQYXRoID0gIGAuLi9idWlsZC9hcHAuanNgO1xyXG5jb25zdCAgdGVzdEZvbGRlclBhdGggPSBgdGVzdF9kYXRhYCArIHBhdGguc2VwO1xyXG5cclxuY29uc3QgIGRlYnVnID0gZmFsc2U7XHJcblxyXG5hc3luYyBmdW5jdGlvbiAgbWFpbigpIHtcclxuICAgIGlmICghZGVidWcpIHtcclxuICAgICAgICBhd2FpdCBUZXN0T2ZGaXJzdCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhd2FpdCBUZXN0T2ZGaXJzdCgpO1xyXG4gICAgfVxyXG5cdGNvbnNvbGUubG9nKCdQYXNzJyk7XHJcbn1cclxuXHJcbi8vIFRlc3RPZkZpcnN0XHJcbmFzeW5jIGZ1bmN0aW9uICBUZXN0T2ZGaXJzdCgpIHtcclxuXHRsZXQgIHJldHVybnM6IFByb2Nlc3NSZXR1cm5zO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBUZXN0Q2FzZTogVGVzdE9mRmlyc3RgKTtcclxuXHJcbiAgICAvLyBUZXN0IE1haW5cclxuICAgIHJldHVybnMgPSBhd2FpdCBjYWxsQ2hpbGRQcm9jY2Vzcyhgbm9kZSAke3NjcmlwdFBhdGh9IC0tdGVzdCAtLWxvY2FsZSBlbi1VU2AsXHJcbiAgICAgICAge2lucHV0TGluZXM6IFtcclxuICAgICAgICAgICAgJ1xcXFxuJyxcclxuICAgICAgICAgICAgJ1xcXFxyXFxcXG4nXHJcbiAgICAgICAgXX1cclxuICAgICk7XHJcbiAgICBjb25zdCAgYW5zd2VyID0gZnMucmVhZEZpbGVTeW5jKHRlc3RGb2xkZXJQYXRoICsgXCIxX2ZpcnN0XzFfb2tfMV9hbnN3ZXIudHh0XCIpXHJcbiAgICAgICAgLnRvU3RyaW5nKCkuc3Vic3RyKGN1dEJPTSk7XHJcblxyXG4gICAgLy8gQ2hlY2tcclxuICAgIGlmIChyZXR1cm5zLnN0ZG91dCAhPT0gYW5zd2VyKSB7XHJcbiAgICAgICAgcHJpbnREaWZmZXJlbnRQYXRocyhgX291dHB1dC50eHRgLCAnMV9maXJzdF8xX29rXzFfYW5zd2VyLnR4dCcpO1xyXG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmModGVzdEZvbGRlclBhdGggKyBcIl9vdXRwdXQudHh0XCIsIHJldHVybnMuc3Rkb3V0KTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gZGVsZXRlRmlsZVxyXG5mdW5jdGlvbiAgZGVsZXRlRmlsZShwYXRoOiBzdHJpbmcpIHtcclxuICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGgpKSB7XHJcbiAgICAgICAgZnMudW5saW5rU3luYyhwYXRoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gcHJpbnREaWZmZXJlbnRQYXRoc1xyXG5mdW5jdGlvbiAgcHJpbnREaWZmZXJlbnRQYXRocyhwYXRoMTogc3RyaW5nLCBwYXRoMjogc3RyaW5nKSB7XHJcblx0Y29uc29sZS5sb2coYEVycm9yOiBkaWZmZXJlbnQgYmV0d2VlbiB0aGUgZm9sbG93aW5nIGZpbGVzYCk7XHJcblx0Y29uc29sZS5sb2coYCAgUGF0aDE6ICR7dGVzdEZvbGRlckZ1bGxQYXRoICsgcGF0aDF9YCk7XHJcblx0Y29uc29sZS5sb2coYCAgUGF0aDI6ICR7dGVzdEZvbGRlckZ1bGxQYXRoICsgcGF0aDJ9YCk7XHJcbn1cclxuXHJcbi8vIGRpZmZTdHJpbmdzXHJcbmZ1bmN0aW9uICBkaWZmU3RyaW5ncyhyZXN1bHQ6IHN0cmluZywgYW5zd2VyOiBzdHJpbmcpIHtcclxuXHRjb25zdCAgcmVzdWx0RmlsZVBhdGggPSAnX291dHB1dC50eHQnO1xyXG5cdGNvbnN0ICBhbnN3ZXJGaWxlUGF0aCA9ICdfYW5zd2VyLnR4dCc7XHJcblxyXG5cdGZzLndyaXRlRmlsZVN5bmModGVzdEZvbGRlckZ1bGxQYXRoICsgcmVzdWx0RmlsZVBhdGgsIHJlc3VsdCk7XHJcblx0ZnMud3JpdGVGaWxlU3luYyh0ZXN0Rm9sZGVyRnVsbFBhdGggKyBhbnN3ZXJGaWxlUGF0aCwgYW5zd2VyKTtcclxuXHJcblx0cHJpbnREaWZmZXJlbnRQYXRocyhyZXN1bHRGaWxlUGF0aCwgYW5zd2VyRmlsZVBhdGgpO1xyXG59XHJcblxyXG4vLyBjYWxsQ2hpbGRQcm9jY2Vzc1xyXG5hc3luYyBmdW5jdGlvbiAgY2FsbENoaWxkUHJvY2Nlc3MoY29tbWFuZExpbmU6IHN0cmluZywgIG9wdGlvbj86IFByb2Nlc3NPcHRpb24pOiBQcm9taXNlPFByb2Nlc3NSZXR1cm5zPiB7XHJcblx0cmV0dXJuICAgbmV3IFByb21pc2UoIGFzeW5jIChyZXNvbHZlRnVuY3Rpb24sIHJlamVjdEZ1bmN0aW9uKSA9PiB7XHJcblx0XHRjb25zdCAgcmV0dXJuVmFsdWUgPSBuZXcgUHJvY2Vzc1JldHVybnMoKTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0ICBjaGlsZFByb2Nlc3MgPSBjaGlsZF9wcm9jZXNzLmV4ZWMoIGNvbW1hbmRMaW5lLFxyXG5cclxuXHRcdFx0XHQvLyBvbiBjbG9zZSB0aGUgXCJjaGlsZFByb2Nlc3NcIiAoMilcclxuXHRcdFx0XHQoZXJyb3I6IGNoaWxkX3Byb2Nlc3MuRXhlY0V4Y2VwdGlvbiB8IG51bGwsIHN0ZG91dDogc3RyaW5nLCBzdGRlcnI6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuVmFsdWUuc3Rkb3V0ID0gc3Rkb3V0O1xyXG5cdFx0XHRcdFx0cmV0dXJuVmFsdWUuc3RkZXJyID0gc3RkZXJyO1xyXG5cdFx0XHRcdFx0cmVzb2x2ZUZ1bmN0aW9uKHJldHVyblZhbHVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0XHRcdGlmIChvcHRpb24gJiYgY2hpbGRQcm9jZXNzLnN0ZGluKSB7XHJcblxyXG5cdFx0XHRcdGlmIChvcHRpb24uaW5wdXRMaW5lcykge1xyXG5cdFx0XHRcdFx0YXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDMwMCkpO1xyXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBpbnB1dExpbmUgb2Ygb3B0aW9uLmlucHV0TGluZXMpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coaW5wdXRMaW5lKTtcclxuXHRcdFx0XHRcdFx0Y2hpbGRQcm9jZXNzLnN0ZGluLndyaXRlKGlucHV0TGluZSArIFwiXFxuXCIpO1xyXG5cdFx0XHRcdFx0XHRhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMjAwKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNoaWxkUHJvY2Vzcy5zdGRpbi5lbmQoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gb24gY2xvc2UgdGhlIFwiY2hpbGRQcm9jZXNzXCIgKDEpXHJcblx0XHRcdGNoaWxkUHJvY2Vzcy5vbignY2xvc2UnLCAoZXhpdENvZGU6IG51bWJlcikgPT4ge1xyXG5cdFx0XHRcdHJldHVyblZhbHVlLmV4aXRDb2RlID0gZXhpdENvZGU7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjaGlsZFByb2Nlc3Mub24oJ2V4aXQnLCAoZXhpdENvZGU6IG51bWJlcikgPT4ge1xyXG5cdFx0XHRcdHJldHVyblZhbHVlLmV4aXRDb2RlID0gZXhpdENvZGU7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHR0aHJvdyBFcnJvcihgRXJyb3IgaW4gdGhlIGNvbW1hbmQgbGluZSAke2NvbW1hbmRMaW5lfWApO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG4vLyBQcm9jZXNzT3B0aW9uXHJcbmNsYXNzIFByb2Nlc3NPcHRpb24ge1xyXG5cdGlucHV0TGluZXM/OiBzdHJpbmdbXTtcclxufVxyXG5cclxuLy8gUHJvY2Vzc1JldHVybnNcclxuY2xhc3MgUHJvY2Vzc1JldHVybnMge1xyXG5cdGV4aXRDb2RlOiBudW1iZXIgPSAwO1xyXG5cdHN0ZG91dDogc3RyaW5nID0gJyc7XHJcblx0c3RkZXJyOiBzdHJpbmcgPSAnJztcclxufVxyXG5cclxuY29uc3QgIHRlc3RGb2xkZXJGdWxsUGF0aCA9IGxpYi5nZXRGdWxsUGF0aCggYC4uL3NyYy8ke3Rlc3RGb2xkZXJQYXRofWAsIHByb2Nlc3MuY3dkKCkpO1xyXG5jb25zdCAgY3V0Qk9NID0gMTtcclxuY29uc3QgIG5vdEZvdW5kID0gLTE7XHJcbm1haW4oKTtcclxuIl19