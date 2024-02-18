"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const currentUserRoute_1 = __importDefault(require("./routes/currentUserRoute"));
const favoriteRoute_1 = __importDefault(require("./routes/favoriteRoute"));
app.use('/', userRoute_1.default);
app.use('/', currentUserRoute_1.default);
app.use('/favorites', favoriteRoute_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
//# sourceMappingURL=server.js.map