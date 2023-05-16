"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
const router = (0, express_1.Router)();
router.get('/', userControllers_1.getUsers);
router.get('/:id', userControllers_1.getUser);
router.post('/', userControllers_1.postUser);
router.put('/:id', userControllers_1.putUser);
router.delete('/:id', userControllers_1.deleteUser);
exports.default = router;
//# sourceMappingURL=users.js.map