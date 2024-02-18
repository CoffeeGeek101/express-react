"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../handlers/user");
const router = express_1.default.Router();
router.route('/signup').post(user_1.signup);
router.route('/login').post(user_1.login);
router.route('/logout').get(user_1.logout);
exports.default = router;
//# sourceMappingURL=userRoute.js.map