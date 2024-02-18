"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUser = void 0;
const currentUser = async (req, res) => {
    try {
        const user = req.user;
        res.json(user);
    }
    catch (error) {
        console.log(error);
    }
};
exports.currentUser = currentUser;
//# sourceMappingURL=currentuser.js.map