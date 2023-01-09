const express = require('express');
const userRouter = express.Router();
const userController = require('../controller/userController.js')

userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userController.createNewUser);
userRouter.get('/:id', userController.getUserDetails);
userRouter.delete('/:id', userController.deleteUser);
userRouter.put('/:id', userController.updateUser);

module.exports = userRouter;


