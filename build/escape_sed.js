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
        var _i, _a, arg;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    commander.program.version('0.1.1').exitOverride(exitFromCommander)
                        .exitOverride(exitFromCommander)
                        .parse(process.argv);
                    for (_i = 0, _a = commander.program.args; _i < _a.length; _i++) {
                        arg = _a[_i];
                        main.programArguments.push(arg);
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
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
callMain();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYXBlX3NlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9lc2NhcGVfc2VkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQXVDO0FBQ3ZDLDZCQUErQjtBQUMvQiwyQkFBNkI7QUFFN0IsU0FBVSxpQkFBaUIsQ0FBQyxDQUEyQjtJQUNuRCxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssbUJBQW1CLEVBQUU7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDMUI7QUFDTCxDQUFDO0FBQ0QsU0FBZ0IsUUFBUTs7Ozs7O29CQUNwQixTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUM7eUJBQzdELFlBQVksQ0FBQyxpQkFBaUIsQ0FBQzt5QkFDL0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFekIsV0FBd0MsRUFBdEIsS0FBQSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBdEIsY0FBc0IsRUFBdEIsSUFBc0IsRUFBRTt3QkFBL0IsR0FBRzt3QkFDVixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNuQztvQkFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUU3RCxxQkFBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQ2IsT0FBSyxDQUFBLENBQUUsVUFBQyxDQUFDOzRCQUNOLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUU7Z0NBQzFCLE1BQU0sQ0FBQyxDQUFDOzZCQUNYO2lDQUFNO2dDQUVILE9BQU8sQ0FBQyxHQUFHLENBQUUsWUFBVSxDQUFDLENBQUMsT0FBUyxDQUFFLENBQUM7Z0NBQ3JDLElBQU8sUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7Z0NBQzdCLFFBQVEsQ0FBQyxVQUFVLENBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBRSxDQUFDO2dDQUVqRCxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRTtpQ0FDbkQ7NkJBQ0o7d0JBQ0wsQ0FBQyxDQUFDLENBQ0QsU0FBTyxDQUFBLENBQUM7NEJBQ0wsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNqQyxDQUFDLENBQUMsRUFBQTs7b0JBaEJOLFNBZ0JNLENBQUM7Ozs7O0NBQ1Y7QUFDRCxRQUFRLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvbW1hbmRlciBmcm9tICdjb21tYW5kZXInO1xyXG5pbXBvcnQgKiBhcyBtYWluIGZyb20gJy4vbWFpbic7XHJcbmltcG9ydCAqIGFzIGxpYiBmcm9tICcuL2xpYic7XHJcblxyXG5mdW5jdGlvbiAgZXhpdEZyb21Db21tYW5kZXIoZTogY29tbWFuZGVyLkNvbW1hbmRlckVycm9yKSB7XHJcbiAgICBpZiAoZS5jb2RlICE9PSAnY29tbWFuZGVyLnZlcnNpb24nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcclxuICAgIH1cclxufVxyXG5hc3luYyBmdW5jdGlvbiAgY2FsbE1haW4oKSB7XHJcbiAgICBjb21tYW5kZXIucHJvZ3JhbS52ZXJzaW9uKCcwLjEuMScpLmV4aXRPdmVycmlkZShleGl0RnJvbUNvbW1hbmRlcilcclxuICAgICAgICAuZXhpdE92ZXJyaWRlKGV4aXRGcm9tQ29tbWFuZGVyKVxyXG4gICAgICAgIC5wYXJzZShwcm9jZXNzLmFyZ3YpO1xyXG5cclxuICAgIGZvciAoY29uc3QgYXJnIG9mIGNvbW1hbmRlci5wcm9ncmFtLmFyZ3MpIHtcclxuICAgICAgICBtYWluLnByb2dyYW1Bcmd1bWVudHMucHVzaChhcmcpO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmFzc2lnbihtYWluLnByb2dyYW1PcHRpb25zLCBjb21tYW5kZXIucHJvZ3JhbS5vcHRzKCkpO1xyXG5cclxuICAgIGF3YWl0ICBtYWluLm1haW4oKVxyXG4gICAgICAgIC5jYXRjaCggKGUpPT57XHJcbiAgICAgICAgICAgIGlmIChtYWluLnByb2dyYW1PcHRpb25zLnRlc3QpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coIGBFUlJPUjogJHtlLm1lc3NhZ2V9YCApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgIHRpbWVPdmVyID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgIHRpbWVPdmVyLnNldFNlY29uZHMoIHRpbWVPdmVyLmdldFNlY29uZHMoKSArIDEgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSA8IHRpbWVPdmVyLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmluYWxseSgoKT0+e1xyXG4gICAgICAgICAgICBsaWIuZ2V0SW5wdXRPYmplY3QoKS5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG59XHJcbmNhbGxNYWluKCk7XHJcbiJdfQ==