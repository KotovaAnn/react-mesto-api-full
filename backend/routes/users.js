const { celebrate, Joi } = require('celebrate');

const userRouter = require('express').Router();
const regex = require('../utils/constants');

const {
  getUsers,
  getUserInfo,
  getUserbyId,
  profileUpdate,
  avatarUpdate,
} = require('../controllers/users');

userRouter.get('/users', getUsers);
userRouter.get('/users/me', getUserInfo);
userRouter.get('/users/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().alphanum().length(24),
  }),
}), getUserbyId);

userRouter.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), profileUpdate);

userRouter.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().regex(regex),
  }),
}), avatarUpdate);

module.exports = {
  userRouter,
};
