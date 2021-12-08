"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeter = exports.sayGoodbye = exports.sayHello = void 0;
var hello_world_1 = require("./hello-world");
Object.defineProperty(exports, "sayHello", { enumerable: true, get: function () { return hello_world_1.sayHello; } });
Object.defineProperty(exports, "sayGoodbye", { enumerable: true, get: function () { return hello_world_1.sayGoodbye; } });
var Greeter = function (name) { return "Hello ".concat(name); };
exports.Greeter = Greeter;
