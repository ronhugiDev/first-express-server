const express = require('express');
const friendsController = require('../controllers/friends.controller')

const friendRouter = express.Router();

friendRouter.use((req,res,next)=>{
    console.log(req.ip);
    next();
})

friendRouter.post("/", friendsController.addFriend );
friendRouter.get("/", friendsController.getFriends);
friendRouter.get("/:friendId", friendsController.getFriendById);

module.exports = friendRouter;