"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const User_1 = __importDefault(require("../models/User"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User_1.default.findAll();
    return res.json({
        msg: 'get users',
        users
    });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield User_1.default.findByPk(id);
    return res.json({
        msg: 'get user',
        id
    });
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const user = yield User_1.default.create(body);
    return res.json({
        msg: 'post user',
        body
    });
});
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    const user = yield User_1.default.findByPk(id);
    if (!user) {
        return res.status(404).json({
            msg: `User with id ${id} not found`
        });
    }
    yield user.update(body);
    return res.json({
        msg: 'put user',
        id,
        body
    });
});
exports.putUser = putUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield User_1.default.findByPk(id);
    if (!user) {
        return res.status(404).json({
            msg: `User with id ${id} not found`
        });
    }
    yield user.update({ status: 0 });
    return res.json({
        msg: 'delete user',
        id
    });
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=userControllers.js.map