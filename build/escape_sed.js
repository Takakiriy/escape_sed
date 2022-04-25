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
var commander = require("commander");
var main = require("./main");
var lib = require("./lib");
function exitFromCommander(e) {
    if (e.code !== 'commander.version') {
        console.log(e.message);
    }
}
function callMain() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, arg;
        var e_1, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    commander.program.version('0.1.1').exitOverride(exitFromCommander)
                        .exitOverride(exitFromCommander)
                        .parse(process.argv);
                    try {
                        for (_a = __values(commander.program.args), _b = _a.next(); !_b.done; _b = _a.next()) {
                            arg = _b.value;
                            main.programArguments.push(arg);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    Object.assign(main.programOptions, commander.program.opts());
                    return [4 /*yield*/, main.main()["catch"](function (e) {
                            if (main.programOptions.test) {
                                throw e;
                            }
                            else {
                                console.log("ERROR: " + e.message);
                                var timeOver = new Date();
                                timeOver.setSeconds(timeOver.getSeconds() + 1);
                                while ((new Date()).getTime() < timeOver.getTime()) {
                                }
                            }
                        })["finally"](function () {
                            lib.getInputObject().close();
                        })];
                case 1:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    });
}
callMain();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYXBlX3NlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9lc2NhcGVfc2VkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBdUM7QUFDdkMsNkJBQStCO0FBQy9CLDJCQUE2QjtBQUU3QixTQUFVLGlCQUFpQixDQUFDLENBQTJCO0lBQ25ELElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxtQkFBbUIsRUFBRTtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMxQjtBQUNMLENBQUM7QUFDRCxTQUFnQixRQUFROzs7Ozs7O29CQUNwQixTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUM7eUJBQzdELFlBQVksQ0FBQyxpQkFBaUIsQ0FBQzt5QkFDL0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7d0JBRXpCLEtBQWtCLEtBQUEsU0FBQSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQSw0Q0FBRTs0QkFBL0IsR0FBRzs0QkFDVixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUNuQzs7Ozs7Ozs7O29CQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7b0JBRTdELHFCQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FDYixPQUFLLENBQUEsQ0FBRSxVQUFDLENBQUM7NEJBQ04sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRTtnQ0FDMUIsTUFBTSxDQUFDLENBQUM7NkJBQ1g7aUNBQU07Z0NBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBRSxZQUFVLENBQUMsQ0FBQyxPQUFTLENBQUUsQ0FBQztnQ0FDckMsSUFBTyxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQ0FDN0IsUUFBUSxDQUFDLFVBQVUsQ0FBRSxRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFFLENBQUM7Z0NBRWpELE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFO2lDQUNuRDs2QkFDSjt3QkFDTCxDQUFDLENBQUMsQ0FDRCxTQUFPLENBQUEsQ0FBQzs0QkFDTCxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ2pDLENBQUMsQ0FBQyxFQUFBOztvQkFoQk4sU0FnQk0sQ0FBQzs7Ozs7Q0FDVjtBQUNELFFBQVEsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY29tbWFuZGVyIGZyb20gJ2NvbW1hbmRlcic7XHJcbmltcG9ydCAqIGFzIG1haW4gZnJvbSAnLi9tYWluJztcclxuaW1wb3J0ICogYXMgbGliIGZyb20gJy4vbGliJztcclxuXHJcbmZ1bmN0aW9uICBleGl0RnJvbUNvbW1hbmRlcihlOiBjb21tYW5kZXIuQ29tbWFuZGVyRXJyb3IpIHtcclxuICAgIGlmIChlLmNvZGUgIT09ICdjb21tYW5kZXIudmVyc2lvbicpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uICBjYWxsTWFpbigpIHtcclxuICAgIGNvbW1hbmRlci5wcm9ncmFtLnZlcnNpb24oJzAuMS4xJykuZXhpdE92ZXJyaWRlKGV4aXRGcm9tQ29tbWFuZGVyKVxyXG4gICAgICAgIC5leGl0T3ZlcnJpZGUoZXhpdEZyb21Db21tYW5kZXIpXHJcbiAgICAgICAgLnBhcnNlKHByb2Nlc3MuYXJndik7XHJcblxyXG4gICAgZm9yIChjb25zdCBhcmcgb2YgY29tbWFuZGVyLnByb2dyYW0uYXJncykge1xyXG4gICAgICAgIG1haW4ucHJvZ3JhbUFyZ3VtZW50cy5wdXNoKGFyZyk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuYXNzaWduKG1haW4ucHJvZ3JhbU9wdGlvbnMsIGNvbW1hbmRlci5wcm9ncmFtLm9wdHMoKSk7XHJcblxyXG4gICAgYXdhaXQgIG1haW4ubWFpbigpXHJcbiAgICAgICAgLmNhdGNoKCAoZSk9PntcclxuICAgICAgICAgICAgaWYgKG1haW4ucHJvZ3JhbU9wdGlvbnMudGVzdCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggYEVSUk9SOiAke2UubWVzc2FnZX1gICk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAgdGltZU92ZXIgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGltZU92ZXIuc2V0U2Vjb25kcyggdGltZU92ZXIuZ2V0U2Vjb25kcygpICsgMSApO1xyXG5cclxuICAgICAgICAgICAgICAgIHdoaWxlICgobmV3IERhdGUoKSkuZ2V0VGltZSgpIDwgdGltZU92ZXIuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maW5hbGx5KCgpPT57XHJcbiAgICAgICAgICAgIGxpYi5nZXRJbnB1dE9iamVjdCgpLmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuY2FsbE1haW4oKTtcclxuIl19