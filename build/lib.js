"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
exports.__esModule = true;
exports.cc = exports.debugOut = exports.pp = exports.getSnapshot = exports.getTestWorkFolderFullPath = exports.checkNotInGitWorking = exports.pathResolve = exports.getInputObject = exports.getInputEchoBack = exports.setInputEchoBack = exports.inputSkip = exports.inputPath = exports.input = exports.InputOption = exports.getHomePath = exports.getFullPath = exports.copyFileSync = exports.copyFolderSync = void 0;
var fs = require("fs");
var path = require("path");
var globby = require("globby");
var readline = require("readline");
try {
    var snapshots = require("./__snapshots__/main.test.ts.snap");
}
catch (e) {
}
// File group
// copyFolderSync
// #keyword: lib.ts copyFolderSync
// sourceFolder/1.txt => destinationFolderPath/1.txt
function copyFolderSync(sourceFolderPath, destinationFolderPath) {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function () {
        var currentFolderPath, destinationFolderFullPath, paths, paths_1, paths_1_1, path_, sourceFilePath, destinationFilePath, e_1_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    currentFolderPath = process.cwd();
                    destinationFolderFullPath = getFullPath(destinationFolderPath, currentFolderPath);
                    process.chdir(sourceFolderPath);
                    return [4 /*yield*/, globby(['**/*'])];
                case 1:
                    paths = _b.sent();
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 7, 8, 13]);
                    paths_1 = __asyncValues(paths);
                    _b.label = 3;
                case 3: return [4 /*yield*/, paths_1.next()];
                case 4:
                    if (!(paths_1_1 = _b.sent(), !paths_1_1.done)) return [3 /*break*/, 6];
                    path_ = paths_1_1.value;
                    sourceFilePath = path_;
                    destinationFilePath = path.resolve(destinationFolderFullPath + '/' + path_);
                    copyFileSync(sourceFilePath, destinationFilePath);
                    _b.label = 5;
                case 5: return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 13];
                case 7:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 13];
                case 8:
                    _b.trys.push([8, , 11, 12]);
                    if (!(paths_1_1 && !paths_1_1.done && (_a = paths_1["return"]))) return [3 /*break*/, 10];
                    return [4 /*yield*/, _a.call(paths_1)];
                case 9:
                    _b.sent();
                    _b.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 12: return [7 /*endfinally*/];
                case 13:
                    process.chdir(currentFolderPath);
                    return [2 /*return*/];
            }
        });
    });
}
exports.copyFolderSync = copyFolderSync;
// copyFileSync
// #keyword: lib.ts copyFileSync
// This also makes the copy target folder.
function copyFileSync(sourceFilePath, destinationFilePath) {
    var destinationFolderPath = path.dirname(destinationFilePath);
    fs.mkdirSync(destinationFolderPath, { recursive: true });
    fs.copyFileSync(sourceFilePath, destinationFilePath);
}
exports.copyFileSync = copyFileSync;
// getFullPath
// #keyword: lib.ts JavaScript (js) library getFullPath
// If "basePath" is current directory, you can call "path.resolve"
// If the variable has full path and litteral relative path, write `${___FullPath}/relative_path}`
function getFullPath(relativePath, basePath) {
    var fullPath = '';
    var slashRelativePath = relativePath.replace(/\\/g, '/');
    var colonSlashIndex = slashRelativePath.indexOf(':/');
    var slashFirstIndex = slashRelativePath.indexOf('/');
    var withProtocol = (colonSlashIndex + 1 === slashFirstIndex); // e.g.) C:/, http://
    if (relativePath[0] === '/') {
        fullPath = relativePath;
    }
    else if (relativePath[0] === '~') {
        fullPath = relativePath.replace('~', getHomePath());
    }
    else if (withProtocol) {
        fullPath = relativePath;
    }
    else {
        fullPath = path.join(basePath, relativePath);
    }
    return fullPath;
}
exports.getFullPath = getFullPath;
// getHomePath
// #keyword: lib.ts getHomePath
function getHomePath() {
    if (process.env.HOME) {
        return process.env.HOME;
    }
    else if (process.env.USERPROFILE) {
        return process.env.USERPROFILE;
    }
    else {
        throw new Error('unexpected');
    }
}
exports.getHomePath = getHomePath;
// InputOption
var InputOption = /** @class */ (function () {
    function InputOption(inputLines) {
        this.inputLines = inputLines;
        this.nextLineIndex = 0;
        this.nextParameterIndex = 2;
    }
    return InputOption;
}());
exports.InputOption = InputOption;
var testBaseFolder = String.raw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["R:homemem_cacheMyDocsrcTypeScript\typrm\test_data"], ["R:\\home\\mem_cache\\MyDoc\\src\\TypeScript\\typrm\\test_data"]))) + '\\';
// inputOption
var inputOption = new InputOption([
/*
    testBaseFolder +`____.yaml`,
    String.raw `file`,
*/
]);
// input
// #keyword: lib.ts input
// Example: const name = await input('What is your name? ');
function input(guide) {
    return __awaiter(this, void 0, void 0, function () {
        var value, value;
        return __generator(this, function (_a) {
            // Input emulation
            if (inputOption.inputLines) {
                if (inputOption.nextLineIndex < inputOption.inputLines.length) {
                    value = inputOption.inputLines[inputOption.nextLineIndex];
                    inputOption.nextLineIndex += 1;
                    console.log(guide + value);
                    return [2 /*return*/, value];
                }
            }
            // Read the starting process parameters
            while (inputOption.nextParameterIndex < process.argv.length) {
                value = process.argv[inputOption.nextParameterIndex];
                inputOption.nextParameterIndex += 1;
                if (value.substring(0, 1) !== '-') {
                    console.log(guide + value);
                    return [2 /*return*/, value];
                }
                if (value !== '--test') {
                    inputOption.nextParameterIndex += 1;
                }
            }
            // input
            return [2 /*return*/, InputObject.input(guide)];
        });
    });
}
exports.input = input;
// inputPath
// Example: const name = await input('What is your name? ');
function inputPath(guide) {
    return __awaiter(this, void 0, void 0, function () {
        var key;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, input(guide)];
                case 1:
                    key = _a.sent();
                    if (key.endsWith('()')) {
                        return [2 /*return*/, key];
                    }
                    else {
                        return [2 /*return*/, pathResolve(key)];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.inputPath = inputPath;
// inputSkip
function inputSkip(count) {
    inputOption.nextParameterIndex += count;
}
exports.inputSkip = inputSkip;
// setInputEchoBack
function setInputEchoBack(isEnabled) {
    inputEchoBack = isEnabled;
}
exports.setInputEchoBack = setInputEchoBack;
var inputEchoBack = false;
// getInputEchoBack
function getInputEchoBack() {
    return inputEchoBack;
}
exports.getInputEchoBack = getInputEchoBack;
// StandardInputBuffer
var StandardInputBuffer = /** @class */ (function () {
    function StandardInputBuffer() {
        this.inputBuffer = [];
        this.inputResolver = undefined;
    }
    StandardInputBuffer.prototype.delayedConstructor = function () {
        var _this = this;
        this.readlines = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.readlines.on('line', function (line) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.inputResolver) {
                    if (inputEchoBack) {
                        console.log(line);
                    }
                    this.inputResolver(line); // inputResolver() is resolve() in input()
                    this.inputResolver = undefined;
                }
                else {
                    this.inputBuffer.push(line);
                }
                return [2 /*return*/];
            });
        }); });
        this.readlines.setPrompt('');
        this.readlines.prompt();
    };
    StandardInputBuffer.prototype.input = function (guide) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.readlines) {
                    this.delayedConstructor();
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var nextLine = _this.inputBuffer.shift();
                        if (typeof nextLine === 'string') {
                            console.log(guide + nextLine);
                            resolve(nextLine);
                        }
                        else { // nextLine === undefnied
                            process.stdout.write(guide);
                            _this.inputResolver = resolve;
                        }
                    })];
            });
        });
    };
    StandardInputBuffer.prototype.close = function () {
        if (this.readlines) {
            this.readlines.close();
        }
    };
    return StandardInputBuffer;
}());
var InputObject = new StandardInputBuffer();
function getInputObject() {
    return InputObject;
}
exports.getInputObject = getInputObject;
// pathResolve
function pathResolve(path_) {
    // '/c/home' format to current OS format
    if (path_.length >= 3) {
        if (path_[0] === '/' && path_[2] === '/') {
            path_ = path_[1] + ':' + path_.substr(2);
        }
    }
    // Replace separators to OS format
    path_ = path.resolve(path_);
    return path_;
}
exports.pathResolve = pathResolve;
// checkNotInGitWorking
function checkNotInGitWorking() {
    var path_ = process.cwd();
    if (!path_.includes('extract_git_branches')) {
        throw new Error('This is not in project folder.');
    }
    while (path_.includes('extract_git_branches')) {
        path_ = path.dirname(path_);
    }
    while (path_ !== '/') {
        if (fs.existsSync(path_ + "/.git")) {
            throw new Error('This test is not supported with git submodule.');
        }
        path_ = path.dirname(path_);
    }
}
exports.checkNotInGitWorking = checkNotInGitWorking;
// getTestWorkFolderFullPath
function getTestWorkFolderFullPath() {
    var path_ = process.cwd();
    if (!path_.includes('extract_git_branches')) {
        throw new Error('This is not in project folder.');
    }
    while (path_.includes('extract_git_branches')) {
        path_ = path.dirname(path_);
    }
    return path_ + "/_test_of_extract_git_branches";
}
exports.getTestWorkFolderFullPath = getTestWorkFolderFullPath;
// getSnapshot
function getSnapshot(label, deafultSnapshot) {
    if (deafultSnapshot === void 0) { deafultSnapshot = undefined; }
    if (!(label in snapshots)) {
        if (!deafultSnapshot) {
            throw new Error("not found snapshot label \"" + label + "\" in \"__Project__/src/__snapshots__/main.test.ts.snap\" file.");
        }
        return deafultSnapshot;
    }
    var snapshot = snapshots[label];
    return snapshot.substr(2, snapshot.length - 4).replace(/\\\"/g, '"');
}
exports.getSnapshot = getSnapshot;
// pp
// Debug print.
// #keyword: lib.ts pp
// Example:
//    pp(var);
// Example:
//    var d = pp(var);
//    d = d;  // Set break point here and watch the variable d
// Example:
//    var d = ppClear();
//    pp(var);
// Example:
//    try {
//
//        await main();
//    } finally {
//        var d = pp('');
//        d = [];  // Set break point here and watch the variable d
//    }
function pp(message) {
    var e_2, _a, e_3, _b;
    if (message instanceof Array) {
        exports.debugOut.push("length: " + message.length);
        try {
            for (var message_1 = __values(message), message_1_1 = message_1.next(); !message_1_1.done; message_1_1 = message_1.next()) {
                var element = message_1_1.value;
                pp(element);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (message_1_1 && !message_1_1.done && (_a = message_1["return"])) _a.call(message_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    else {
        if (typeof message === 'object') {
            if (message instanceof Map) {
                var messageObject = Object.create(null);
                try {
                    for (var message_2 = __values(message), message_2_1 = message_2.next(); !message_2_1.done; message_2_1 = message_2.next()) {
                        var _c = __read(message_2_1.value, 2), k = _c[0], v = _c[1];
                        messageObject[k] = v;
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (message_2_1 && !message_2_1.done && (_b = message_2["return"])) _b.call(message_2);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                message = JSON.stringify(messageObject, null, '    ');
            }
            else {
                message = JSON.stringify(message, null, '    ');
            }
        }
        else if (message === undefined) {
            message = '(undefined)';
        }
        else if (message === null) {
            message = '(null)';
        }
        exports.debugOut.push(message.toString());
    }
    return exports.debugOut;
}
exports.pp = pp;
exports.debugOut = [];
// cc
// Through counter.
// #keyword: lib.ts cc
// Example:
//   cc();
// Example:
//   var c = cc().debugOut;  // Set break point here and watch the variable c
// Example:
//   if ( cc(2).isTarget )
//   var d = pp('');  // Set break point here and watch the variable d
function cc(targetCount, label) {
    if (targetCount === void 0) { targetCount = 9999999; }
    if (label === void 0) { label = '0'; }
    if (!(label in gCount)) {
        gCount[label] = 0;
    }
    gCount[label] += 1;
    pp(label + ":countThrough[" + label + "] = " + gCount[label]);
    var isTarget = (gCount[label] === targetCount);
    if (isTarget) {
        pp('    **** It is before the target! ****');
    }
    return { isTarget: isTarget, debugOut: exports.debugOut };
}
exports.cc = cc;
var gCount = {};
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVCQUF5QjtBQUN6QiwyQkFBNkI7QUFDN0IsK0JBQWlDO0FBQ2pDLG1DQUFxQztBQUNyQyxJQUFJO0lBQ0EsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7Q0FDaEU7QUFBQyxPQUFPLENBQUMsRUFBRTtDQUNYO0FBQ0QsYUFBYTtBQUViLGlCQUFpQjtBQUNqQixrQ0FBa0M7QUFDbEMsb0RBQW9EO0FBQ3BELFNBQXVCLGNBQWMsQ0FBQyxnQkFBd0IsRUFBRSxxQkFBNkI7Ozs7Ozs7b0JBQ2xGLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDbEMseUJBQXlCLEdBQUcsV0FBVyxDQUFDLHFCQUFxQixFQUFFLGlCQUFpQixDQUFDLENBQUM7b0JBQ3pGLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFFUCxxQkFBTSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFBOztvQkFBeEMsS0FBSyxHQUFhLFNBQXNCOzs7O29CQUNyQixVQUFBLGNBQUEsS0FBSyxDQUFBOzs7OztvQkFBZCxLQUFLLGtCQUFBLENBQUE7b0JBQ1gsY0FBYyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsR0FBRSxHQUFHLEdBQUUsS0FBSyxDQUFDLENBQUM7b0JBRWpGLFlBQVksQ0FBQyxjQUFjLEVBQUcsbUJBQW1CLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUV2RCxPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Ozs7O0NBQ3BD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UUFBUSxHQUFhLEVBQUUsQ0FBQztBQUV0QyxLQUFLO0FBQ0wsbUJBQW1CO0FBQ25CLHNCQUFzQjtBQUN0QixXQUFXO0FBQ1gsVUFBVTtBQUNWLFdBQVc7QUFDWCw2RUFBNkU7QUFDN0UsV0FBVztBQUNYLDBCQUEwQjtBQUMxQixzRUFBc0U7QUFDdEUsU0FBaUIsRUFBRSxDQUFFLFdBQTZCLEVBQUUsS0FBbUI7SUFBbEQsNEJBQUEsRUFBQSxxQkFBNkI7SUFBRSxzQkFBQSxFQUFBLFdBQW1CO0lBQ25FLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsRUFBRTtRQUNwQixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3JCO0lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQixFQUFFLENBQUssS0FBSyxzQkFBaUIsS0FBSyxZQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUcsQ0FBRSxDQUFDO0lBQzNELElBQU0sUUFBUSxHQUFHLENBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLFdBQVcsQ0FBRSxDQUFDO0lBRW5ELElBQUksUUFBUSxFQUFFO1FBQ1YsRUFBRSxDQUFFLHdDQUF3QyxDQUFFLENBQUM7S0FDbEQ7SUFDRCxPQUFRLEVBQUUsUUFBUSxVQUFBLEVBQUUsUUFBUSxrQkFBQSxFQUFFLENBQUM7QUFDbkMsQ0FBQztBQWJELGdCQWFDO0FBQ0QsSUFBTyxNQUFNLEdBQTZCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCAqIGFzIGdsb2JieSBmcm9tICdnbG9iYnknO1xyXG5pbXBvcnQgKiBhcyByZWFkbGluZSBmcm9tICdyZWFkbGluZSc7XHJcbnRyeSB7XHJcbiAgICB2YXIgc25hcHNob3RzID0gcmVxdWlyZShcIi4vX19zbmFwc2hvdHNfXy9tYWluLnRlc3QudHMuc25hcFwiKTtcclxufSBjYXRjaCAoZSkge1xyXG59XHJcbi8vIEZpbGUgZ3JvdXBcclxuXHJcbi8vIGNvcHlGb2xkZXJTeW5jXHJcbi8vICNrZXl3b3JkOiBsaWIudHMgY29weUZvbGRlclN5bmNcclxuLy8gc291cmNlRm9sZGVyLzEudHh0ID0+IGRlc3RpbmF0aW9uRm9sZGVyUGF0aC8xLnR4dFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gIGNvcHlGb2xkZXJTeW5jKHNvdXJjZUZvbGRlclBhdGg6IHN0cmluZywgZGVzdGluYXRpb25Gb2xkZXJQYXRoOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0ICBjdXJyZW50Rm9sZGVyUGF0aCA9IHByb2Nlc3MuY3dkKCk7XHJcbiAgICBjb25zdCAgZGVzdGluYXRpb25Gb2xkZXJGdWxsUGF0aCA9IGdldEZ1bGxQYXRoKGRlc3RpbmF0aW9uRm9sZGVyUGF0aCwgY3VycmVudEZvbGRlclBhdGgpO1xyXG4gICAgcHJvY2Vzcy5jaGRpcihzb3VyY2VGb2xkZXJQYXRoKTtcclxuXHJcbiAgICBjb25zdCAgcGF0aHM6IHN0cmluZ1tdID0gYXdhaXQgZ2xvYmJ5KFsnKiovKiddKTtcclxuICAgIGZvciBhd2FpdCAoY29uc3QgcGF0aF8gb2YgcGF0aHMpIHtcclxuICAgICAgICBjb25zdCAgc291cmNlRmlsZVBhdGggPSBwYXRoXztcclxuICAgICAgICBjb25zdCAgZGVzdGluYXRpb25GaWxlUGF0aCA9IHBhdGgucmVzb2x2ZShkZXN0aW5hdGlvbkZvbGRlckZ1bGxQYXRoICsnLycrIHBhdGhfKTtcclxuXHJcbiAgICAgICAgY29weUZpbGVTeW5jKHNvdXJjZUZpbGVQYXRoLCAgZGVzdGluYXRpb25GaWxlUGF0aCk7XHJcbiAgICB9XHJcbiAgICBwcm9jZXNzLmNoZGlyKGN1cnJlbnRGb2xkZXJQYXRoKTtcclxufVxyXG5cclxuLy8gY29weUZpbGVTeW5jXHJcbi8vICNrZXl3b3JkOiBsaWIudHMgY29weUZpbGVTeW5jXHJcbi8vIFRoaXMgYWxzbyBtYWtlcyB0aGUgY29weSB0YXJnZXQgZm9sZGVyLlxyXG5leHBvcnQgZnVuY3Rpb24gIGNvcHlGaWxlU3luYyhzb3VyY2VGaWxlUGF0aDogc3RyaW5nLCBkZXN0aW5hdGlvbkZpbGVQYXRoOiBzdHJpbmcpIHtcclxuXHRjb25zdCAgZGVzdGluYXRpb25Gb2xkZXJQYXRoID0gcGF0aC5kaXJuYW1lKGRlc3RpbmF0aW9uRmlsZVBhdGgpO1xyXG5cdGZzLm1rZGlyU3luYyhkZXN0aW5hdGlvbkZvbGRlclBhdGgsIHtyZWN1cnNpdmU6IHRydWV9KTtcclxuXHJcblx0ZnMuY29weUZpbGVTeW5jKHNvdXJjZUZpbGVQYXRoLCBkZXN0aW5hdGlvbkZpbGVQYXRoKTtcclxufVxyXG5cclxuLy8gZ2V0RnVsbFBhdGhcclxuLy8gI2tleXdvcmQ6IGxpYi50cyBKYXZhU2NyaXB0IChqcykgbGlicmFyeSBnZXRGdWxsUGF0aFxyXG4vLyBJZiBcImJhc2VQYXRoXCIgaXMgY3VycmVudCBkaXJlY3RvcnksIHlvdSBjYW4gY2FsbCBcInBhdGgucmVzb2x2ZVwiXHJcbi8vIElmIHRoZSB2YXJpYWJsZSBoYXMgZnVsbCBwYXRoIGFuZCBsaXR0ZXJhbCByZWxhdGl2ZSBwYXRoLCB3cml0ZSBgJHtfX19GdWxsUGF0aH0vcmVsYXRpdmVfcGF0aH1gXHJcbmV4cG9ydCBmdW5jdGlvbiAgZ2V0RnVsbFBhdGgocmVsYXRpdmVQYXRoOiBzdHJpbmcsIGJhc2VQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgdmFyICAgIGZ1bGxQYXRoID0gJyc7XHJcbiAgICBjb25zdCAgc2xhc2hSZWxhdGl2ZVBhdGggPSByZWxhdGl2ZVBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7XHJcbiAgICBjb25zdCAgY29sb25TbGFzaEluZGV4ID0gc2xhc2hSZWxhdGl2ZVBhdGguaW5kZXhPZignOi8nKTtcclxuICAgIGNvbnN0ICBzbGFzaEZpcnN0SW5kZXggPSBzbGFzaFJlbGF0aXZlUGF0aC5pbmRleE9mKCcvJyk7XHJcbiAgICBjb25zdCAgd2l0aFByb3RvY29sID0gKGNvbG9uU2xhc2hJbmRleCArIDEgPT09IHNsYXNoRmlyc3RJbmRleCk7ICAvLyBlLmcuKSBDOi8sIGh0dHA6Ly9cclxuXHJcbiAgICBpZiAocmVsYXRpdmVQYXRoWzBdID09PSAnLycpIHtcclxuICAgICAgICBmdWxsUGF0aCA9IHJlbGF0aXZlUGF0aDtcclxuICAgIH0gZWxzZSBpZiAocmVsYXRpdmVQYXRoWzBdID09PSAnficpIHtcclxuICAgICAgICBmdWxsUGF0aCA9IHJlbGF0aXZlUGF0aC5yZXBsYWNlKCd+JywgZ2V0SG9tZVBhdGgoKSApO1xyXG4gICAgfSBlbHNlIGlmICh3aXRoUHJvdG9jb2wpIHtcclxuICAgICAgICBmdWxsUGF0aCA9IHJlbGF0aXZlUGF0aDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZnVsbFBhdGggPSBwYXRoLmpvaW4oYmFzZVBhdGgsIHJlbGF0aXZlUGF0aCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gIGZ1bGxQYXRoO1xyXG59XHJcblxyXG4vLyBnZXRIb21lUGF0aFxyXG4vLyAja2V5d29yZDogbGliLnRzIGdldEhvbWVQYXRoXHJcbmV4cG9ydCBmdW5jdGlvbiAgZ2V0SG9tZVBhdGgoKTogc3RyaW5nIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5IT01FKSB7XHJcbiAgICAgICAgcmV0dXJuICBwcm9jZXNzLmVudi5IT01FO1xyXG4gICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5VU0VSUFJPRklMRSkge1xyXG4gICAgICAgIHJldHVybiAgcHJvY2Vzcy5lbnYuVVNFUlBST0ZJTEU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5leHBlY3RlZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gSW5wdXRPcHRpb25cclxuZXhwb3J0IGNsYXNzIElucHV0T3B0aW9uIHtcclxuICAgIGlucHV0TGluZXM6IHN0cmluZ1tdO1xyXG4gICAgbmV4dExpbmVJbmRleDogbnVtYmVyO1xyXG4gICAgbmV4dFBhcmFtZXRlckluZGV4OiBudW1iZXI7ICAvLyBUaGUgaW5kZXggb2YgdGhlIHN0YXJ0aW5nIHByb2Nlc3MgcGFyYW1ldGVyc1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlucHV0TGluZXM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dExpbmVzID0gaW5wdXRMaW5lcztcclxuICAgICAgICB0aGlzLm5leHRMaW5lSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMubmV4dFBhcmFtZXRlckluZGV4ID0gMjtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgIHRlc3RCYXNlRm9sZGVyID0gU3RyaW5nLnJhdyBgUjpcXGhvbWVcXG1lbV9jYWNoZVxcTXlEb2NcXHNyY1xcVHlwZVNjcmlwdFxcdHlwcm1cXHRlc3RfZGF0YWArJ1xcXFwnO1xyXG5cclxuLy8gaW5wdXRPcHRpb25cclxuY29uc3QgaW5wdXRPcHRpb24gPSBuZXcgSW5wdXRPcHRpb24oW1xyXG4vKlxyXG4gICAgdGVzdEJhc2VGb2xkZXIgK2BfX19fLnlhbWxgLFxyXG4gICAgU3RyaW5nLnJhdyBgZmlsZWAsXHJcbiovXHJcbl0pO1xyXG5cclxuLy8gaW5wdXRcclxuLy8gI2tleXdvcmQ6IGxpYi50cyBpbnB1dFxyXG4vLyBFeGFtcGxlOiBjb25zdCBuYW1lID0gYXdhaXQgaW5wdXQoJ1doYXQgaXMgeW91ciBuYW1lPyAnKTtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uICBpbnB1dCggZ3VpZGU6IHN0cmluZyApOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgLy8gSW5wdXQgZW11bGF0aW9uXHJcbiAgICBpZiAoaW5wdXRPcHRpb24uaW5wdXRMaW5lcykge1xyXG4gICAgICAgIGlmIChpbnB1dE9wdGlvbi5uZXh0TGluZUluZGV4IDwgaW5wdXRPcHRpb24uaW5wdXRMaW5lcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgIHZhbHVlID0gaW5wdXRPcHRpb24uaW5wdXRMaW5lc1tpbnB1dE9wdGlvbi5uZXh0TGluZUluZGV4XTtcclxuICAgICAgICAgICAgaW5wdXRPcHRpb24ubmV4dExpbmVJbmRleCArPSAxO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhndWlkZSArIHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAgdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlYWQgdGhlIHN0YXJ0aW5nIHByb2Nlc3MgcGFyYW1ldGVyc1xyXG4gICAgd2hpbGUgKGlucHV0T3B0aW9uLm5leHRQYXJhbWV0ZXJJbmRleCA8IHByb2Nlc3MuYXJndi5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCAgdmFsdWUgPSBwcm9jZXNzLmFyZ3ZbaW5wdXRPcHRpb24ubmV4dFBhcmFtZXRlckluZGV4XTtcclxuICAgICAgICBpbnB1dE9wdGlvbi5uZXh0UGFyYW1ldGVySW5kZXggKz0gMTtcclxuICAgICAgICBpZiAodmFsdWUuc3Vic3RyaW5nKDAsMSkgIT09ICctJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhndWlkZSArIHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAgdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gJy0tdGVzdCcpIHtcclxuICAgICAgICAgICAgaW5wdXRPcHRpb24ubmV4dFBhcmFtZXRlckluZGV4ICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGlucHV0XHJcbiAgICByZXR1cm4gIElucHV0T2JqZWN0LmlucHV0KGd1aWRlKTtcclxufVxyXG5cclxuLy8gaW5wdXRQYXRoXHJcbi8vIEV4YW1wbGU6IGNvbnN0IG5hbWUgPSBhd2FpdCBpbnB1dCgnV2hhdCBpcyB5b3VyIG5hbWU/ICcpO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gIGlucHV0UGF0aCggZ3VpZGU6IHN0cmluZyApIHtcclxuICAgIGNvbnN0ICBrZXkgPSBhd2FpdCBpbnB1dChndWlkZSk7XHJcbiAgICBpZiAoa2V5LmVuZHNXaXRoKCcoKScpKSB7XHJcbiAgICAgICAgcmV0dXJuICBrZXk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAgcGF0aFJlc29sdmUoa2V5KTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gaW5wdXRTa2lwXHJcbmV4cG9ydCBmdW5jdGlvbiAgaW5wdXRTa2lwKGNvdW50OiBudW1iZXIpIHtcclxuICAgIGlucHV0T3B0aW9uLm5leHRQYXJhbWV0ZXJJbmRleCArPSBjb3VudDtcclxufVxyXG5cclxuLy8gc2V0SW5wdXRFY2hvQmFja1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0SW5wdXRFY2hvQmFjayhpc0VuYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIGlucHV0RWNob0JhY2sgPSBpc0VuYWJsZWQ7XHJcbn1cclxudmFyICBpbnB1dEVjaG9CYWNrID0gZmFsc2U7XHJcblxyXG4vLyBnZXRJbnB1dEVjaG9CYWNrXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnB1dEVjaG9CYWNrKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICBpbnB1dEVjaG9CYWNrO1xyXG59XHJcblxyXG4vLyBTdGFuZGFyZElucHV0QnVmZmVyXHJcbmNsYXNzICBTdGFuZGFyZElucHV0QnVmZmVyIHtcclxuICAgIHJlYWRsaW5lczogcmVhZGxpbmUuSW50ZXJmYWNlIHwgdW5kZWZpbmVkO1xyXG4gICAgaW5wdXRCdWZmZXI6IHN0cmluZ1tdID0gW107XHJcbiAgICBpbnB1dFJlc29sdmVyPzogKGFuc3dlcjpzdHJpbmcpPT52b2lkID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIGRlbGF5ZWRDb25zdHJ1Y3RvcigpIHsgIC8vIEl0IGlzIG5vdCBjb25zdHJ1Y3RvciwgYmVjYXVzZSBcImNyZWF0ZUludGVyZmFjZVwiIHN0b3BzIHRoZSBwcm9ncmFtLCBpZiBzdGRpbiB3YXMgbm90IHVzZWQuXHJcbiAgICAgICAgdGhpcy5yZWFkbGluZXMgPSByZWFkbGluZS5jcmVhdGVJbnRlcmZhY2Uoe1xyXG4gICAgICAgICAgICBpbnB1dDogcHJvY2Vzcy5zdGRpbixcclxuICAgICAgICAgICAgb3V0cHV0OiBwcm9jZXNzLnN0ZG91dFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucmVhZGxpbmVzLm9uKCdsaW5lJywgYXN5bmMgKGxpbmU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dFJlc29sdmVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXRFY2hvQmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFJlc29sdmVyKGxpbmUpOyAgLy8gaW5wdXRSZXNvbHZlcigpIGlzIHJlc29sdmUoKSBpbiBpbnB1dCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0UmVzb2x2ZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0QnVmZmVyLnB1c2gobGluZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWFkbGluZXMuc2V0UHJvbXB0KCcnKTtcclxuICAgICAgICB0aGlzLnJlYWRsaW5lcy5wcm9tcHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyAgaW5wdXQoZ3VpZGU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJlYWRsaW5lcykge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGF5ZWRDb25zdHJ1Y3RvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICBuZXcgUHJvbWlzZShcclxuICAgICAgICAgICAgKHJlc29sdmU6IChhbnN3ZXI6c3RyaW5nKT0+dm9pZCwgIHJlamVjdDogKGFuc3dlcjpzdHJpbmcpPT52b2lkICkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0ICBuZXh0TGluZSA9IHRoaXMuaW5wdXRCdWZmZXIuc2hpZnQoKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXh0TGluZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGd1aWRlICsgbmV4dExpbmUpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXh0TGluZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7ICAvLyBuZXh0TGluZSA9PT0gdW5kZWZuaWVkXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShndWlkZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0UmVzb2x2ZXIgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVhZGxpbmVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZGxpbmVzLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmNvbnN0ICBJbnB1dE9iamVjdCA9IG5ldyBTdGFuZGFyZElucHV0QnVmZmVyKCk7XHJcbmV4cG9ydCBmdW5jdGlvbiAgZ2V0SW5wdXRPYmplY3QoKTogU3RhbmRhcmRJbnB1dEJ1ZmZlciB7XHJcbiAgICByZXR1cm4gIElucHV0T2JqZWN0O1xyXG59XHJcblxyXG4vLyBwYXRoUmVzb2x2ZVxyXG5leHBvcnQgZnVuY3Rpb24gIHBhdGhSZXNvbHZlKHBhdGhfOiBzdHJpbmcpIHtcclxuXHJcbiAgICAvLyAnL2MvaG9tZScgZm9ybWF0IHRvIGN1cnJlbnQgT1MgZm9ybWF0XHJcbiAgICBpZiAocGF0aF8ubGVuZ3RoID49IDMpIHtcclxuICAgICAgICBpZiAocGF0aF9bMF0gPT09ICcvJyAgJiYgIHBhdGhfWzJdID09PSAnLycpIHtcclxuICAgICAgICAgICAgcGF0aF8gPSBwYXRoX1sxXSArJzonKyBwYXRoXy5zdWJzdHIoMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlcGxhY2Ugc2VwYXJhdG9ycyB0byBPUyBmb3JtYXRcclxuICAgIHBhdGhfID0gcGF0aC5yZXNvbHZlKHBhdGhfKTtcclxuXHJcbiAgICByZXR1cm4gcGF0aF9cclxufVxyXG5cclxuLy8gY2hlY2tOb3RJbkdpdFdvcmtpbmdcclxuZXhwb3J0IGZ1bmN0aW9uICBjaGVja05vdEluR2l0V29ya2luZygpIHtcclxuICAgIHZhciAgcGF0aF8gPSBwcm9jZXNzLmN3ZCgpO1xyXG5cclxuICAgIGlmICggISBwYXRoXy5pbmNsdWRlcygnZXh0cmFjdF9naXRfYnJhbmNoZXMnKSkge1xyXG4gICAgICAgIHRocm93ICBuZXcgRXJyb3IoJ1RoaXMgaXMgbm90IGluIHByb2plY3QgZm9sZGVyLicpXHJcbiAgICB9XHJcbiAgICB3aGlsZSAocGF0aF8uaW5jbHVkZXMoJ2V4dHJhY3RfZ2l0X2JyYW5jaGVzJykpIHtcclxuICAgICAgICBwYXRoXyA9IHBhdGguZGlybmFtZShwYXRoXyk7XHJcbiAgICB9XHJcbiAgICB3aGlsZSAocGF0aF8gIT09ICcvJykge1xyXG5cclxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhgJHtwYXRoX30vLmdpdGApKSB7XHJcbiAgICAgICAgICAgIHRocm93ICBuZXcgRXJyb3IoJ1RoaXMgdGVzdCBpcyBub3Qgc3VwcG9ydGVkIHdpdGggZ2l0IHN1Ym1vZHVsZS4nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBwYXRoXyA9IHBhdGguZGlybmFtZShwYXRoXyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGdldFRlc3RXb3JrRm9sZGVyRnVsbFBhdGhcclxuZXhwb3J0IGZ1bmN0aW9uICBnZXRUZXN0V29ya0ZvbGRlckZ1bGxQYXRoKCk6IHN0cmluZyB7XHJcbiAgICB2YXIgIHBhdGhfID0gcHJvY2Vzcy5jd2QoKTtcclxuXHJcbiAgICBpZiAoICEgcGF0aF8uaW5jbHVkZXMoJ2V4dHJhY3RfZ2l0X2JyYW5jaGVzJykpIHtcclxuICAgICAgICB0aHJvdyAgbmV3IEVycm9yKCdUaGlzIGlzIG5vdCBpbiBwcm9qZWN0IGZvbGRlci4nKVxyXG4gICAgfVxyXG4gICAgd2hpbGUgKHBhdGhfLmluY2x1ZGVzKCdleHRyYWN0X2dpdF9icmFuY2hlcycpKSB7XHJcbiAgICAgICAgcGF0aF8gPSBwYXRoLmRpcm5hbWUocGF0aF8pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAgYCR7cGF0aF99L190ZXN0X29mX2V4dHJhY3RfZ2l0X2JyYW5jaGVzYDtcclxufVxyXG5cclxuLy8gZ2V0U25hcHNob3RcclxuZXhwb3J0IGZ1bmN0aW9uICBnZXRTbmFwc2hvdChsYWJlbDogc3RyaW5nLCBkZWFmdWx0U25hcHNob3Q6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKCAhIChsYWJlbCBpbiBzbmFwc2hvdHMpKSB7XHJcbiAgICAgICAgaWYgKCAhIGRlYWZ1bHRTbmFwc2hvdCkge1xyXG4gICAgICAgICAgICB0aHJvdyAgbmV3IEVycm9yKGBub3QgZm91bmQgc25hcHNob3QgbGFiZWwgXCIke2xhYmVsfVwiIGluIFwiX19Qcm9qZWN0X18vc3JjL19fc25hcHNob3RzX18vbWFpbi50ZXN0LnRzLnNuYXBcIiBmaWxlLmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gIGRlYWZ1bHRTbmFwc2hvdDtcclxuICAgIH1cclxuICAgIGNvbnN0ICBzbmFwc2hvdCA9IHNuYXBzaG90c1tsYWJlbF07XHJcbiAgICByZXR1cm4gIHNuYXBzaG90LnN1YnN0cigyLCBzbmFwc2hvdC5sZW5ndGggLSA0KS5yZXBsYWNlKC9cXFxcXFxcIi9nLCAnXCInKTtcclxufVxyXG5cclxuLy8gcHBcclxuLy8gRGVidWcgcHJpbnQuXHJcbi8vICNrZXl3b3JkOiBsaWIudHMgcHBcclxuLy8gRXhhbXBsZTpcclxuLy8gICAgcHAodmFyKTtcclxuLy8gRXhhbXBsZTpcclxuLy8gICAgdmFyIGQgPSBwcCh2YXIpO1xyXG4vLyAgICBkID0gZDsgIC8vIFNldCBicmVhayBwb2ludCBoZXJlIGFuZCB3YXRjaCB0aGUgdmFyaWFibGUgZFxyXG4vLyBFeGFtcGxlOlxyXG4vLyAgICB2YXIgZCA9IHBwQ2xlYXIoKTtcclxuLy8gICAgcHAodmFyKTtcclxuLy8gRXhhbXBsZTpcclxuLy8gICAgdHJ5IHtcclxuLy9cclxuLy8gICAgICAgIGF3YWl0IG1haW4oKTtcclxuLy8gICAgfSBmaW5hbGx5IHtcclxuLy8gICAgICAgIHZhciBkID0gcHAoJycpO1xyXG4vLyAgICAgICAgZCA9IFtdOyAgLy8gU2V0IGJyZWFrIHBvaW50IGhlcmUgYW5kIHdhdGNoIHRoZSB2YXJpYWJsZSBkXHJcbi8vICAgIH1cclxuZXhwb3J0IGZ1bmN0aW9uICBwcChtZXNzYWdlOiBhbnkpIHtcclxuICAgIGlmIChtZXNzYWdlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICBkZWJ1Z091dC5wdXNoKGBsZW5ndGg6ICR7bWVzc2FnZS5sZW5ndGh9YCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgcHAoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlIGluc3RhbmNlb2YgTWFwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAgbWVzc2FnZU9iamVjdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBbayx2XSBvZiBtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU9iamVjdFtrXSA9IHY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZU9iamVjdCwgbnVsbCwgJyAgICAnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlLCBudWxsLCAnICAgICcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbWVzc2FnZSA9ICcodW5kZWZpbmVkKSc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSAnKG51bGwpJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVidWdPdXQucHVzaChtZXNzYWdlLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlYnVnT3V0O1xyXG59XHJcbmV4cG9ydCBjb25zdCAgZGVidWdPdXQ6IHN0cmluZ1tdID0gW107XHJcblxyXG4vLyBjY1xyXG4vLyBUaHJvdWdoIGNvdW50ZXIuXHJcbi8vICNrZXl3b3JkOiBsaWIudHMgY2NcclxuLy8gRXhhbXBsZTpcclxuLy8gICBjYygpO1xyXG4vLyBFeGFtcGxlOlxyXG4vLyAgIHZhciBjID0gY2MoKS5kZWJ1Z091dDsgIC8vIFNldCBicmVhayBwb2ludCBoZXJlIGFuZCB3YXRjaCB0aGUgdmFyaWFibGUgY1xyXG4vLyBFeGFtcGxlOlxyXG4vLyAgIGlmICggY2MoMikuaXNUYXJnZXQgKVxyXG4vLyAgIHZhciBkID0gcHAoJycpOyAgLy8gU2V0IGJyZWFrIHBvaW50IGhlcmUgYW5kIHdhdGNoIHRoZSB2YXJpYWJsZSBkXHJcbmV4cG9ydCBmdW5jdGlvbiAgY2MoIHRhcmdldENvdW50OiBudW1iZXIgPSA5OTk5OTk5LCBsYWJlbDogc3RyaW5nID0gJzAnICkge1xyXG4gICAgaWYgKCEobGFiZWwgaW4gZ0NvdW50KSkge1xyXG4gICAgICAgIGdDb3VudFtsYWJlbF0gPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdDb3VudFtsYWJlbF0gKz0gMTtcclxuICAgIHBwKCBgJHtsYWJlbH06Y291bnRUaHJvdWdoWyR7bGFiZWx9XSA9ICR7Z0NvdW50W2xhYmVsXX1gICk7XHJcbiAgICBjb25zdCBpc1RhcmdldCA9ICggZ0NvdW50W2xhYmVsXSA9PT0gdGFyZ2V0Q291bnQgKTtcclxuXHJcbiAgICBpZiAoaXNUYXJnZXQpIHtcclxuICAgICAgICBwcCggJyAgICAqKioqIEl0IGlzIGJlZm9yZSB0aGUgdGFyZ2V0ISAqKioqJyApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICB7IGlzVGFyZ2V0LCBkZWJ1Z091dCB9O1xyXG59XHJcbmNvbnN0ICBnQ291bnQ6IHtbbmFtZTogc3RyaW5nXTogbnVtYmVyfSA9IHt9O1xyXG4iXX0=