const friendModel = require('../models/friends.models.js')

function getFriends(req, res) {
  res.json(friendModel.friends);
}

function getFriendById(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = friendModel.friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "no friend found",
    });
    res.sendStatus(404);
  }
}

function addFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "invalid input, need name in req body",
    });
  }
  const newFriend = {
    name: req.body.name,
    id: friendModel.friends.length,
  };
  friendModel.friends.push(newFriend);

  res.json(newFriend);
}

module.exports = {
  getFriends,
  getFriendById,
  addFriend,
};
