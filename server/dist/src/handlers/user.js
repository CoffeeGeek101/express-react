"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.signup = void 0;
const index_1 = require("../../prisma/index");
const getCookie_1 = require("../util/getCookie");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const signup = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        if (!email || !password || !name) {
            return res.status(400).json({ 'error': 'Please provide all the details' });
        }
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const user = await index_1.prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name
            }
        });
        (0, getCookie_1.getCookie)(user, res);
    }
    catch (e) {
        console.log(e);
    }
};
exports.signup = signup;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ 'error': 'Please provide all the details' });
        }
        const user = await index_1.prisma.user.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            throw new Error('User not found');
        }
        const decodedPassword = bcryptjs_1.default.compare(password, user.password);
        if (!decodedPassword) {
            return res.status(401).json({ 'error': 'Invalid credentials' });
        }
        (0, getCookie_1.getCookie)(user, res);
    }
    catch (error) {
        console.log(error);
    }
};
exports.login = login;
const logout = async (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ 'msg': 'Logged out successfully' });
    }
    catch (error) {
        console.log(error);
    }
};
exports.logout = logout;
//# sourceMappingURL=user.js.map