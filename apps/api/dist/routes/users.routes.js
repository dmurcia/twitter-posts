"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
exports.usersRouter = (0, express_1.Router)();
const userControler = new users_controller_1.default();
exports.usersRouter.route('/').get(userControler.getAll).post(userControler.add);
exports.usersRouter.route('/:id').get(userControler.getOne).put(userControler.update).delete(userControler.delete);
