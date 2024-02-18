"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const favorites_1 = require("../handlers/favorites");
const userVerify_1 = require("../middleware/userVerify");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.route('/add').post(userVerify_1.userVerify, favorites_1.favorite);
router.route('/remove').post(userVerify_1.userVerify, favorites_1.unfavorite);
exports.default = router;
//# sourceMappingURL=favoriteRoute.js.map