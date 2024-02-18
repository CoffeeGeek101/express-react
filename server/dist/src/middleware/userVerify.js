"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userVerify = void 0;
const index_1 = require("../../prisma/index");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userVerify = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Not Authenticated' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const userId = decoded.userId;
        const user = await index_1.prisma.user.findUnique({
            where: {
                id: userId
            }
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        req.user = user;
        next();
    }
    catch (error) {
        console.log(error);
    }
};
exports.userVerify = userVerify;
//# sourceMappingURL=userVerify.js.map