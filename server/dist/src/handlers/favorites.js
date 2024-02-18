"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unfavorite = exports.favorite = void 0;
const index_1 = require("../../prisma/index");
const favorite = async (req, res) => {
    const userId = req.user.id;
    const { anime_id } = req.body;
    if (!anime_id || (typeof anime_id !== 'string')) {
        return res.status(400).json({ 'error': 'Please provide a valid anime id' });
    }
    try {
        const user = await index_1.prisma.user.update({
            where: {
                id: userId
            },
            data: {
                favorites: {
                    push: anime_id
                }
            }
        });
        if (!user) {
            return res.status(404).json({ 'error': 'User not found' });
        }
        res.status(200).json(user.favorites);
    }
    catch (error) {
        console.log(error);
    }
};
exports.favorite = favorite;
const unfavorite = async (req, res) => {
    const userId = req.user.id;
    const { anime_id } = req.body;
    if (!anime_id || (typeof anime_id !== 'string')) {
        return res.status(400).json({ 'error': 'Please provide a valid anime id' });
    }
    try {
        const user = await index_1.prisma.user.update({
            where: {
                id: userId
            },
            data: {
                favorites: {
                    set: req.user.favorites.filter((id) => id !== anime_id)
                }
            }
        });
        if (!user) {
            return res.status(404).json({ 'error': 'User not found' });
        }
        res.status(200).json(user.favorites);
    }
    catch (error) {
        console.log(error);
    }
};
exports.unfavorite = unfavorite;
//# sourceMappingURL=favorites.js.map