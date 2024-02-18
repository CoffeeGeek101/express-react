"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCookie = void 0;
const getToken_1 = require("./getToken");
const getCookie = (user, res) => {
    const token = (0, getToken_1.getToken)(user.id);
    const options = {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        httpOnly: true,
    };
    res.cookie('token', token, options).json({ sucess: true });
};
exports.getCookie = getCookie;
//# sourceMappingURL=getCookie.js.map