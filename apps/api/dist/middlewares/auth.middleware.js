"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = exports.authMiddleware = void 0;
const firebaseAdmin = __importStar(require("firebase-admin"));
const config_1 = __importDefault(require("../config"));
firebaseAdmin.initializeApp(config_1.default.firebaseConfig);
const authMiddleware = async (req, res, next) => {
    const headerToken = req.headers.authorization;
    if (!headerToken) {
        return res.send({ message: 'No token provided' }).status(401);
    }
    if (headerToken && headerToken.split(' ')[0] !== 'Bearer') {
        res.send({ message: 'Invalid token' }).status(401);
    }
    const token = headerToken.split(' ')[1];
    try {
        const appCheckClaims = await firebaseAdmin.appCheck().verifyToken(token);
        return next();
    }
    catch (error) {
        res.json({ message: 'Could not authorize' }).status(403);
    }
};
exports.authMiddleware = authMiddleware;
const errorMiddleware = (err, req, res, next) => {
    res.status(500).json({ message: err.message });
};
exports.errorMiddleware = errorMiddleware;
