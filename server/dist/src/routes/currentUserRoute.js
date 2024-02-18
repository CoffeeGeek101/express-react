"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const currentuser_1 = require("../handlers/currentuser");
const userVerify_1 = require("../middleware/userVerify");
const router = express_1.default.Router();
router.route('/getcurrentuser').get(userVerify_1.userVerify, currentuser_1.currentUser);
exports.default = router;
//# sourceMappingURL=currentUserRoute.js.map